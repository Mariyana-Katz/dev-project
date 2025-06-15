
 // script for the search
 document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    if (searchForm && searchInput) {
      searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = `search.html?q=${encodeURIComponent(
            query
          )}`;
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
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
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


 
  