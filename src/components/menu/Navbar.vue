<template>
  <b-navbar fixed="top" class="cl-navbar d-flex justify-content-center align-items-center">
    <b-navbar-nav class="cl-navbar__wrapper d-flex align-items-center">
      <b-navbar-brand class="cl-navbar__brand d-flex justify-content-around align-items-center">
        <span class="cl-navbar__brand--title">Cake Lovers</span>
        <svg
          id="logoSvg"
          height="512"
          viewBox="0 0 512 512"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path
            d="m71.278 128.162c51.564-4.937 108.021-8.631 129.382-7.721-5.18 2.923-14.774 6.676-32.52 10.357-18.7 3.877-36.833 5.616-37.015 5.633a6 6 0 0 0 -2.514 11.123c.351.21 2.705 1.6 6.525 3.536-20.162 16.682-34.3 40.913-39.34 67.926-7.019 37.636 3.109 80.558 29.29 124.128 35.97 59.856 83.982 115.729 114.169 145.389 12.474 12.257 25.713 18.467 39.36 18.467.239 0 .479 0 .718-.006 16.735-.266 33.729-9.672 51.952-28.756 31.594-33.087 90.506-126.2 107.464-176.091a164.594 164.594 0 0 0 -1.935-110.115 161.859 161.859 0 0 0 -75.565-86.38l-.032.059a36.784 36.784 0 0 0 -3.376-1.664c-1.8-.819-4.625-2.063-7.838-3.336-1.608-.638-3.14-1.2-4.633-1.736 22.461-5.252 64.106-18.928 85.449-50.951a6 6 0 0 0 -6.662-9.091l-83.518 24.192c26.638-29.037 49.549-47.2 49.817-47.407a6 6 0 0 0 -3.656-10.718c-27.424-.292-53.946 13.554-76.625 39.946a187.914 187.914 0 0 0 -21.838 31.67l-53.437-59.677a6 6 0 0 0 -9.743 6.866 36.4 36.4 0 0 1 3.785 13.34c-18.213-16.665-39.419-26.378-59.53-27a6 6 0 1 0 -.368 11.994c21.972.675 43.725 14.145 59.8 32a216.673 216.673 0 0 1 -4.987 27.866c-.315 1.364-.6 2.592-.846 3.7a160.309 160.309 0 0 0 -39.184-3.524c-26.153.63-67.521 7.175-116.079 34.781a6 6 0 0 0 3.537 11.189zm284.412-11.875a149.872 149.872 0 0 1 69.879 79.934 152.562 152.562 0 0 1 1.818 102.064c-16.216 47.706-74.633 140.092-104.781 171.665-15.89 16.641-30.106 24.833-43.464 25.05-10.7.173-21.016-4.744-31.477-15.023-29.684-29.166-76.9-84.121-112.292-143.011-24.647-41.014-34.253-81.038-27.78-115.746 4.907-26.314 19.375-49.643 39.883-64.517 12.7 5.156 30.127 10.354 46.954 9.212 15.487-1.056 26.1-10.8 32.737-19.969 8.9 33.026 36.067 53.445 37.414 54.44a6 6 0 0 0 9.562-5c-.252-8.59 3.757-17.166 8.833-28.025 4.1-8.763 8.794-18.813 12.065-31.021a109.111 109.111 0 0 0 4 11.867c6.894 15.594 26.453 41.984 56.026 41.984 6.224 0 23.951-1.309 24.7-1.364a6 6 0 0 0 5.553-5.748c.06-1.552.577-15.314-.038-20.487-2.607-21.9-17.892-28.61-30.172-34-5.763-2.53-11.205-4.921-14.535-8.473a21.854 21.854 0 0 1 -5.236-11.753 136.26 136.26 0 0 1 20.351 7.921zm-172.259-22.081c24.021-.668 39.405 3.735 42.338 4.656a6.253 6.253 0 0 0 3.278.468 6 6 0 0 0 4.989-7.7c.269-1.561.919-4.373 1.506-6.916 1.1-4.784 2.484-10.775 3.623-17.342 9.9 14.712 15.824 30.8 15.4 44.64a6 6 0 0 0 5.813 6.181h.188a6 6 0 0 0 5.994-5.816c.6-19.6-8.8-42.571-25.353-62.388.135-2.636.186-5.28.108-7.9 19.4 21.656 42.243 47.171 43.795 48.924a6 6 0 0 0 10.058-1.365c.01-.021.02-.042.029-.064a171.889 171.889 0 0 1 24.08-36.815c15.081-17.55 31.282-28.7 48.357-33.323a525.823 525.823 0 0 0 -49.969 51.643 6.146 6.146 0 0 0 -.27 7.717c3.133 4.118 7.619 2.2 12.817-.17l77.685-22.5c-30.283 27.164-78.636 33.749-79.197 33.822a6 6 0 0 0 -5.127 4.818 42.414 42.414 0 0 0 -.6 5.821v.025.137c-.266 7.052.725 18.883 8.855 27.555 5.01 5.344 11.849 8.348 18.464 11.254 11.421 5.016 21.286 9.349 23.082 24.435.274 2.3.245 8.109.127 13.229-5.789.394-14.663.952-18.428.952-10.146 0-19.794-4.1-28.677-12.2a71.244 71.244 0 0 1 -16.374-22.639c-1.886-4.265-4.978-15.623-7.235-23.916-.986-3.62-1.837-6.747-2.525-9.088-1.059-3.61-2.5-8.561-7.8-7.931a6.129 6.129 0 0 0 -5.382 6.113c-.722 23.251-8.3 39.452-14.977 53.746-3.5 7.49-6.7 14.332-8.486 21.252-10.156-10.112-26.36-30.233-27.212-56.308a6 6 0 0 0 -11.663-1.775c-.094.27-9.646 27.033-31.13 28.5-14.3.973-29.635-3.572-41.065-8.164 5.48-.843 11.642-1.906 17.934-3.208 28.406-5.881 43.439-13.15 47.308-22.876a6.805 6.805 0 0 0 -.886-6.65c-2.554-3.4-5.449-7.262-78-2.408-13.093.877-26.15 1.891-37.314 2.814 33.862-14.633 62.357-18.698 81.842-19.24z"
          />
          <path d="m281.122 456.2a5.992 5.992 0 1 0 4.24 1.76 6.035 6.035 0 0 0 -4.24-1.76z" />
          <path d="m304.6 426.05a6 6 0 0 0 -6.54 10.06 6 6 0 0 0 8.3-1.76 6 6 0 0 0 -1.76-8.3z" />
          <path
            d="m324.812 394.94a6 6 0 1 0 -6.53 10.06 5.928 5.928 0 0 0 3.26.97 6 6 0 0 0 3.27-11.03z"
          />
          <path d="m365.251 332.71a6 6 0 1 0 1.761 8.3 6 6 0 0 0 -1.761-8.3z" />
          <path d="m345.032 363.83a6 6 0 1 0 1.76 8.3 6 6 0 0 0 -1.76-8.3z" />
          <path d="m377.162 303.36a6 6 0 1 0 8.3-1.76 6.01 6.01 0 0 0 -8.3 1.76z" />
          <path d="m402.412 281.52a6.007 6.007 0 1 0 -4.241-1.76 6.007 6.007 0 0 0 4.241 1.76z" />
          <path d="m246.862 415.08a6.009 6.009 0 1 0 4.24 1.76 6.01 6.01 0 0 0 -4.24-1.76z" />
          <path d="m273.332 380.34a6 6 0 1 0 1.77 8.3 6 6 0 0 0 -1.77-8.3z" />
          <path d="m298.3 352.92a6 6 0 1 0 -5.04 2.73 5.995 5.995 0 0 0 5.04-2.73z" />
          <path d="m321.5 317.21a6 6 0 1 0 -5.029 2.73 5.992 5.992 0 0 0 5.029-2.73z" />
          <path d="m343.921 282.47a5.987 5.987 0 1 0 -4.239 1.76 6.026 6.026 0 0 0 4.239-1.76z" />
          <path d="m176.382 336.26a6.009 6.009 0 1 0 4.24 1.76 6.029 6.029 0 0 0 -4.24-1.76z" />
          <path d="m204.622 309.82a6 6 0 1 0 -5.04 2.73 6.011 6.011 0 0 0 5.04-2.73z" />
          <path d="m228.792 270.84a6.009 6.009 0 1 0 -1.76 4.24 6.057 6.057 0 0 0 1.76-4.24z" />
          <path d="m151.882 293.56a6.009 6.009 0 1 0 4.24 1.76 6.01 6.01 0 0 0 -4.24-1.76z" />
          <path d="m166.751 276.67a6 6 0 1 0 1.761 8.31 6 6 0 0 0 -1.761-8.31z" />
          <path d="m175.092 269.85a6.009 6.009 0 1 0 -4.25-1.76 6.049 6.049 0 0 0 4.25 1.76z" />
          <path d="m132.711 248.82a6.007 6.007 0 1 0 4.241 1.76 6.056 6.056 0 0 0 -4.241-1.76z" />
          <path d="m149.342 240.24a6 6 0 1 0 -5.04 2.73 5.994 5.994 0 0 0 5.04-2.73z" />
          <path d="m155.912 225.11a6.007 6.007 0 1 0 -4.241-1.76 6.007 6.007 0 0 0 4.241 1.76z" />
          <path d="m209.582 375.73a5.992 5.992 0 1 0 4.24 1.75 6.043 6.043 0 0 0 -4.24-1.75z" />
          <path d="m275.932 279.61a5.927 5.927 0 0 0 3.259.97 6 6 0 1 0 -3.259-.97z" />
          <path d="m259.262 305.27a6 6 0 1 0 1.759 8.3 5.993 5.993 0 0 0 -1.759-8.3z" />
          <path
            d="m236.052 340.98a6 6 0 1 0 -6.531 10.06 5.91 5.91 0 0 0 3.261.97 6 6 0 0 0 3.27-11.03z"
          />
          <path d="m302.4 232.87a6.007 6.007 0 1 0 4.241 1.76 6.009 6.009 0 0 0 -4.241-1.76z" />
        </svg>
      </b-navbar-brand>
      <div class="cl-navbar__menu" v-if="!mobile">
        <div class="cl-navbar__links d-flex justify-content-between align-items-center">
          <li class="cl-navbar__links--single d-flex align-items-center justify-content-center">
            <a href="#home">Home</a>
          </li>
          <li class="cl-navbar__links--single d-flex align-items-center justify-content-center">
            <a href="#crafts">About</a>
          </li>
          <li class="cl-navbar__links--single d-flex align-items-center justify-content-center">
            <a href="#cakes">Cakes</a>
          </li>
          <li class="cl-navbar__links--single d-flex align-items-center justify-content-center">
            <a href="#contact">Contact</a>
          </li>
        </div>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<style lang="scss" scoped>
.cl-navbar {
  height: 80px;
  background-color: white;
  &__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: black;
    &--exit {
      span {
        cursor: pointer;
        color: white;
        margin-bottom: 50px;
        &:hover {
          color: $base-theme-color;
        }
      }
    }
  }
  &__wrapper {
    width: 100%;
    justify-content: center;
    @media screen and (min-width: 768px) {
      justify-content: space-between;
      width: 80%;
    }
  }
  &__brand {
    margin-left: 15px;
    &--title {
      color: $base-theme-color;
      font-family: "Oleo Script Swash Caps", cursive;
      font-size: 20px;
      @media screen and (min-width: 768px) {
        font-size: 25px;
      }
      @media screen and (min-width: 1367px) {
        font-size: 30px;
      }
    }
    svg {
      width: auto;
      height: 50px;
      @media screen and (min-width: 768px) {
        height: 60px;
      }
      @media screen and (min-width: 1367px) {
        height: 70px;
      }
      path {
        fill: $base-theme-color;
      }
    }
  }
  &__menu {
    margin-right: 15px;
    svg {
      cursor: pointer;
      &:hover {
        g line {
          stroke: black;
        }
      }
    }
  }
  &__links {
    width: 300px;
    @media screen and (min-width: 1367px) {
      width: 400px;
    }
    &--single {
      margin: 0;
      transition: all 0.5 ease-in-out;
      list-style: none;
      width: 70px;
      height: 70px;
      padding: 10px;
      &.active, &:hover{
        background-color: $base-theme-color;
        border-radius: 50%;
        a{
          color: white;
        }  
      }
      a {
        text-decoration: none;
        color: $base-theme-color;
        font-weight: 500;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      mobile: null
    };
  },

  mounted() {
    window.innerWidth <= 768 ? (this.mobile = true) : (this.mobile = false);

    window.addEventListener("resize", () => {
      window.innerWidth <= 768 ? (this.mobile = true) : (this.mobile = false);
    });

    window.addEventListener("scroll", this.setNavActiveLinks);
  },

  methods: {
    setNavActiveLinks: function() {
      const navLinkMobile = document.querySelectorAll(
        ".cl-navbar__links--single"
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