<template>
  <div class="header" id="header">
    <canvas ref="starfieldCanvas"></canvas>

    <div class="container">
      <div class="row">
        <div class="header-wrapper">
          <h1>
            SRE &amp;<br />
            Mechanical Engineer
          </h1>
          <h2>Keivan Ardam</h2>
        </div>
      </div>
    </div>
    <div class="more-info">
      <button class="more-info-but" @click="scrollToComponent('About')">
        LEARN MORE <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      stars: [],
      canvas: null,
      ctx: null,
      numStars: 500,
    };
  },
  mounted() {
    this.initCanvas();
    this.generateStars();
    this.animate();
  },
  methods: {
    initCanvas() {
      this.canvas = this.$refs.starfieldCanvas;
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      window.addEventListener("resize", this.handleResize);
    },
    handleResize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.generateStars();
    },
    generateStars() {
      this.stars = [];
      for (let i = 0; i < this.numStars; i++) {
        const size =
          Math.random() < 0.7
            ? "small"
            : Math.random() < 0.7
            ? "medium"
            : "large";

        const radius = 15 + Math.random() * 50 + Math.random() * 50; // Varying radius
        const angle = Math.random() * Math.PI * 2; // Initial random angle
        const angularSpeed = 0.001 + Math.random() * 0.001; // Random angular speed
        const invisible = Math.random() < 0.004; // 2% chance to be initially invisible
        const invisibleDuration = Math.random() * 5000 + 2000; // Random duration before reappearing

        this.stars.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          radius,
          angle,
          angularSpeed,
          size,
          invisible,
          invisibleTime: invisible ? Date.now() + invisibleDuration : 0,
        });
      }
    },
    drawStars() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "white";

      this.stars.forEach((star) => {
        if (!star.invisible || Date.now() > star.invisibleTime) {
          const starX =
            star.x +
            Math.cos(star.angle) * star.radius +
            Math.cos(star.angle) * 3;
          const starY =
            star.y +
            Math.sin(star.angle) * star.radius +
            Math.cos(star.angle) * 2;

          if (star.size === "small") {
            this.ctx.fillRect(starX, starY, 0.5, 0.5);
          } else if (star.size === "medium") {
            this.ctx.fillRect(starX, starY, 1, 1);
          } else {
            this.ctx.fillRect(starX, starY, 2, 2);
          }
        }
      });
    },
    moveStars() {
      this.stars.forEach((star) => {
        star.angle += star.angularSpeed;

        if (star.invisible && Date.now() > star.invisibleTime) {
          star.invisible = false; // Make the star visible again
        }

        // 1% chance per frame for a star to become invisible
        if (!star.invisible && Math.random() < 0.00005) {
          star.invisible = true;
          star.invisibleTime = Date.now() + Math.random() * 5000 + 2000; // Reappear after a random duration
        }
      });
    },
    animate() {
      this.drawStars();
      this.moveStars();
      requestAnimationFrame(this.animate);
    },

    scrollToComponent(componentLabel) {
      const about_component = this.menu.filter(
        (item) => item.label === "About"
      )[0];
      const about_ref = about_component.ref;
      // Find the corresponding component by label
      if (about_ref) {
        // Scroll to the component
        about_ref.$el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.header {
  position: relative;
  background: url("@/assets/bg.jpg") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%; /* or remove this line */
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}

.header-wrapper {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 35%;
  max-width: 450px;
}

.header-wrapper h1 {
  font-size: 32pt;
  font-weight: 700;
  letter-spacing: 4pt;
  line-height: 40pt;
  color: #fff;
  text-transform: uppercase;
}

.header-wrapper h2 {
  font-size: 10pt;
  font-weight: 300;
  letter-spacing: 4pt;
  color: #9e9e9e;
  text-transform: uppercase;
}

@media (max-width: 880px) {
  .header-wrapper h1 {
    font-size: 18pt; /* Smaller font size for medium and small screens */
  }
}

.more-info {
  position: absolute;

  right: 20px;
  bottom: 20px;
  z-index: 40;
}
.more-info-but {
  background-color: transparent;
  color: rgb(202, 202, 202);
  writing-mode: vertical-rl; /* Set the writing mode to vertical right-to-left */
  white-space: nowrap; /* Prevent the text from wrapping */
  width: 40px; /* Set the desired width */
  height: 150px; /* Set the desired height */
  border: none;
  cursor: pointer;
  font-size: 16px; /* Set the font size */
  margin: 10px; /* Set margin as needed */
  transition: background-color 0.3s ease; /* Add a transition effect */
  letter-spacing: 4px;
  font-size: 0.8rem;
  font-weight: 300;
  animation: bounce 4s infinite;
}

/* Add the bounce animation */
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
.more-info-but:hover {
  cursor: pointer;
}
</style>
