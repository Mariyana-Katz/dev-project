
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
  // Get the button:
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

  document.addEventListener("DOMContentLoaded", function () {
    const myCarouselElement = document.querySelector("#slider");

    const carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 5000,
      touch: false,
    });
  });

  