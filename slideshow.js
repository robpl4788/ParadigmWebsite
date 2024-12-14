let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let thumbnails = document.getElementsByClassName("thumbnail");
let canTransition = true;


slides[0].style.display = "block";
thumbnails[slideIndex].style.opacity = 1;


function hideImage(toHide) {
    toHide.classList.remove("leavingLeft");
    toHide.classList.remove("leavingRight");

    toHide.style.display = "none";
    toHide.style.zIndex = 0;
    canTransition = true;    
}


function nextSlide() {
    if (canTransition == true) {
        canTransition = false;
        slides[slideIndex].classList.add("leavingLeft");
        showSlide(slideIndex + 1);
    }
}

function prevSlide() {
    if (canTransition == true) {
        canTransition = false;
        slides[slideIndex].classList.add("leavingRight");
        showSlide(slideIndex - 1);
    }
}

function setSlide(n) {
    if (canTransition == true && n != slideIndex) {
        canTransition = false;
        slides[slideIndex].classList.add("leavingLeft");
        showSlide(n);
    }
}

function showSlide(n) {
    var toHide = slides[slideIndex];


    canTransition = false;


    toHide.addEventListener("transitionend", hideImage.bind(null, slides[slideIndex]), {once:true});
    toHide.style.zIndex = 1;

    thumbnails[slideIndex].style.opacity = 0.5;

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    thumbnails[slideIndex].style.opacity = 1;
    // slides[slideIndex].style.transform = "translatex(100px)";
    slides[slideIndex].style.display = "block";
   // slides[slideIndex].classList.add("enteringImage")
    
}