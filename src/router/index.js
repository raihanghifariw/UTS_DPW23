import Vue from "vue";
import Router from "vue-router";

// User
import User from "../views/user/list";
import AddUser from "../views/user/add";
import EditUser from "../views/user/edit";
import DetailUser from "../views/user/detail";

// Banner
import banner from "../views/banner/list";
import AddBanner from "../views/banner/add";
import EditBanner from "../views/banner/edit";
import DetailBanner from "../views/banner/detail";

// Product
import Product from "../views/product/list";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "list-user",
      component: User,
    },
    {
      path: "/list-user",
      name: "list-user",
      component: User,
    },
    {
      path: "/add-user",
      name: "add-user",
      component: AddUser,
    },
    {
      path: "/edit-user",
      name: "edit-user",
      component: EditUser,
    },
    {
      path: "/detail-user",
      name: "detail-user",
      component: DetailUser,
    },
    {
      path: "/list-product",
      name: "list-product",
      component: Product,
    },
    {
      path: "/list-banner",
      name: "list-banner",
      component: banner,
    },
    {
      path: "/add-banner",
      name: "add-banner",
      component: AddBanner,
    },
    {
      path: "/edit-banner",
      name: "edit-banner",
      component: EditBanner,
    },
    {
      path: "/detail-banner",
      name: "detail-banner",
      component: DetailBanner,
    },
  ],
});
