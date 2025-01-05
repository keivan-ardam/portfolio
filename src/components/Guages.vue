<template>
  <span class="chart" ref="chartContainer" :class="{ visible: isAnimated }">
    <span class="percent">{{ percentVal }}</span>
    <canvas
      ref="chartCanvas"
      height="190"
      width="190"
      style="height: 152px; width: 152px"
    ></canvas>
  </span>
  <h5>{{ title }}</h5>
</template>

<script>
export default {
  props: { title: { default: "-" }, percentVal: { default: 80 } },
  data() {
    return {
      isAnimated: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkIfInView);
    this.checkIfInView();
  },
  destroyed() {
    window.removeEventListener("scroll", this.checkIfInView);
  },
  methods: {
    checkIfInView() {
      const chartContainer = this.$refs.chartContainer;
      const rect = chartContainer.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Check if the component is in the viewport
      if (rect.top < windowHeight && !this.isAnimated) {
        this.isAnimated = true;
        this.animateChart();
      }
    },
    animateChart() {
      const canvas = this.$refs.chartCanvas;
      const context = canvas.getContext("2d");
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = canvas.width / 2 - 5; // Adjust as needed

      const endAngle = (2 * Math.PI * this.percentVal) / 100 - 0.5 * Math.PI;
      const animationSpeed = 0.03;

      let currentAngle = -0.5 * Math.PI;

      const animate = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the background circle
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.lineWidth = 6;
        context.strokeStyle = "#e0e0e0"; // Adjust as needed
        context.stroke();

        // Draw the progress circle
        context.beginPath();
        context.arc(
          centerX,
          centerY,
          radius,
          -0.5 * Math.PI,
          currentAngle,
          false
        );
        context.lineWidth = 6;
        context.strokeStyle = "#1b1b1b"; // Adjust as needed
        context.stroke();

        currentAngle += animationSpeed;

        if (currentAngle < endAngle) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    },
  },
  watch: {
    percentVal() {
      if (this.isAnimated) {
        this.animateChart();
      }
    },
  },
};
</script>

<style scoped>
.chart {
  position: relative;
  display: inline-block;
  width: 152px;
  height: 152px;
  margin-bottom: 26px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

.chart.visible {
  opacity: 1;
}
.percent {
  font-family: "Montserrat", sans-serif;
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
h5 {
  margin: 0;
  font-weight: 700;
  font-size: 10pt;
  letter-spacing: 1pt;
  color: #1b1b1b;
}
</style>
