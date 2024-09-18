const button = document.getElementById("soundSwitcher");
console.log("🚀 ~ button:", button)
const icons = document.getElementsByClassName("icon");

button.addEventListener("click", toggleSound);

function toggleSound() {
  const isMuteIconExists = button.querySelector(".mute");

  if (!isMuteIconExists) {
    const muteIcon = document.createElement("img");
    muteIcon.src = "./images/mute.svg";
    muteIcon.alt = "mute";
    muteIcon.className = "mute";
    button.appendChild(muteIcon);
  } else {
    button.removeChild(isMuteIconExists);
  }
}
