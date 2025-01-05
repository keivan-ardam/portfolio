<template>
  <section class="container ss-style-triangles">
    <h2>Contact</h2>
    <div class="contact">
      <div class="container-fluid">
        <div class="row">
          <div class="no-padding col-lg-3 col-md-12 col-xs-12">
            <div class="contact-wrap">
              <i class="fa-brands fa-linkedin"></i>
              <h4>Linkedin</h4>
              <a
                href="https://www.linkedin.com/in/keivan-ardam/"
                target="_blank"
              >
                <p>keivan.ardam</p>
              </a>
            </div>
          </div>
          <div class="no-padding col-lg-3 col-md-12 col-xs-12">
            <div class="contact-wrap">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <h4>Email</h4>
              <a href="mailto:keivan.ardam@gmail.com">
                <p>keivan.ardam@gmail.com</p>
              </a>
            </div>
          </div>
          <div class="no-padding col-lg-3 col-md-12 col-xs-12">
            <div class="contact-wrap">
              <i class="fa fa-phone-square" aria-hidden="true"></i>
              <h4>Mobile</h4>
              <a href="tel:+393318012213">
                <p>+39 331 80 122 13</p>
              </a>
            </div>
          </div>
          <div class="no-padding col-lg-3 col-md-12 col-xs-12">
            <div class="contact-wrap">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <h4>Address</h4>
              <a
                href="https://maps.app.goo.gl/XczxyNFdESbRZsnTA"
                target="_blank"
              >
                <p>Piacenza, Italy</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <h4>Copyright © All rights reserved.</h4>
    </footer>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  background-color: #000;
  position: relative;
}

.container h2 {
  font-size: 36px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2pt;
  padding: 50px 0px 0px 0px;
}

.container::after {
  left: 50%;
  width: 60px;
  height: 60px;
  transform: translateX(-50%) rotate(45deg);
  top: -30px;
  background: #000000;
  z-index: 1;
}

section::after {
  position: absolute;
  content: "";
  pointer-events: none;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  width: 100%;
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

@media (min-width: 768px) {
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
}

@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
}

.contact .contact-wrap {
  padding: 50px 50px;
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;
  border-right: 1px solid #333333;
}

.contact,
.contact-wrap,
.fa-solid {
  font-size: 20px;
  color: #fff;
}

.contact h4 {
  margin-top: 10px;
  font-size: 12pt;
  letter-spacing: 1pt;
  color: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
}
.contact a {
  text-decoration: none;
}

p {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: #455a64;
}
.contact p {
  font-size: 10pt;
  letter-spacing: 1pt;
  line-height: 16pt;
  margin: 0 auto;
  color: #9e9e9e;
  white-space: nowrap;
}

.no-padding {
  padding: 0;
}

footer {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
footer h4 {
  font-size: 8pt;
  letter-spacing: 2pt;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 90px;
  color: #fff;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
}
</style>
