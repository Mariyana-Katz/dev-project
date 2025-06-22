// script for the search
document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
      }
    });
  } else {
    console.error("Search form or input not found.");
  }
});

// script for the button that scrolls to the top of the page
// Get the button that scrolls to the top of the page
// This button will be shown when the user scrolls down 20px from the top of the document
let mybutton = document.getElementById("myBtn");

// Scrolling down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When clicked on the button, it's scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//end of the script for the button

// Function initialize the Bootstrap carousel
// This will automatically start the carousel with a 5-second interval
document.addEventListener("DOMContentLoaded", function () {
  const myCarouselElement = document.querySelector("#slider");

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 5000,
    touch: false,
  });
});
const container = document.getElementById("carousel-inner");

//Wrapping the code in DOMContentLoaded event listener to be ensure that the JavaScript only runs after the HTML has fully loaded and the le. are available in the DOM
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  if (container) {
    container.addEventListener("mouseenter", () => {
      container.classList.add("show");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  if (container) {
    container.addEventListener("mouseleave", () => {
      container.classList.remove("show");
    });
  }
});

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// function for opening the lightbox in the gallery
function openLightbox(image) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = image.src;
}
//scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/480218889_1124669669454288_9053807819432811425_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pz72LlH1kTwQ7kNvgFO_qou&_nc_oc=Adj6T86mM4jm4lSPucS4IpUhdJ5Y7KQ_DFwIssouFalAPi9BuDiNHDjRIaUn1-S_gHU&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=yuZO_E3jzOT6lo84T9Pd_Q&oh=00_AYF0cqlRYGonnYvfl4b8j8Cb5B-lBt9aBKI1WgoRhVUYHw&oe=67DA972B

//function to close the lightbox

https: function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  if (button) {
    button.addEventListener("click", function () {
      window.location.href = "order-form.html";
    });
  }
});
