if (document.querySelector(".dropdown-link")) {
    document.querySelectorAll(".dropdown-link").forEach(link => {

        link.addEventListener("mouseover", (e) => {
            let dropdownArea = e.currentTarget.querySelector(".dropdown-area");
            dropdownArea.classList.remove("dropdown-hide");
            dropdownArea.classList.add("dropdown-show");
        })

        link.addEventListener("mouseout", (e) => {
            let dropdownArea = e.currentTarget.querySelector(".dropdown-area");
            dropdownArea.classList.add("dropdown-hide");
            dropdownArea.classList.remove("dropdown-show");
        })
    })
}


// Animate Scroll

const animateScrollElements = document.querySelectorAll("[data-animate-scroll]");
const animateScrollClass = "animate-scroll";
let header = document.querySelector("header");

function animateScroll(elements) {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.5);

    elements.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add(animateScrollClass);
            element.setAttribute("animated", "true");

        }
    })
}

function checkAllAnimated() {
    for (element of animateScrollElements) {
        if (!element.classList.contains(animateScrollClass)) {
            return false;
        }
    }
    return true;
}


function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

if (animateScrollElements.length) {
    window.addEventListener("scroll", debounce(function () {

        if (window.scrollY > 0) {
            document.querySelector("header").classList.add("header-background");
        } else {
            document.querySelector("header").classList.remove("header-background");
        }

        if (!checkAllAnimated()) {
            animateScroll(animateScrollElements);
        }
    }, 200));

    animateScroll(animateScrollElements);

}


if (document.querySelector("#header-button")) {
    document.querySelector("#header-button").addEventListener("click", function () {

        let nav = document.querySelector("header nav");
        nav.classList.toggle("show-nav");
    });
}