const slideList = document.getElementsByClassName("slides");
const slideItem = document.getElementsByClassName("slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIdx = 0;

function updateSlider() {
  const offset = -currentIdx * 226 ;
  console.log("🚀 ~ updateSlider ~ offset:", offset)
  slideList[0].style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIdx = (currentIdx + 1) % slideItem.length;
  console.log(currentIdx);
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIdx = (currentIdx - 1 + slideItem.length) % slideItem.length;
  console.log(currentIdx)
  updateSlider()
});

updateSlider();
