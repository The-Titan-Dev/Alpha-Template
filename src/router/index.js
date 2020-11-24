import Vue from "vue";
import VueRouter from "vue-router";

// Main Layout Component
const TheContainer = () =>
  import(/*webpackChunkName: "layout"*/ "@/template/layout/TheContainer");

// Pages
const Blank = () => import(/*webpackChunkName: "blank-page"*/ "@/views/Blank");
const Buttons = () =>
  import(/*webpackChunkName: "blank-page"*/ "@/views/Buttons");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TheContainer",
    component: TheContainer,
    children: [
      {
        path: "/blank",
        name: "Blank",
        component: Blank
      }
    ]
  },
  {
    path: "/Buttons",
    name: "Buttons",
    component: Buttons
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
