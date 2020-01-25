var work = document.querySelector(".work__section");

function workSlideIn(e) {
    var slideIn = window.scrollY + window.innerHeight - work.offsetHeight / 4;

    var workBottom = work.offsetTop + work.offsetHeight;
    var halfShown = slideIn > work.offsetTop;
    var notScrolledPast = window.scrollY < workBottom;

    if (halfShown && notScrolledPast) {
        work.classList.add("slidInFull");
    } else {
        work.classList.remove("slidInFull");
    }
}

window.addEventListener("scroll", workSlideIn);