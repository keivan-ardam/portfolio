<template>
  <section>
    <Transition name="bounce">
      <div class="burger-menu" v-if="!ismenuOpen">
        <i
          class="fa-solid fa-bars"
          aria-hidden="true"
          @click="ismenuOpen = true"
        ></i>
      </div>
    </Transition>

    <Transition name="slide-fade">
      <aside class="sidebar" v-if="ismenuOpen">
        <div class="sidebar--options">
          <button v-for="item in menu" @click="scrollToComponent(item.ref)">
            <i :class="item['icon']" aria-hidden="true"></i>
            <span>{{ item.label }}</span>
          </button>
        </div>
      </aside>
    </Transition>
  </section>
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
      ismenuOpen: false,
    };
  },

  methods: {
    closeMenuOnOutsideClick(event) {
      // Check if the clicked element is outside the sidebar
      if (
        this.ismenuOpen &&
        event.target.closest(".sidebar") === null &&
        event.target.closest(".burger-menu") === null
      ) {
        this.ismenuOpen = false;
      }
    },

    scrollToComponent(component) {
      if (component) {
        console.log("scroll", component);
        // Scroll to the component
        component.$el.scrollIntoView({ behavior: "smooth" });
        // Close the menu after clicking on an item
        //this.ismenuOpen = false;
      }
    },
  },
  mounted() {
    // Add click event listener to the document
    document.addEventListener("click", this.closeMenuOnOutsideClick);
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    document.removeEventListener("click", this.closeMenuOnOutsideClick);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.burger-menu {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  padding: 40px 40px;
  align-items: center;
  justify-content: center;
  z-index: 50;
  transform: all 4s;
}

.burger-menu i {
  transform: scale(2);
  color: rgb(123, 123, 123);
}
.sidebar {
  width: 10rem; /* Set the width of the sidebar */
  background-color: #1d1d1dc8; /* Set a background color */
  position: fixed;
  top: 0;
  right: 0;
  height: 100%; /* Set the height of the sidebar to fill the entire screen */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  z-index: 50;

  transition: all 10s;
}

.sidebar--options {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
}

.sidebar button {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  margin: 4px;
  background: transparent;
  border: none;
  color: white;
}

.sidebar button:hover {
  color: rgb(153, 151, 151);
  cursor: pointer;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
