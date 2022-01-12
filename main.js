/*
    Global Variables
*/
let toggleMenu = document.querySelectorAll(".navbar .toggle-menu");
let navLinks = document.querySelector(".nav-links");
let links = document.querySelectorAll(".nav-links a");

/*
    Main Function
*/
function toggleLinks(ourArray, ourFubction) {
  ourArray.forEach((element) => {
    element.addEventListener("click", () => {
      ourFubction();
    });
  });
}
/*
    Show & Hide Links Sidebar
*/
function toggleNavLinks() {
  navLinks.classList.toggle("active");
}

toggleLinks(toggleMenu, toggleNavLinks);
toggleLinks(links, toggleNavLinks);



// DARK MODE AND LIGHT MODE

document.querySelector(".btnMode").addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
      document.querySelector(".btnMode").innerHTML = "Dark 🌙";
    } else {
      document.querySelector(".btnMode").innerHTML = "Light 🌞";
    }
  });
  



