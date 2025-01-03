import { Image, View } from "@tarojs/components";
import Taro from "@tarojs/taro";

export const Tabbar = (props: {
  selected: number;
  config: {
    iconPath: string;
    selectedIconPath: string;
    pagePath: string;
    text: string;
  }[];
}) => {
  const nav = (url: string) => {
    Taro.switchTab({ url });
  };
  return (
    <View className="fixed-bottom flex items-center justify-around pb-6 pt-2 shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.1)] bg-white">
      {props.config.map((item, index) => (
        <View key={index} onClick={() => nav(`/${item.pagePath}`)}>
          <Image
            src={
              props.selected !== index
                ? item.iconPath
                : item.selectedIconPath || item.iconPath
            }
            className="h-8 w-8"
          />
        </View>
      ))}
    </View>
  );
};
