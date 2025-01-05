<template>
  <div class="skills text-center" id="skills">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-md-6 skill">
          <Guages :title="'PYTHON'" :percentVal="70" />
        </div>
        <div class="col-md-3 col-md-6 skill">
          <Guages :title="'HTML5'" :percentVal="60" />
        </div>
        <div class="col-md-3 col-md-6 skill">
          <Guages :title="'CSS'" :percentVal="55" />
        </div>
        <div class="col-md-3 col-md-6 skill">
          <Guages :title="'JAVASCRIPT'" :percentVal="55" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Guages from "./Guages.vue";

export default {
  components: { Guages },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-center {
  text-align: center !important;
}

.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.skills .skill {
  padding: 70px 0px;
}

.skills {
  background-color: rgb(249, 249, 249);
}

@media (min-width: 576px) {
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}

@media (min-width: 768px) {
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
}

.chart {
  position: relative;
  display: inline-block;
  width: 152px;
  height: 152px;
  margin-bottom: 26px;
  text-align: center;
}

.percent {
  display: inline-block;
  font-size: 21px;
  color: #121d1f;
  line-height: 150px;
  z-index: 2;
}
.percent:after {
  content: "%";
  margin-left: 0.1em;
  font-size: 0.8em;
}
.chart canvas {
  position: absolute;
  top: 0;
  left: 0;
}
.skills h5 {
  margin: 0;
  font-weight: 700;
  font-size: 10pt;
  letter-spacing: 1pt;
  color: #1b1b1b;
}
</style>
