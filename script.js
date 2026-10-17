
const backToTop = document.getElementById("backToTop");

// Show or hide the button while scrolling
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// Scroll back to the top
backToTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
