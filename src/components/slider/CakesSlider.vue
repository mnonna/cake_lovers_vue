<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="cl-cakes__slider--single swiper-slide"></div>
      <div class="cl-cakes__slider--single swiper-slide"></div>
      <div class="cl-cakes__slider--single swiper-slide"></div>
      <div class="cl-cakes__slider--single swiper-slide"></div>
      <div class="cl-cakes__slider--single swiper-slide"></div>
      <div class="cl-cakes__slider--single swiper-slide"></div>
            <div class="cl-cakes__slider--single swiper-slide"></div>
      <div class="cl-cakes__slider--single swiper-slide"></div>
      <div class="cl-cakes__slider--single swiper-slide"></div>
    </div>
    <!-- Add Pagination -->
    <div class="slider-pagination d-flex justify-content-center align-items-center"></div>
  </div>
</template>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  min-height: 400px;
  .swiper-wrapper {
    .swiper-slide {
      width: 250px;
      height: 250px;
      background-position: center;
      background-size: cover;
      @media screen and (min-width: 768px){
        width: 400px; 
        height: 400px;
      }
      &:nth-child(1) {
        background-image: url("../../assets/cakes_img/annie-spratt-oudLkxglHuM-unsplash.jpg");
      }
      &:nth-child(2) {
        background-image: url("../../assets/cakes_img/david-holifield-kPxsqUGneXQ-unsplash.jpg");
      }
      &:nth-child(3) {
        background-image: url("../../assets/cakes_img/harry-grout-naHsaqkdedY-unsplash.jpg");
      }
      &:nth-child(4) {
        background-image: url("../../assets/cakes_img/annie-spratt-oudLkxglHuM-unsplash.jpg");
      }
      &:nth-child(5) {
        background-image: url("../../assets/cakes_img/david-holifield-kPxsqUGneXQ-unsplash.jpg");
      }
      &:nth-child(6) {
        background-image: url("../../assets/cakes_img/harry-grout-naHsaqkdedY-unsplash.jpg");
      }
      &:nth-child(7) {
        background-image: url("../../assets/cakes_img/annie-spratt-oudLkxglHuM-unsplash.jpg");
      }
      &:nth-child(8) {
        background-image: url("../../assets/cakes_img/david-holifield-kPxsqUGneXQ-unsplash.jpg");
      }
      &:nth-child(9) {
        background-image: url("../../assets/cakes_img/harry-grout-naHsaqkdedY-unsplash.jpg");
      }
    }
  }
  .slider-pagination ::v-deep {
    position: relative;
    width: 600px !important;
    margin-top: 50px;
    .slide-bullet {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 50px;
      border-radius: 36px;
      background-color: $base-theme-color;
      span {
        color: white;
      }
      &.swiper-pagination-bullet-active{
          width: 100px;
          height: 70px;
          background-color: white;
          span{
              font-size: 40px;
              color: $base-theme-color;
          }
      }
    }
  }
}
</style>

<script>
import swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default {
  mounted() {
    new swiper(".swiper-container", {
      effect: "coverflow",
      autoplay: true,
      speed: 1000,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1.2,
        slideShadows: true
      },
      pagination: {
        el: ".slider-pagination",
        type: "bullets",
        dynamicBullets: true,
        dynamicMainBullets: 2,
        clickable: true,
        renderBullet: function(index, className) {
          return `<div class="slide-bullet ${className}"><span>0${index + 1}</span></div>`;
        }
      }
    });
  }
};
</script>