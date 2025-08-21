
    /*******************
    Change Navbar when Scroll
     ***************************/
    window.addEventListener("scroll", function () {
      let navbartog = document.querySelector(".navbar-toggler");
      let navbars = document.querySelector(".fa-bars");
      let navbar = document.querySelector(".navbar");
      let logo = document.querySelector(".navbar-brand img");
      if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
        navbars.classList.add("scrolled");
        navbartog.classList.add("scrolled");
        logo.src = "assets/images/polylogo.png";
      } else {
        navbar.classList.remove("scrolled");
        navbars.classList.remove("scrolled");
        navbartog.classList.remove("scrolled");
        logo.src = "assets/images/polylogowhite.png";
      }
    });

    /***********************
    End Change Navbar when Scroll 
    **********************************/



/*------------------
        Preloder
    --------------------*/

$(window).on("load", function () {
    // Fade out the preloader
    $("#preloder").delay(200).fadeOut("slow");
});

/************
Scroll to top Button
********************/

window.onscroll = function () {
    let scrollBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/*********************
End of Scroll to top Button
*****************************/


/****************
OwlCarousel
*****************/

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

/***********************
End OwlCarousel
**********************************/

/*------------------
        Accordions
    --------------------*/
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector(".accordion_header");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    });
});

function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    });
}

/*-----------------------
 End Accordions
 * ---------------------*/


/*---------------------------
Thumbnail switching
------------------------*/
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnails img");

thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        mainImage.style.opacity = "0";
        setTimeout(() => {
            mainImage.src = thumb.src;
            mainImage.style.opacity = "1";
        }, 300);
        thumbnails.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
    });
});

/*---------------------------
End Thumbnail switching
------------------------*/
/*------------------
        Lightbox
    --------------------*/
// Lightbox for sample products
const sampleImages = document.querySelectorAll(".sample-products img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

sampleImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});
/*------------------
        End Lightbox
    --------------------*/

