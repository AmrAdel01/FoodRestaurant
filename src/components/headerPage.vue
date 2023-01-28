<template>
  <header>
    <img src="../assets/pngegg.png" alt="Logo" width="60px" />
    <nav class="navbar">
      <router-link to="/home" href="" class="active">Home</router-link>
      <a href="">Special Dishes</a>
      <a href="">About</a>
      <a href="">Team</a>
      <a href="">Reservation</a>
    </nav>
    <div class="icons">
      <i class="fas fa-bars" id="menu-bars"></i>
      <i class="fas fa-search" id="search-icon"></i>
      <a href="" class="fas fa-shopping-cart"></a>
    </div>
  </header>
</template>
<script>
import { menubar } from "../js/menubar";

export default {
  mounted() {
    menubar();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@800&display=swap");
:root {
  --green: #27ae60;
  --black: #343a4b;
  --light-color: #666;
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}
* {
  font-family: "Heebo", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: capitalize;
  transition: all 0.2s linear;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-padding-top: 5.5rem;
  scroll-behavior: smooth;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 1rem 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  box-shadow: var(--box-shadow);
}
header .navbar a {
  font-size: 1.7rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  color: var(--light-color);
}
header .navbar a.active,
header .navbar a:hover {
  color: #fff;
  background: var(--black);
}
header .icons i,
header .icons a {
  cursor: pointer;
  margin-left: 0.5rem;
  height: 4.5rem;
  line-height: 4.5rem;
  width: 4.5rem;
  text-align: center;
  font-size: 1.7rem;
  color: var(--black);
  border-radius: 50%;
  background: #eee;
}
header .icons i:hover,
header .icons a:hover {
  color: #fff;
  background: var(--black);
  transform: rotate(360deg);
}

header .icons #menu-bars {
  display: none;
}

@media (max-width: 991px) {
  html {
    font-size: 55%;
  }
  header {
    padding: 1rem 2rem;
  }
  section {
    padding: 2rem;
  }
}
@media (max-width: 730px) {
  header .icons #menu-bars {
    display: inline-block;
  }
  header .navbar {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
    clip-path: polygon(0 0, 100% 0, 100% 0, 00);
  }

  header .navbar.active {
    clip-path: polygon(50% 0, 100% 0, 100% 0, 0 0);
  }
  header .navbar a {
    display: block;
    padding: 1.5rem;
    margin: 1rem 0;
  }
  .home .home-slider .slide .content h2 {
    font-size: 9rem;
  }
}

@media (max-width: 991px) {
  html {
    font-size: 50%;
  }
}
</style>
