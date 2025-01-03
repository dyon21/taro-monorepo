import { Tabbar as TabbarImpl } from "@project/components";

import indexImg from "@project/assets/images/tabbar/icon_tab_home.png";
import indexActiveImg from "@project/assets/images/tabbar/icon_tab_home_active.png";
import categoryImg from "@project/assets/images/tabbar/icon_tab_category.png";
import categoryActiveImg from "@project/assets/images/tabbar/icon_tab_category_active.png";
import shopCartImg from "@project/assets/images/tabbar/icon_tab_shopcart.png";
import shopCartActiveImg from "@project/assets/images/tabbar/icon_tab_shopcart_active.png";
import mineImg from "@project/assets/images/tabbar/icon_tab_user.png";
import mineActiveImg from "@project/assets/images/tabbar/icon_tab_user_active.png";

const config = [
  {
    iconPath: indexImg,
    selectedIconPath: indexActiveImg,
    pagePath: "pages/index/index",
    text: "首页",
  },
  {
    iconPath: categoryImg,
    selectedIconPath: categoryActiveImg,
    pagePath: "pages/category/index",
    text: "分类",
  },
  {
    iconPath: shopCartImg,
    selectedIconPath: shopCartActiveImg,
    pagePath: "pages/cart/index",
    text: "购物车",
  },
  {
    iconPath: mineImg,
    selectedIconPath: mineActiveImg,
    pagePath: "pages/mine/index",
    text: "我的",
  },
];

export const Tabbar = (props: { selected: number }) => {
  return <TabbarImpl config={config} selected={props.selected} />;
};
