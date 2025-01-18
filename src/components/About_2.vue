<template>
  <section class="expertise">
    <div class="split-section">
      <div class="first-side col-lg-6 col-lg-12">
        <video
          id="video_widget_90950318458"
          src="/loop-preview.mp4"
          :loop="true"
          :muted="true"
          :playsinline="true"
          ref="videoElement"
        ></video>
      </div>
      <div class="second-side col-lg-6 col-lg-12">
        <div class="main-text">
          <h2>Expertise</h2>
          <div class="set">
            <div
              class="single_progress_bar revealator-slidedown revealator-once"
            >
              <h4>BACKEND - 80%</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 80%"
                >
                  <span class="sr-only">60% Complete</span>
                </div>
              </div>
            </div>
            <div
              class="single_progress_bar revealator-slidedown revealator-once"
            >
              <h4>FRONTEND - 65%</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 65%"
                >
                  <span class="sr-only">60% Complete</span>
                </div>
              </div>
            </div>
            <div
              class="single_progress_bar revealator-slidedown revealator-once"
            >
              <h4>AI-DRIVEN MODELS - 70%</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 70%"
                >
                  <span class="sr-only">60% Complete</span>
                </div>
              </div>
            </div>
            <div
              class="single_progress_bar revealator-slidedown revealator-once"
            >
              <h4>DATA SCIENCE & ANALYSIS - 80%</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 80%"
                >
                  <span class="sr-only">60% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // Access the video element using the ref
    const videoElement = this.$refs.videoElement;

    // Do something with the video element if needed
    // For example, you can play the video automatically
    videoElement.play();
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.expertise {
  margin-top: 0px;
  position: relative;
}

.first-side {
  background: black;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 0;
}

video {
  margin: 0;
  padding: 0;
  border: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.split-section {
  display: flex;
  flex-wrap: wrap;
}

.second-side {
  min-height: 100vh;
  width: 100%;
}

.main-text {
  padding: 80px 0px 0px 20px;
}
.second-side h2 {
  margin: 0 auto;
  margin-left: 50px;
  color: #1b1b1b;
  font-size: 26pt;
  letter-spacing: 2pt;
  text-transform: uppercase;
  font-weight: 700;
}

.set {
  padding: 40px 50px;
}

.single_progress_bar h4 {
  color: #1b1b1b;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1pt;
  margin-bottom: 10px;
  margin-left: 0px;
}

.single_progress_bar .progress {
  height: 2px;
  margin-bottom: 70px;
  overflow: hidden;
  background-color: #dcdcdc;
  border-radius: 5px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.progress {
  --bs-progress-height: 1rem;
  --bs-progress-font-size: 0.75rem;
  --bs-progress-bg: #e9ecef;
  --bs-progress-border-radius: 0.375rem;
  --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  --bs-progress-bar-color: #fff;
  --bs-progress-bar-bg: #0d6efd;
  --bs-progress-bar-transition: width 0.6s ease;
  display: flex;
  height: var(--bs-progress-height);
  overflow: hidden;
  font-size: var(--bs-progress-font-size);
  background-color: var(--bs-progress-bg);
  border-radius: var(--bs-progress-border-radius);
}

.single_progress_bar .progress-bar {
  background-color: #1b1b1b;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--bs-progress-bar-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-progress-bar-bg);
  transition: var(--bs-progress-bar-transition);
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.text-center {
  text-align: center !important;
}

@media (min-width: 992px) {
  .col-lg-6 {
    flex: 0 0 auto;
    width: 100%;
  }
}

@media (min-width: 880px) {
  .col-lg-12 {
    flex: 0 0 auto;
    width: 50%;
  }
}
</style>
