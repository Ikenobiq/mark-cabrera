document.addEventListener("DOMContentLoaded", () => {
  new ItcSimpleSlider(".itcss", {
    loop: true,
    autoplay: true,
    interval: 6000,
    swipe: true,
  });
});

const proposeButton = document.querySelector(".propose__list");
proposeButton.addEventListener("click", () => {
  console.log("hi")
});
const proposeInfo = document.querySelector('.propose__info')
