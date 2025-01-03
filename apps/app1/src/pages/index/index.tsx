import { View } from "@tarojs/components";
import { Tabbar } from "@/components/Tabbar";
import { Carousel } from "./components/Carousel";
import { ProductList } from "./components/ProductList";

export default function Index() {
  return (
    <View>
      <Carousel />
      <ProductList />
      <Tabbar selected={0} />
    </View>
  );
}
