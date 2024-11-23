const navbar = document.querySelector("nav"); // selects the first <nav> element in the document and assigns it to the navbar variable
window.addEventListener("scroll",() => 
  navbar.classList.toggle("sticky",window.scrollY > 0) // This line toggles the "sticky" class on the navbar element. The toggle method adds the "sticky" class if the second argument is true and removes it if false. The condition window.scrollY > 0 checks if the page has been scrolled vertically more than 0 pixels. If true, the "sticky" class is added, making the navbar sticky; if false, the class is removed.
);
//This sets up an event listener on the window object that listens for the "scroll" event. Whenever the user scrolls the page, the function inside this event listener is executed

const menu = document.querySelector(".menu"); // selects the first element in the document with the class "menu" and assigns it to the menu variable
const toggleMenu = () => menu.classList.toggle("active"); //This toggle method of classList adds the "active" class if it is not present and removes it if it is present.

document.querySelector(".menu-btn").addEventListener("click",toggleMenu);//This line selects the first element in the document with the class "menu-btn" and attaches a click event listener to it. When this element is clicked, the toggleMenu function is executed
document.querySelector(".close-btn").addEventListener("click",toggleMenu);//same as above

document
  .querySelectorAll(".menu a") //This line selects all anchor (<a>) elements that are descendants of any element with the class "menu". It returns a NodeList of all matching elements
  .forEach((link) => link.addEventListener("click", toggleMenu)// For each anchor element, this line adds a click event listener. When an anchor is clicked, the toggleMenu function is executed
);
//This method iterates over each element in the NodeList. The forEach method takes a callback function that is executed once for each element.

// Scroll Reveal 
const sr = ScrollReveal({
  origin: "bottom",
  distance: "40px",
  duration: 1000,
  delay: 400,
  easing: "ease-in-out",
 });// this configuration is used to create a smooth and visually appealing entrance effect for elements as they come into view when the user scrolls down the page.

  sr.reveal(".hero-headlines",{ origin: "left" });
  sr.reveal(".hero-page img",{ origin: "right" });
  sr.reveal(".about");
  sr.reveal(".about h1",{ delay: "500" });
  sr.reveal(".about p",{ delay: "700" });
  sr.reveal(".about-info",{ delay: "1000" });
  sr.reveal(".collection h1");
  sr.reveal(".collection-container",{ delay: "900" });
  sr.reveal(".review h1");
  sr.reveal(".review-container",{ delay: "800" });
  sr.reveal(".callout");
  sr.reveal(".contact");

