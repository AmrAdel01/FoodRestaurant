import { createWebHistory, createRouter } from "vue-router";
import homePage from "../components/HomePage.vue";
import friedChickenDishes from "../components/friedChickenDishes.vue";
import burgerDish from "../components/burgerDishes.vue";
import PizzaDishes from "../components/PizzaDishes.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "homePage",
      path: "/home",
      component: homePage,
    },
    {
      name: "Fried",
      path: "/FriedChicken",
      component: friedChickenDishes,
    },
    {
      name: "Burger",
      path: "/BurgerDishes",
      component: burgerDish,
    },
    {
      name: "Pizza",
      path: "/PizzaDishes",
      component: PizzaDishes,
    },
  ],
});

export default router;
