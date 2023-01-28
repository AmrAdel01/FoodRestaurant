<template>
  <footer class="section-p1">
    <div class="col">
      <h4>Contact</h4>
      <p><strong>Address:</strong> 562 Welling Road, Streat 32, san Franciso</p>
      <p><strong>Phoe:</strong> +01 2222 365 /(+91) 01 2345 6789</p>
      <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
      <div class="follow">
        <h4>Follow us</h4>
        <div class="icon">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-pinterest-p"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>
    </div>
    <div class="col">
      <h4>About</h4>
      <a href="#">About us</a>
      <a href="#">Delivery Informtion</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Contact Us</a>
    </div>
    <div class="col">
      <h4>My Account</h4>
      <a href="#">Sign In</a>
      <a href="#">View Cart</a>
      <a href="#">My Wishlist</a>
      <a href="#">Track My Order</a>
      <a href="#">Help</a>
    </div>

    <div class="col install">
      <h4>Install App</h4>
      <p>From App Store or Google Play</p>
      <div class="row">
        <img
          src="../assets/app-store-logo.png"
          width="100px"
          height="35px"
          alt=""
        />
        <img
          src="../assets/google-play-logo.png"
          width="100px"
          height="35px"
          alt=""
        />
      </div>
      <p>Secured payment Gateways</p>
      <img
        src="../assets/payment-method.png"
        width="200px"
        height="69px"
        alt=""
      />
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
footer .col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
}

footer h4 {
  font-size: 14px;
  padding-bottom: 20px;
}
footer p {
  font-size: 13px;
  margin: 0 0 8px 0;
}
footer a {
  font-size: 13px;
  text-decoration: none;
  color: #222;
  margin-bottom: 10px;
}
footer .follow {
  margin-top: 20px;
}
footer .follow i {
  color: #9ca2a0;
  padding-right: 4px;
  cursor: pointer;
}
footer .follow i:hover,
footer a:hover {
  color: #818ea0;
}

footer .install .row img {
  border: 1px solid #9ca2a0;
  border-radius: 6px;
}

footer .install img {
  margin: 10px 0 15px 0;
}
</style>
