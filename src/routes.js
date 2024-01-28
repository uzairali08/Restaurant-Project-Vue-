import HomePageComp from "./components/HomePageComp.vue";
import SignUpComp from "./components/SignUpComp.vue";
import LoginComp from "./components/LoginComp.vue";
import AddRestoComp from "./components/AddRestoComp.vue";
import UpdateRestoComp from "./components/UpdateRestoComp.vue";
import PageNotFound from "./components/PageNotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePageComp",
    component: HomePageComp,
    path: "/",
  },
  {
    name: "SignUpComp",
    component: SignUpComp,
    path: "/sign-up",
  },
  {
    name: "LoginComp",
    component: LoginComp,
    path: "/login",
  },
  {
    name: "AddRestoComp",
    component: AddRestoComp,
    path: "/add-restaurant",
  },
  {
    name: "UpdateRestoComp",
    component: UpdateRestoComp,
    path: "/update-restaurant/:id",
  },
  {
    name: "PageNotFound",
    component: PageNotFound,
    path: "/:pathMatch(.*)*",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
