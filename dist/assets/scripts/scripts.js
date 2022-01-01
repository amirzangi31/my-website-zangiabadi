let hamburgerPage = document.querySelector(".hamburger-page");
let hamburgerPageList = document.querySelector(".hamburger-page .list");
let closePage = document.querySelector(".close");
let openPage = document.querySelector(".hamburger-menu label");
let awards = [...document.querySelectorAll(".item-awards .title ")];

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
function setSlideBlog(slide) {
  let itemBlog = document.getElementById(slide);

  let slidesBlog = [...document.querySelector(".slides-blog").children];
  slidesBlog.forEach((element) => {
    element.className = "slide";
  });
  itemBlog.className = "slide active";
}

setInterval(() => {
  let awardsOne = awards[0].innerHTML;

  if (scrollY > 1850) {
    if (awardsOne == 125) {
      return;
    } else {
      awardsOne++;
    }

    awards[0].innerHTML = awardsOne;
  }
}, 10);

setInterval(() => {
  let awardsTwo = awards[1].innerHTML;

  if (scrollY > 1850) {
    if (awardsTwo == 180) {
      return;
    } else {
      awardsTwo++;
    }

    awards[1].innerHTML = awardsTwo;
  }
}, 10);

setInterval(() => {
  let awardsThree = awards[2].innerHTML;

  if (scrollY > 1850) {
    if (awardsThree == 90) {
      return;
    } else {
      awardsThree++;
    }

    awards[2].innerHTML = awardsThree;
  }
}, 10);

setInterval(() => {
  let awardsFour = awards[3].innerHTML;

  if (scrollY > 1850) {
    if (awardsFour == 165) {
      return;
    } else {
      awardsFour++;
    }

    awards[3].innerHTML = awardsFour;
  }
}, 10);
