/* Util function */
// hide an element
const hide = (elem) => {
  elem.style.display = "none";
};

// show an element
const show = (elem) => {
  elem.style.display = "block";
};

// toggle the element visibility
const toggle = (elem) => {
  // if the element is visible, hide it
  if (window.getComputedStyle(elem).display !== "none") {
    hide(elem);
    return;
  }

  // show the element
  show(elem);
};

window.addEventListener("load", (event) => {
  var modal = document.getElementById("modal");
  var galleryItems = document.getElementsByClassName("grid-item");

  for (let i of galleryItems) {
    i.addEventListener("mouseover", function () {
      toggle(modal);
      modal.style.position = "absolute";
      let coordinate = i.getBoundingClientRect();
      modal.style.top = coordinate.top;
      modal.style.left = coordinate.left;
    });
  }
});



/* Modal window */

/*
window.addEventListener('load', (event) => {
  for(let i of galleryItems) {
    i.addEventListener("click", function() {
      toggle(modal);
    })
  }
});


*/
