<template>
  <div id="container">
    <aside id="left-sidebar">
      <p id="intro">Over 4 years of <span>professional experience</span></p>
      <img
        src="../assets/louis-hansel-v3OlBE6-fhU-unsplash.jpg"
        alt="picture of a person"
      />
      <div id="work-log">
        <h2>Work Log</h2>
      </div>
    </aside>

    <main>
      <h1>Food Hunt<span>Retaurant</span></h1>
      <article>
        <img
          id="featured-img"
          src="../assets/1306023.webp"
          alt="Article's featured image"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A error
          magnam, perferendis et aliquid modi suscipit dolores doloribus,
          dolorum nihil expedita provident nobis deserunt aliquam. Omnis
          dignissimos fuga atque? Incidunt tempora ut facilis ipsam nesciunt sed
          natus. Vero, provident numquam, dolore non reprehenderit, ex et sint
          aut ipsam illo quia.
        </p>
        <p>
          Maxime dignissimos eius molestiae nam dolorem provident voluptatem
          quia quibusdam corrupti libero quas optio obcaecati voluptatum
          incidunt ipsa quam, perspiciatis nulla, fugit pariatur, non assumenda!
          Possimus tempora et fuga ex? Molestiae similique illo, facere nobis
          veritatis est numquam delectus, pariatur quis nisi autem minus dolores
          qui. Voluptatem delectus ipsum consectetur.
        </p>
        <p>
          Tenetur obcaecati nam illum. Beatae quasi non consectetur amet
          dolores, saepe provident iusto mollitia ex aliquam nostrum. Numquam,
          unde. Fugiat, doloribus exercitationem nam dignissimos alias culpa
          itaque voluptatibus. Perferendis accusantium fuga laborum error
          aspernatur id cumque voluptatibus maxime earum praesentium iste
          molestiae aperiam, ducimus recusandae dicta optio aliquam!
          Voluptatibus, illum?
        </p>
        <p>
          Molestiae nam expedita labore, voluptates ipsum aspernatur nobis
          asperiores eveniet rem quia? Quas, cumque! Quae nostrum animi ab
          similique, consequuntur neque quia rerum nisi ad amet earum laboriosam
          natus porro maxime esse sit? Unde recusandae nobis ipsa adipisci aut
          dolores, eum praesentium, inventore earum id autem doloribus. Eos,
          voluptas iusto?
        </p>
        <p>
          Illo possimus dignissimos ut omnis magni fugit beatae molestiae
          eligendi. Exercitationem doloribus praesentium aliquam assumenda
          officia facilis fugiat animi excepturi qui quae veritatis, iste
          sapiente nisi totam accusantium eligendi obcaecati optio? Laborum
          praesentium provident ex, iure error itaque ea, aliquam sequi rerum
          doloremque doloribus culpa tempora obcaecati velit, quam cupiditate!
        </p>
      </article>
    </main>

    <aside id="right-sidebar">
      <img
        src="../assets/istockphoto-1061660510-612x612.jpg"
        alt="tall cover photo"
      />
    </aside>
  </div>
</template>
<script>
export default {};
</script>

<style>
#container {
  display: grid;
  grid-gap: 35px;
  grid-template-columns: 1fr 4fr 1fr;
  margin: 0 auto;
  max-width: 1280px;
  padding: 30px;
}
@media screen and (max-width: 720px) {
  #container {
    grid-template-columns: 100%;
    padding: 30px 15px;
  }
}

#container #left-sidebar img {
  max-height: 250px;
}
#container #left-sidebar #intro {
  color: #404040;
  font-family: "Open Sans", sans-serif;
  font-size: 1.15em;
  font-weight: 600;
  line-height: 1.25em;
  text-transform: uppercase;
}
#container #left-sidebar #intro span {
  display: block;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 0.8em;
  font-weight: 300;
  line-height: 1.15em;
}
@media screen and (max-width: 1200px) {
  #container #left-sidebar #intro {
    font-size: 0.75em;
  }
  #container #left-sidebar #intro span {
    font-size: 1.25em;
    margin-top: 5px;
  }
}
#container img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}
#container h1 {
  color: #404040;
  color: rgba(0, 0, 0, 0.75);
  font-family: serif;
  font-size: 5.5vw;
  margin: 0 0 20px;
  text-align: center;
  text-transform: uppercase;
}
#container h1 span {
  align-items: center;
  color: #808080;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 0.5em;
  font-weight: 300;
  justify-content: center;
}
#container h1 span::before,
#container h1 span::after {
  background-color: #d0d0d0;
  content: "";
  display: block;
  flex: 1;
  height: 1px;
}
#container h1 span::before {
  margin-right: 15px;
}
#container h1 span::after {
  margin-left: 15px;
}
#container #work-log {
  color: #606060;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Open Sans Condensed", sans-serif;
  text-transform: uppercase;
}
#container #work-log h2 {
  margin: 15px 0 5px;
}
#container #work-log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#container #work-log ul li:not(:first-child) {
  margin-top: 5px;
}
#container main {
  color: #606060;
  color: rgba(0, 0, 0, 0.6);
}
#container main article {
  font-size: 1.15em;
}
#container main article #featured-img {
  margin-bottom: 30px;
  max-height: 400px;
}
#container main article p {
  line-height: 1.65em;
}
#container main article p:first-of-type {
  margin-top: 0;
}
#container main article p:first-of-type::first-letter {
  float: left;
  font-size: 3.35em;
  margin: 0.25em 0.15em 0 0;
}
#container #right-sidebar img {
  min-height: 570px;
}
@media screen and (max-width: 720px) {
  #container #right-sidebar img {
    max-height: 250px;
  }
}
</style>
