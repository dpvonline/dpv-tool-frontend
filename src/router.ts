import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "@/modules/auth/store/index.ts";

import AppRouter from "@/modules/app/router";
import DashboardRouter from "@/modules/dashboard/router";
import RecipeRouter from "@/modules/recipe/router";
import IngredientRouter from "@/modules/ingredient/router";
import FaqRouter from "@/modules/faq/router";
import SettingsRouter from "@/modules/settings/router";
import HintRouter from "@/modules/hint/router";
import SupportRouter from "@/modules/support/router";
import AuthRouter from "@/modules/auth/router";
import GroupRouter from "@/modules/group/router";
import PersonRouter from "@/modules/person/router";
import LandingMain from "@/modules/landing/router";

const routes = [
  ...DashboardRouter,
  ...AppRouter,
  ...IngredientRouter,
  ...RecipeRouter,
  ...FaqRouter,
  ...SettingsRouter,
  ...HintRouter,
  ...SupportRouter,
  ...AuthRouter,
  ...GroupRouter,
  ...PersonRouter,
  ...LandingMain,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
});

function sleep(ms) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  while (!authStore.isKeycloakInit) {
    // eslint-disable-next-line no-await-in-loop
    await sleep(100);
  }

  if (!to.meta.requiresAuth || authStore.isAuth) next()
  else next('/')
})

export default router;
