import Vue from "vue";
import VueRouter from "vue-router";

// Main Layout Component
const TheContainer = () =>
  import(/*webpackChunkName: "layout"*/ "@/template/layout/TheContainer");
// Pages
const Blank = () => import(/*webpackChunkName: "blank-page"*/ "@/views/Blank");
const Buttons = () => import(/*webpackChunkName: "Button"*/ "@/views/Button");
const Input = () => import(/*webpackChunkName: "Input"*/ "@/views/Alpha/Input");
const Cards = () => import(/*webpackChunkName: "Card"*/ "@/views/Card");
const ToastView = () => import(/*webpackChunkName: "ToastView"*/ "@/views/ToastView");
const Chart = () => import(/*webpackChunkName: "Chart"*/ "@/views/Chart");

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
      },
      {
        path: "/buttons",
        name: "Buttons",
        component: Buttons
      },
      {
        path: "/input",
        name: "input",
        component: Input
      },
      {
        path: "/cards",
        name: "Cards",
        component: Cards
      },
      {
        path: "/toast",
        name: "toast",
        component: ToastView
      },
      {
        path: "/chart",
        name: "chart",
        component: Chart
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
