<template>
  <section class="container">
    <h2>Resume</h2>

    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item borderFade" role="presentation">
        <button
          class="nav-link"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          :class="mode === 'exp' ? 'active' : ''"
          @click="mode = 'exp'"
        >
          Expirience
        </button>
      </li>
      <li class="nav-item borderFade" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          tabindex="-1"
          :class="mode === 'edu' ? 'active' : ''"
          @click="mode = 'edu'"
        >
          Education
        </button>
      </li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
        tabindex="0"
        v-if="mode === 'exp'"
      >
        <ul class="resume-list">
          <li>
            <div class="timeline-image">
              <h4>
                Present <br />
                - <br />
                Jul 2023
              </h4>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>BrainBox AI</h4>
                <h4 class="subheading">AI Service Reliability Engineer</h4>
              </div>
              <div class="timeline-body">
                <p>
                  As an AI Service Reliability Engineer at BrainBox AI, I'm
                  responsible for creating tools and dashboards that boost
                  system visibility and monitoring efficiency. I collaborate
                  with teams to proactively address issues, ensuring the
                  reliability of our AI services. This role involves using
                  innovative technologies to streamline processes and enhance
                  the user experience, contributing to peak operational
                  performance.
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <h4>
                Jul 2023 <br />
                - <br />
                Mar 2022
              </h4>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>BrainBox AI</h4>
                <h4 class="subheading">
                  AI HVAC Service Development Specialist
                </h4>
              </div>
              <div class="timeline-body">
                <p>
                  As an AI HVAC Service Development Specialist at BrainBox AI, I
                  formulated and implemented automated services for solution
                  deployment and supervision of HVAC systems. I contributed to
                  the development of cutting-edge solutions for predictive
                  maintenance and energy optimization, with a strategic emphasis
                  on scalability enhancement.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-image">
              <h4>
                Mar 2022 <br />
                - <br />
                Mar 2021
              </h4>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>DataOptima</h4>
                <h4 class="subheading">Data Scientist & Research Assistant</h4>
              </div>
              <div class="timeline-body">
                <p>
                  As a Data Scientist at DataOptima, I focused on using machine
                  learning to minimize energy consumption in a medical center.
                  This included cleaning and analyzing sensor data, developing
                  predictive models, and implementing strategies for real-time
                  energy optimization.
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <h4>
                Sept 2017 <br />
                - <br />
                Sept 2016
              </h4>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>ASTA Co.</h4>
                <h4 class="subheading">Pressure Vessels QC</h4>
              </div>
              <div class="timeline-body">
                <p>
                  In my role at ASTA Co. in Pressure Vessels QC, I was actively
                  involved in calculating the thermal performance of an
                  innovative boiler. My tasks included ensuring compliance with
                  industry standards and conducting quality control assessments.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
        tabindex="0"
        v-if="mode === 'edu'"
      >
        <ul class="resume-list">
          <li>
            <div class="timeline-image">
              <h4>
                Jun 2020 <br />
                - <br />
                Sept 2017
              </h4>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>Politecnico di Milano</h4>
                <h4 class="subheading">MSc. in Mechanical Engineering</h4>
              </div>
              <div class="timeline-body">
                <p>
                  Thesis: Application of Machine Learning in Frictional Pressure
                  Drop Estimation of Two-Phase Flow; Multiphase Flow Lab
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <h4>
                Oct 2015 <br />
                - <br />
                Sept 2011
              </h4>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>Amirkabir University of Technology</h4>
                <h4 class="subheading">BSc. in Mechanical Engineering</h4>
              </div>
              <div class="timeline-body">
                <p>
                  Thesis: Design, Fabrication, and Analysis of Different Arrays
                  of Impinging Jets for Heat Transfer Coefficients
                  Investigation; Heat Transfer Laboratory
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Tab panes Div End-->
  </section>
</template>

<script>
export default {
  data() {
    return {
      mode: "exp",
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}

.container h2 {
  font-size: 36px;
  text-align: center;
  margin-top: 100px;
  color: #262626;
  text-transform: uppercase;
  letter-spacing: 2pt;
}

.nav-tabs {
  margin-bottom: 50px;
  border: none;
}

.nav {
  align-items: center;
  justify-content: center;

  --bs-nav-link-padding-x: 1rem;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-link-color);
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  --bs-nav-link-disabled-color: #6c757d;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-tabs {
  --bs-nav-tabs-border-width: 1px;
  --bs-nav-tabs-border-color: #dee2e6;
  --bs-nav-tabs-border-radius: 0.375rem;
  --bs-nav-tabs-link-hover-border-color: #e9ecef #e9ecef #dee2e6;
  --bs-nav-tabs-link-active-color: #495057;
  --bs-nav-tabs-link-active-bg: #fff;
  --bs-nav-tabs-link-active-border-color: #dee2e6 #dee2e6 #fff;
}

.nav-link {
  background: none;
  border: none;
  color: #1b1b1b;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1pt;
  cursor: pointer;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: var(--bs-nav-link-font-size);
  font-weight: var(--bs-nav-link-font-weight);
  color: var(--bs-nav-link-color);
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  margin-bottom: calc(var(--bs-nav-tabs-border-width) * -1);
  background: 0 0;
  border: var(--bs-nav-tabs-border-width) solid transparent;
  border-top-left-radius: var(--bs-nav-tabs-border-radius);
  border-top-right-radius: var(--bs-nav-tabs-border-radius);
}

.nav-link.active {
  color: #969595;
  border-bottom: 2px solid #969595;
  margin: 0;
}

.fade {
  transition: opacity 0.15s linear;
}

.resume-list {
  position: relative;
  padding: 0;
  list-style: none;
}

.resume-list:before {
  content: "";
  position: absolute;
  top: 90px;
  bottom: 180px;
  left: 40px;
  width: 2px;
  margin-left: -1.5px;
  background-color: #eee;
}

@media (min-width: 925px) {
  .resume-list:before {
    left: 50%;
  }
}

.resume-list > li {
  position: relative;
  margin-bottom: 50px;
  min-height: 50px;
}

@media (min-width: 925px) {
  .resume-list > li {
    margin-bottom: 100px;
    min-height: 100px;
  }
}

.resume-list > li:before,
.resume-list > li:after {
  content: " ";
  display: table;
}

.resume-list > li:after {
  clear: both;
}

.resume-list > li .timeline-image {
  z-index: 100;
  position: absolute;
  left: 0;
  width: 70px;
  height: 70px;
  margin-left: 0;
  text-align: center;
}
@media (min-width: 925px) {
  .resume-list > li .timeline-image {
    left: 50%;
    width: 180px;
    height: 180px;
    margin-left: -90px;
    background: linear-gradient(to top right, black 49.5%, transparent 50%) top
        right,
      linear-gradient(to top left, black 49.5%, transparent 50%) top left,
      linear-gradient(to bottom right, black 49.5%, transparent 50%) bottom
        right,
      linear-gradient(to bottom left, black 49.5%, transparent 50%) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    display: inline-block;
  }
}

@media only screen and (max-width: 925px) {
  .resume-list > li .timeline-image {
    border: none;
    background-color: #fafbfc;
    left: 5px;
  }
}

.resume-list > li .timeline-image h4 {
  color: #fff;
  margin-top: 60px;
  font-size: 12px;
  letter-spacing: 1pt;
  text-transform: uppercase;
}

@media (min-width: 925px) {
  .resume-list > li .timeline-image h4 {
    line-height: 18px;
  }
}

@media only screen and (max-width: 925px) {
  .resume-list > li .timeline-image h4 {
    font-size: 8pt;
    letter-spacing: 1pt;
    margin-top: 20px;
    color: #1b1b1b;
  }
}

.resume-list > li .timeline-panel {
  float: right;
  position: relative;
  padding: 0 20px 0 100px;
  text-align: left;
}

@media (min-width: 925px) {
  .resume-list > li .timeline-panel {
    float: left;
    width: 37%;
    padding: 20px 20px 20px 30px;
    text-align: right;
  }
}

@media only screen and (max-width: 925px) {
  .resume-list > li .timeline-panel {
    padding: 20px 40px 20px 100px;
  }
}

.resume-list .timeline-heading h4 {
  margin-top: 0;
  text-transform: uppercase;
  font-size: 10pt;
  letter-spacing: 0.5pt;
}

.resume-list .timeline-body > p,
.resume-list .timeline-body > ul {
  margin-bottom: 0;
}

.resume-list .timeline-body > p {
  line-height: 18pt;
  letter-spacing: 1pt;
  font-size: 11pt;
}

p {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: #455a64;
}

.resume-list > li.timeline-inverted > .timeline-panel {
  float: right;
  padding: 0 20px 0 100px;
  text-align: left;
}

@media (min-width: 925px) {
  .resume-list > li.timeline-inverted > .timeline-panel {
    float: right;
    padding: 20px 30px 20px 20px;
    text-align: left;
  }
}

@media only screen and (max-width: 925px) {
  .resume-list > li.timeline-inverted > .timeline-panel {
    padding: 20px 20px 20px 100px;
  }
}

.resume-list .timeline-heading h4.subheading {
  text-transform: none;
  color: #757575;
  font-size: 14pt;
  font-weight: 300;
}
</style>
