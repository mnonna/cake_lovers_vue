<template>
  <nav class="cl-navbar-mobile">
    <div class="cl-navbar-mobile__links">
      <a href="#home" class="cl-navbar-mobile__links--single">
        <span>Home</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          preserveAspectRatio="none"
        >
          <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
      </a>
      <a href="#crafts" class="cl-navbar-mobile__links--single">
        <span>About</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          preserveAspectRatio="none"
        >
          <path
            d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
          />
        </svg>
      </a>
      <a href="#cakes" class="cl-navbar-mobile__links--single">
        <span>Cakes</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12,1.5A2.5,2.5 0 0,1 14.5,4A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 9.5,4A2.5,2.5 0 0,1 12,1.5M15.87,5C18,5 20,7 20,9C22.7,9 22.7,13 20,13H4C1.3,13 1.3,9 4,9C4,7 6,5 8.13,5C8.57,6.73 10.14,8 12,8C13.86,8 15.43,6.73 15.87,5M5,15H8L9,22H7L5,15M10,15H14L13,22H11L10,15M16,15H19L17,22H15L16,15Z"
          />
        </svg>
      </a>
      <a href="#contact" class="cl-navbar-mobile__links--single">
        <span>Contact</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          preserveAspectRatio="none"
        >
          <path
            d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
          />
        </svg>
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.cl-navbar-mobile {
  position: fixed;
  width: 100%;
  height: 80px;
  bottom: 0;
  left: 0;
  background-color: white;
  display: flex;
  align-content: center;
  justify-content: center;
  z-index: 2000;
  &__links {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 5px;
    &--single {
      height: 100%;
      display: grid;
      grid-auto-flow: row;
      align-items: center;
      justify-items: center;
      text-decoration: none;
      span {
        color: $base-theme-color;
      }
      svg {
        width: 30px;
        height: 30px;
        path {
          fill: $base-theme-color;
        }
      }
      &.active,
      &:hover {
        background-color: $base-theme-color;
        border-radius: 10px;
        span {
          color: white;
        }
        svg {
          path {
            fill: white;
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.setNavActiveLinks);
  },

  methods: {
    setNavActiveLinks: function() {
      const navLinkMobile = document.querySelectorAll(
        ".cl-navbar-mobile__links--single"
      );

      const about = document.querySelector("#crafts");
      const cakes = document.querySelector("#cakes");
      const contact = document.querySelector('#contact');

      if (navLinkMobile.length > 0) {
        let scrollPos = window.scrollY || window.scrollTop;

        if (scrollPos < about.offsetTop - 100) {
          navLinkMobile[0].classList.add("active");
          navLinkMobile[1].classList.remove("active");
        } else if (
          scrollPos > about.offsetTop - 100 &&
          scrollPos <= cakes.offsetTop - 100
        ) {
          navLinkMobile[1].classList.add("active");
          navLinkMobile[2].classList.remove("active");
          navLinkMobile[0].classList.remove("active");
        } else if (scrollPos > cakes.offsetTop - 100 && scrollPos <= contact.offsetTop - 100) {
          navLinkMobile[2].classList.add("active");
          navLinkMobile[1].classList.remove("active");
          navLinkMobile[3].classList.remove("active");
        }
        else if (scrollPos > contact.offsetTop - 100) {
          navLinkMobile[3].classList.add("active");
          navLinkMobile[2].classList.remove("active");
        }
      }
    }
  }
};
</script>