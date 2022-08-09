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
