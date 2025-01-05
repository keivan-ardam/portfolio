<template>
  <section class="container ss-style-triangles">
    <h2>Skills</h2>

    <div class="grid gird-md-3 gird-md-6">
      <div class="skill">
        <div class="skill-details">
          <i class="fa-solid fa-magnifying-glass-chart fa-2xl"></i>
          <h3>Data Exploration</h3>
          <hr />
          <p>
            Proficiency in using Python libraries for data manipulation,
            analysis, and exploration. Pandas is particularly powerful for
            structured data manipulation, Numpy is widely used for numerical
            operations, and Beautiful Soup & Selenium are commonly utilized for
            web scraping.
          </p>
        </div>
      </div>
      <div class="skill">
        <div class="skill-details">
          <i class="fa-solid fa-chart-line fa-2xl"></i>
          <h3>Data Visualization</h3>
          <hr />
          <p>
            Competence in creating visual representations of data using
            Matplotlib for basic plots, Seaborn for visually appealing and
            informative statistical graphics, as well as Plotly and Chart.js for
            dynamic and interactive data visualization. This skill is critical
            for effectively communicating insights from data to a wider
            audience.
          </p>
        </div>
      </div>
      <div class="skill">
        <div class="skill-details">
          <i class="fa-solid fa-microchip fa-2xl"></i>
          <h3>ML Pipelines</h3>
          <hr />
          <p>
            Experience in developing end-to-end machine learning and deep
            learning pipelines. Scikit-learn is a versatile machine learning
            library, and Keras simplifies the building and training of neural
            networks. This skill set involves model development, training,
            evaluation, and integration into applications.
          </p>
        </div>
      </div>
      <div class="skill">
        <div class="skill-details">
          <i class="fa-brands fa-vuejs fa-2xl"></i>
          <h3>Web Development</h3>
          <hr />
          <p>
            Expertise in Vue.js for building interactive and dynamic web
            application, encompassing component creation, state management, and
            event handling. Adebt in HTML and CSS, along with proficiency in
            utilizing Tailwind, contributes to the creation of visually
            appealing and user-friendly interfaces for data applications.
          </p>
        </div>
      </div>
      <div class="skill">
        <div class="skill-details">
          <i class="fa-solid fa-cloud-arrow-up fa-2xl"></i>
          <h3>Cloud Expertise</h3>
          <hr />
          <p>
            Proficient in SQL for comprehensive database management, querying,
            and manipulation, with a strong foundation in relational databases.
            Experienced in leveraging Google Cloud Platform services,
            specifically BigQuery, for effective large-scale dataset management
            and analytics in a cloud environment.
          </p>
        </div>
      </div>
      <div class="skill">
        <div class="skill-details">
          <i class="fa-solid fa-file-invoice fa-2xl"></i>
          <h3>Documentation</h3>
          <hr />
          <p>
            Proficient in MS Office, LATEX: Strong skills in creating clear and
            comprehensive technical documentation using tools like Microsoft
            Office and LaTeX. This includes writing reports, manuals, and
            documentation for projects, ensuring effective communication of
            complex technical information to various stakeholders.
          </p>
        </div>
      </div>
    </div>
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
  margin: 0px 0px;
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

.container::before {
  left: 50%;
  width: 60px;
  height: 60px;
  transform: translateX(-50%) rotate(45deg);
  bottom: -30px;
  background: #000000;
  z-index: 1;
}

section::after {
  position: absolute;
  content: "";
  pointer-events: none;
}

section::before {
  position: absolute;
  content: "";
  pointer-events: none;
}

.skill {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: start;
  align-items: start;
  color: rgb(227, 227, 227);
  padding: 30px 30px;
  border-radius: 4px;
  transition: background-color 0.3s, transform 0.3s;
}

.skill:hover {
  background-color: #222222;
  transform: translateY(-5px); /* Adjust the value based on your preference */
}

.grid {
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  padding: 60px 50px;
}

@media (min-width: 576px) {
  .gird-md-6 {
    display: grid;
    grid-template-columns: auto auto;
  }
}

@media (min-width: 768px) {
  .gird-md-3 {
    grid-template-columns: auto auto auto;
  }
}

hr {
  margin: 1rem 0;
  color: inherit;
  border: 0;
  opacity: 0.25;
  border-bottom: 4px dashed #fafafa;
  width: 42px;
  margin-left: 0px;
}

p {
  color: #fff;
  font-size: 11pt;
  letter-spacing: 0.4pt;
  line-height: 18pt;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
}

.skill-details h3 {
  color: #fff;
  font-size: 12pt;
  letter-spacing: 1pt;
  text-transform: uppercase;
}
</style>
