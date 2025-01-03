import useSWR from "swr";
import api from "@/api";
import { View } from "@tarojs/components";


export const ProductList = () => {
  const { data } = useSWR(["products"], async () => {
    return api
      .getProductList({})
      .then((res) => {
        return res.data;
      });
  });


  return (
    <View className="bg-[#F5F5F5]">
      page
    </View>
  );
};
