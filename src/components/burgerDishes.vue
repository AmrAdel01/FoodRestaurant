<template>
  <HomePage></HomePage>
  <div class="container">
    <div v-for="food in menus" :key="food.id" class="card">
      <div class="card-image-container">
        <img :src="food.img" alt="" class="card-image" />
      </div>

      <div class="card-info-container">
        <h1 class="card-info-heading">
          {{ food.name }}
        </h1>
        <br />
        <p class="card-info-para">
          {{ food.dsc }}
        </p>
        <br />

        <div class="card-stats-container">
          <div class="card-stats">
            <h1 class="stats-heading">Calories</h1>
            <p class="stats-para">289</p>
          </div>
          <div class="card-stats">
            <h1 class="stats-heading">Fats</h1>
            <p class="stats-para">21g</p>
          </div>
          <div class="card-stats">
            <h1 class="stats-heading">Carbs</h1>
            <p class="stats-para">2g</p>
          </div>

          <div class="card-stats">
            <h1 class="stats-heading">Protien</h1>
            <p class="stats-para">28g</p>
          </div>
        </div>
        <br />
        <button class="add-btn">
          <span @click="addedItem" class="material-icons"> add to cart </span>
        </button>
        <div class="counter">
          <span class="down" @click="removeItem">-</span>
          <p>{{ Item }}</p>
          <span class="up" @click="addItem">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HomePage from "./HomePage.vue";

export default {
  data() {
    return {
      menus: null,
      Item: 0,
    };
  },
  components: {
    HomePage,
  },
  method: {
    addItem() {
      this.Item += 1;
    },
    removeItem() {
      this.Item -= 1;
    },
  },

  mounted() {
    axios
      .get(
        "https://restaurant-67a12-default-rtdb.firebaseio.com/burgermenu.json"
      )
      .then((response) => (this.menus = response.data));
  },
};
</script>
<style>
:root {
  --light-gray: #8d8d8d;
  --black: #343a4b;
  --light-color: #666;
  --dark-gray: rgb(46, 46, 46);
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 0.6rem;
  margin: 0rem 10rem;
}
.card {
  width: 350px;
  margin: 5%;
  /*background: linear-gradient(45deg, #FF9800, #FFEB3B);
    */
  border-radius: 2em;
  border-top-right-radius: 10em;
  box-shadow: 0px 0px 15px #c5c5c5;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  -ms-border-radius: 2em;
  -o-border-radius: 2em;
}

.card-image {
  width: 100%;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
}

.card-info-container {
  padding: 2em 1em 2em;
}

.card-info-heading {
  font-size: 2em;
  text-align: center;
  color: #181818;
}

.card-info-para {
  color: #666666;
  font-size: 1.8em;
  text-align: center;
  font-weight: lighter;
}

.card-stats-container {
  display: flex;
  justify-content: space-between;
}

.stats-heading {
  font-size: 1em;
  color: #8e8e8e;
  margin-bottom: 0.7em;
}

.stats-para {
  font-size: 1.5em;
  font-weight: bold;
}
.add-btn {
  margin-left: 19px;
  margin-top: 1rem;
  display: inline-block;
  font-size: 1.7rem;
  color: #fff;
  background: var(--black);
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 1rem 5rem;
}
.add-btn:hover {
  background: var(--light-gray);
}
.counter {
  width: 150px;
  margin: 8px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.counter p {
  width: 50px;
  border-radius: 50px;
  line-height: 30px;
  font-size: 20px;
  text-align: center;
  background: var(--black);
  color: #fff;
  appearance: none;
  outline: 0;
}
.counter span {
  display: block;
  font-size: 25px;
  padding: 0 10px;
  cursor: pointer;
  color: var(--dark-gray);
  user-select: none;
}
</style>
