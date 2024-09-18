const sections = ["welcome", "choose", "warning"];
let currentSectionIdx = 0;

function toggleSection(idx) {
  sections.forEach((id) => {
    document.getElementById(id).classList.remove("active");
  });

  document.getElementById(sections[idx]).classList.add("active");
}

document.getElementById("nextWelcome").addEventListener("click", () => {
  currentSectionIdx = 1;
  toggleSection(currentSectionIdx);
});

document.getElementById("nextChoose").addEventListener("click", () => {
  currentSectionIdx = 2;
  toggleSection(currentSectionIdx);
});

document.getElementById("nextWarning").addEventListener("click", () => {
  alert("Welcome! You are in game");
});

document.getElementById("decline").addEventListener("click", () => {
  alert("We are sory you leave us. Waiting for you later");
});
