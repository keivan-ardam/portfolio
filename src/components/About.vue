<template>
  <section class="about ss-style-triangles">
    <div class="split-section">
      <div class="first-side col-lg-6 col-lg-12">
        <div class="main-text">
          <h2>About</h2>
          <hr class="line" />
          <h3>My Story</h3>
          <p>
            Passionate Data Scientist and Service Reliability Engineer with
            nearly 3 years of expertise in IoT, data analysis, and machine
            learning. Currently driving building energy efficiency through
            cutting-edge autonomous AI HVAC tech. Committed to a greener, more
            efficient future.

            <a
              class="d-inline-block"
              tabindex="0"
              data-bs-toggle="tooltip"
              title="Download Resume"
              :href="`${publicPath}Keivan_Ardam_Resume.pdf`"
              download="Keivan_Ardam_Resume.pdf"
              ><i class="fa fa-download cpl" aria-hidden="true"></i
            ></a>
          </p>
        </div>
      </div>
      <div class="second-side col-lg-6 col-lg-12"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section_1",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  margin-top: 0px;
  position: relative;
}

.ss-style-triangles::after {
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

.split-section {
  display: flex;
  flex-wrap: wrap;
}

.main-text {
  padding: 150px 70px;
}
.first-side h2 {
  margin: 0 auto;
  margin-left: 70px;
  color: #1b1b1b;
  font-size: 26pt;
  letter-spacing: 2pt;
  text-transform: uppercase;
  font-weight: 700;
}
.line {
  margin-left: 70px;
  width: 25px;
  height: 3px;
  background-color: #1d1d1d;
}

hr {
  margin: 1rem 0;
  color: inherit;
  border: 0;
  border-top: 1px solid;
  opacity: 0.25;
}
.first-side h3 {
  margin: 0 auto;
  margin-left: 70px;
  color: #8b8b8b;
  font-size: 8pt;
  letter-spacing: 1pt;
  text-transform: uppercase;
}

.first-side p {
  font-size: 11pt;
  letter-spacing: 1pt;
  line-height: 20pt;
  text-align: justify;
  margin: 0 auto;
  margin-left: 70px;
  margin-right: 70px;
  padding-top: 20px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: #455a64;
}

.second-side {
  background: url("@/assets/bg2.jpg") no-repeat center center;
  background-size: cover;
  width: 100%;
  position: relative;
  z-index: 0;
  content: "";
  min-height: 100vh;
}

a {
  position: absolute;
  left: 0;
  bottom: 0;
  color: inherit; /* Use the color inherited from the parent */
  text-decoration: none; /* Remove the underline */
  font-size: 12pt;
  padding: 5px 10px;
  background-color: #000000d8;
}

a i {
  color: rgb(205, 205, 205);
}

@media (min-width: 992px) {
  .col-lg-6 {
    flex: 0 0 auto;
    width: 100%;
    min-height: 100vh;
  }
}

@media (min-width: 880px) {
  .col-lg-12 {
    flex: 0 0 auto;
    width: 50%;
    min-height: 100vh;
  }
}
</style>
