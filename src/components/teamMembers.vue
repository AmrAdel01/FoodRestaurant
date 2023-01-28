<template>
  <section class="section-team">
    <div class="header-section">
      <h3 class="small-title">Our Experts</h3>
      <h2 class="title">Let's meet with our team members</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-lg-4 col-xl-3">
          <div class="single-person">
            <div class="person-image">
              <img src="../assets/What-Is-A-Chef.webp" alt="" />
            </div>
            <div class="person-info">
              <h3 class="full-name">Clare Smyth</h3>
              <span class="speciality">head chef</span>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4 col-xl-3">
          <div class="single-person">
            <div class="person-image">
              <img
                src="../assets/chef-jobs-in-mumbai-for-freshers.jpg"
                alt=""
              />
            </div>
            <div class="person-info">
              <h3 class="full-name">Vicky Lau</h3>
              <span class="speciality">head chef</span>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4 col-xl-3">
          <div class="single-person">
            <div class="person-image">
              <img src="../assets/Screenshot_26.jpg" alt="" />
            </div>
            <div class="person-info">
              <h3 class="full-name">Pía León</h3>
              <span class="speciality">head chef</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.section-team .header-section {
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-bottom: 5rem;
}
.section-team .header-section .small-title {
  margin-bottom: 1.5rem;
  font-size: 18px;
}
.section-team .header-section .title {
  font-size: 25px;
}
.container .row {
  width: 100rem;
}
.container .row {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-auto-rows: auto;
  grid-gap: 3rem;
}

.section-team .container .single-person {
  margin-top: 30px;
  padding: 30px;
  background-color: #f6f9ff;
  border-radius: 5px;
}

.section-team .single-person:hover {
  background: linear-gradient(to right, #acb4be, #a7abae);
}

.section-team .single-person .person-image {
  position: relative;
  margin-bottom: 50px;
  border-radius: 10%;
  border: 4px dashed transparent;
  transition: padding 0.3s;
}

.section-team .single-person:hover .person-image {
  padding: 12px;
  border: 4px dashed #fff;
}

.section-team .single-person .person-image img {
  width: 100%;
  border-radius: 10%;
  height: 50%;
}

.section-team .single-person:hover .person-image .icon {
  background: none;
  background-color: #fff;
  color: #016cec;
}

.section-team .single-person .person-info .full-name {
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 700;
}

.section-team .single-person .person-info .speciality {
  text-transform: uppercase;
  font-size: 14px;
  color: #a2acb7;
}

section-team .single-person:hover .full-name,
.section-team .single-person:hover .speciality {
  color: #fff;
}
</style>
