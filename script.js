// Header
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.padding = "10px 30px";
    header.style.background = "linear-gradient(135deg, #000E38, #3F186A)";
    header.classList.add("scrolled");
  } else {
     header.style.padding = "14px 30px";
    header.style.background = "#fff";
    header.classList.remove("scrolled");
  }
});


// Exhibition Part

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".icon-scroll-container");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const scrollAmount = 320;

  rightBtn.addEventListener("click", function () {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });  
    rightBtn.classList.add("active");
    leftBtn.classList.remove("active");
  });

  leftBtn.addEventListener("click", function () {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
     leftBtn.classList.add("active");
    rightBtn.classList.remove("active");
  });

});


