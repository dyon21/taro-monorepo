import { cn } from "@project/utils";
import { Image, View } from "@tarojs/components";
import { PropsWithChildren, useEffect, useState } from "react";

export const Popup = (
  props: PropsWithChildren<{
    visible: boolean;
    onClose?: () => void;
    className?: string;
    showCloseBtn?: boolean;
    maskClosable?: boolean;
  }>,
) => {
  const [_visible, setVisible] = useState(props.visible);
  const handleClose = () => {
    if (!props.visible || !props.onClose) return;
    props.onClose?.();
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (props.visible) {
      setVisible(true);
    } else {
      timer = setTimeout(() => {
        setVisible(false);
      }, 100);
    }
    return () => {
      timer && clearTimeout(timer);
    };
  }, [props.visible]);

  return (
    <View className={cn("fixed inset-0", !_visible && "hidden")}>
      <View
        className="fixed inset-0 bg-opacity-50 bg-black "
        onClick={() => props.maskClosable && handleClose()}
      />
      <View
        className={cn(
          "fixed left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-white rounded-t-lg pb-6 ",
          props.visible
            ? "animate-in slide-in-from-bottom"
            : "animate-out slide-out-to-bottom",
          props.className,
        )}
      >
        {props.children}
        {props.showCloseBtn && (
          <View
            className="absolute top-2 right-2 w-6 h-6"
            onClick={handleClose}
          >
            <Image
              className="w-full h-full object-contain"
              src="https://static.xyb2b.com/images/3e73936c406ead5f66b9f8589f5dd61b.svg"
            />
          </View>
        )}
      </View>
    </View>
  );
};
