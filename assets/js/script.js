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

function animateScroll(elements) {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.5);
    elements.forEach(element=>{
        if(windowTop > element.offsetTop){
            element.classList.add(animateScrollClass);
        }else{
            element.classList.remove(animateScrollClass);
        }
    }) 
}

const debounce = function(func, wait){
	let timer = null;
	return function() {
		clearTimeout(timer);
		timer = setTimeout(func, wait);
	}
}

animateScroll(animateScrollElements);

window.addEventListener("scroll", debounce(function () {
    animateScroll(animateScrollElements);
    console.log("exec..");
}, 200));


