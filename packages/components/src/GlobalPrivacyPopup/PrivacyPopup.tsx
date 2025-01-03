import { Button, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { FC } from "react";
import { Popup } from "../Popup";

export const AGREE_PRIVACY_BTN_ID = "agree-privacy-btn";

interface Props {
  visible: boolean;
  contractName?: string;
  onAgree?: () => void;
  onRefuse?: () => void;
  onClose?: () => void;
}
export const PrivacyPopup: FC<Props> = ({
  visible,
  contractName,
  onAgree,
  onRefuse,
}) => {
  return (
    <Popup visible={visible}>
      <View>
        <View>
          小程序将获取您的个人信息，您阅读
          <View onClick={() => Taro.openPrivacyContract()}>
            {contractName || "《创知汇小程序隐私保护指引》"}
          </View>
          并同意表示允许小程序获取。
        </View>
        <View className="flex justify-between">
          <Button onClick={onRefuse}>不同意</Button>
          <Button
            id={AGREE_PRIVACY_BTN_ID}
            openType="agreePrivacyAuthorization"
            onAgreePrivacyAuthorization={onAgree}
          >
            同意
          </Button>
        </View>
      </View>
    </Popup>
  );
};
