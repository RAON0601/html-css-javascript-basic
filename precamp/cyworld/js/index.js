const frame = document.querySelector("#frame");
const navHome = document.querySelector("#navHome");
const navJukeBox = document.querySelector("#navJukeBox");
const navGame = document.querySelector("#navGame");

navHome.addEventListener("click", () => {
  selectNavigation(navHome);
  unSelectNavigation(navGame);
  unSelectNavigation(navJukeBox);
  frame.setAttribute("src", "./home.html");
});

navGame.addEventListener("click", () => {
  selectNavigation(navGame);
  unSelectNavigation(navHome);
  unSelectNavigation(navJukeBox);

  frame.setAttribute("src", "./game.html");
});

navJukeBox.addEventListener("click", () => {
  selectNavigation(navJukeBox);
  unSelectNavigation(navHome);
  unSelectNavigation(navGame);

  frame.setAttribute("src", "./jukbox.html");
});

function selectNavigation(nav) {
  nav.style.backgroundColor = "white";
  nav.style.color = "black";
}

function unSelectNavigation(nav) {
  nav.style.backgroundColor = "#298eb5";
  nav.style.color = "white";
}
