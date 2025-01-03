import { Swiper, SwiperItem, Image } from "@tarojs/components";

const banners = [
  "https://static.xyb2b.com/images/10f903de2e511a3838da5c7697f804e1.jpg",
  "https://static.xyb2b.com/images/062fcec2a075a3adaeea7bbbad501ff8.jpg",
];

export const Carousel = () => {
  return (
    <Swiper
      circular
      autoplay
      indicatorDots
      indicatorWidth={24}
      indicatorColor="#ffffff88"
      indicatorActiveColor="#fff"
    >
      {banners.map((banner, index) => (
        <SwiperItem key={index}>
          <Image mode="aspectFill" src={banner} className="w-full h-full" />
        </SwiperItem>
      ))}
    </Swiper>
  );
};
