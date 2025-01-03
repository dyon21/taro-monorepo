export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/category/index",
    "pages/cart/index",
    "pages/mine/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    color: "#B9B9B9",
    selectedColor: "#333333", // 主题色
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/category/index",
        text: "分类",
      },
      {
        pagePath: "pages/cart/index",
        text: "购物车",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
      },
    ],
  },
});
