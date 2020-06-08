document.body.addEventListener('click', function (event) {
  if (event.target.classList.contains("addToggle")) {
    if (event.target.style.transform == "rotate(0deg)" || event.target.style.transform == "") {
      event.target.style.transform = "rotate(-45deg)";
    } else if (event.target.style.transform == "rotate(-45deg)") {
      event.target.style.transform = "rotate(0deg)";
    }
  }
});