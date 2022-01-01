let hamburgerPage = document.querySelector(".hamburger-page");
let hamburgerPageList = document.querySelector(".hamburger-page .list");
let closePage = document.querySelector(".close");
let openPage = document.querySelector(".hamburger-menu label");

function setHamburgerPage() {
  closePage.style.display = "flex";
  openPage.style.display = "none";
  hamburgerPage.style.transform = "translate(0 , 0 )";
  hamburgerPage.style.width = "100%";
  hamburgerPage.style.height = "100vh";
  hamburgerPageList.style.display = "block";
}
function closeHamburgerPage() {
  closePage.style.display = "none";
  openPage.style.display = "flex";
  hamburgerPage.style.width = "0";
  hamburgerPage.style.height = "0";
  hamburgerPage.style.transform = "translate(-100% , -100%)";
  hamburgerPageList.style.display = "none";
}

function setSlideAboutMe(slide) {
  let item = document.getElementById(slide);
  let slides = [...document.querySelectorAll(".slide-about-me")];
  slides.forEach((element) => {
    element.style.display = "none";
  });
  item.style.display = "block";
}
