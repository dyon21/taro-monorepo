import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { Tabbar } from "@/components/Tabbar";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View>
      <Text>mine</Text>
      <Tabbar selected={3} />
    </View>
  );
}
