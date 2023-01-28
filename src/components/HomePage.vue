<template>
  <section class="home" id="home">
    <div class="home-slider">
      <swiper
        :spaceBetween="90"
        :centeredSlides="true"
        :autoplay="{
          delay: 3500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :loop="true"
        :modules="modules"
        class="home-slider wrapper"
      >
        <swiper-slide class="slide">
          <div class="content">
            <span> Our Special Dishes </span>
            <h2>Always fresh Delightful</h2>
            <p>
              Lorem ipsum dolor sit amet. Qui optio culpa et minima sint et sint
              facere et necessitatibus reprehenderit et corrupti quis et soluta
              dolor aut voluptatum quas.
            </p>
            <router-link to="/PizzaDishes" href="#" class="btn"
              >Order Now</router-link
            >
          </div>
          <div class="image">
            <img
              src="../assets/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg"
              alt=""
            />
          </div>
        </swiper-slide>

        <swiper-slide class="slide">
          <div class="content">
            <span> Our Special Dishes </span>
            <h2>Burger</h2>
            <p>
              Lorem ipsum dolor sit amet. Qui optio culpa et minima sint et sint
              facere et necessitatibus reprehenderit et corrupti quis et soluta
              dolor aut voluptatum quas.
            </p>
            <router-link to="/BurgerDishes" href="#" class="btn"
              >Order Now</router-link
            >
          </div>
          <div class="image">
            <img src="../assets/front-view-burger-stand.jpg" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide class="slide">
          <div class="content">
            <span> Our Special Dishes </span>
            <h2>Fried chicken</h2>
            <p>
              Lorem ipsum dolor sit amet. Qui optio culpa et minima sint et sint
              facere et necessitatibus reprehenderit et corrupti quis et soluta
              dolor aut voluptatum quas.
            </p>
            <router-link to="/FriedChicken" href="#" class="btn"
              >Order Now</router-link
            >
          </div>
          <div class="image">
            <img
              src="../assets/RFO-1400x919-SouthernFriedChicken-737dab64-8685-4d9e-8e91-ac1e8118d95e-0-1400x919.jpg"
              alt=""
            />
          </div>
        </swiper-slide>
      </swiper>
      <!-- <div class="swiper-pagination"></div> -->
    </div>
  </section>
  <h3 class="sub-heading">our dishes</h3>
  <h2 class="heading">popular dishes</h2>
  <div class="selector">
    <button @click="burgerDish">
      <i class="fa-solid fa-burger"> Burger</i>
    </button>
    <button @click="friedChickenDishes">
      <i class="fa-sharp fa-solid fa-turkey"> Fried Chicken</i>
    </button>
    <button @click="pizzaDish"><i class="fa-solid fa-pizza"> Pizza</i></button>
  </div>
</template>

<script>
// import { swiper } from "../js/imgSlider.js";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  methods: {
    burgerDish() {
      return this.$router.push({ path: "/BurgerDishes" });
    },
    friedChickenDishes() {
      return this.$router.push({ path: "/FriedChicken" });
    },
    pizzaDish() {
      return this.$router.push({ path: "/PizzaDishes" });
    },
  },
};
</script>

<style>
:root {
  --light-gray: #8d8d8d;
  --black: #343a4b;
  --light-color: #666;
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}
section {
  padding: 2rem 9%;
}
section:nth-child(even) {
  background: rgb(255, 255, 255);
}
.home .home-slider .slide {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 9rem;
}

.home .home-slider .slide .content {
  flex: 1 1 45rem;
}
.home .home-slider .slide .image {
  flex: 1 1 45rem;
}
.home .home-slider .slide .image img {
  width: 100%;
}
.home .home-slider .slide .content span {
  color: var(--light-color);
  font-size: 2.5rem;
}
.home .home-slider .slide .content h2 {
  color: var(--black);
  font-size: 6.5rem;
}
.home .home-slider .slide .content p {
  color: var(--light-color);
  font-size: 2rem;
  padding: 0.5rem 0;
  line-height: 2.5rem;
}
.btn {
  margin-top: 1rem;
  display: inline-block;
  font-size: 1.7rem;
  color: #fff;
  background: var(--black);
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.8rem 3rem;
}
.btn:hover {
  background: var(--light-gray);
}
.selector {
  text-align: center;
}
.selector button {
  font-size: 20px;
  background: #fff;
  color: #181818;
  /* margin: 25px; */
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 1rem 10rem;
}
.selector button:hover,
.selector button.active:hover {
  color: var(--light-gray);
}

.sub-heading {
  text-align: center;
  color: var(--black);
  font-size: 2rem;
  padding-top: 3rem;
}
.heading {
  text-align: center;
  color: var(--light-gray);
  font-size: 3rem;
  padding-bottom: 1rem;
}
@media (max-width: 732px) {
  .selector button {
    font-size: 15px;
    border-radius: 0.5rem;
    cursor: pointer;
    padding: 1rem 5rem;
  }
}
</style>
