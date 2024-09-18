const slideList = document.getElementsByClassName("slides");
const slideItem = document.getElementsByClassName("slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIdx = 0;

function updateSlider() {
  let offset;

  if (slideItem[0].offsetWidth >= 463) {
    offset = -currentIdx * 463;
  } else {
    offset = -currentIdx * 226;
  }

  slideList[0].style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIdx = (currentIdx + 1) % slideItem.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIdx = (currentIdx - 1 + slideItem.length) % slideItem.length;
  updateSlider();
});

updateSlider();
