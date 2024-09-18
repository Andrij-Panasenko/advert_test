const buttons = document.querySelectorAll("#soundSwitcher");
buttons.forEach((button) => {
  button.addEventListener("click", toggleSound);
});

function toggleSound() {
  const isMuteIconExists = document.querySelectorAll(".mute").length > 0;

  if (!isMuteIconExists) {
    buttons.forEach((button) => {
      const muteIcon = document.createElement("img");
      muteIcon.src = "./images/mute.svg";
      muteIcon.alt = "Mute";
      muteIcon.className = "mute";
      button.appendChild(muteIcon);
    });
  } else {
    buttons.forEach((button) => {
      const muteIcon = button.querySelector(".mute");
      if (muteIcon) {
        button.removeChild(muteIcon);
      }
    });
  }
}
