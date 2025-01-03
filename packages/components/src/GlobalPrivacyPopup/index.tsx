// source: https://juejin.cn/post/7272749016755765300
import Taro from "@tarojs/taro";
import ReactDom from "react-dom";
import addLifecycleHook from "@project/utils/addLifecycleHook";
import { PrivacyPopup, AGREE_PRIVACY_BTN_ID } from "./PrivacyPopup";

const nonMandatoryPages = new Set(["pages/webview"]);
let resolve: (info: {
  event: "agree" | "disagree";
  buttonId?: string;
}) => void = () => {};

export const popUpPrivacy = (rootId: string) => {
  const portalId = `PrivacyPopupId_${rootId}`;
  const root = document.getElementById(rootId);
  let portal = document.getElementById(portalId);

  if (!portal) {
    portal = document.createElement("view");
    portal.id = portalId;
  }

  if (root && portal) {
    root.appendChild(portal);

    const onClose = () => {
      ReactDom.unmountComponentAtNode(portal!);
      resolve({ event: "disagree" });
    };

    const onAgree = () => {
      ReactDom.unmountComponentAtNode(portal!);
      resolve({
        event: "agree",
        buttonId: AGREE_PRIVACY_BTN_ID,
      });
    };
    ReactDom.render(
      <PrivacyPopup visible onAgree={onAgree} onRefuse={onClose} />,
      portal,
    );
  }
};

if (process.env.TARO_ENV === "weapp") {
  addLifecycleHook("pageHooks", "onReady", () => {
    Taro.onNeedPrivacyAuthorization?.((_resolve) => {
      resolve = _resolve;
      const pages = Taro.getCurrentPages();
      const currentPage = pages[pages.length - 1];
      if (!nonMandatoryPages.has(currentPage.route!)) {
        try {
          popUpPrivacy(currentPage.$taroPath);
        } catch (err) {
          console.error(err);
        }
      }
    });
  });
}
