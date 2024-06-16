document.addEventListener('DOMContentLoaded', function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    var elemc = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    var hoverImage = document.querySelector("#hover-image");
    var hoverVideo = document.querySelector("#hover-video");

    function shuffleElements(container) {
        let elementsArray = Array.from(container.children);
        for (let i = elementsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            container.appendChild(elementsArray[j]);
        }
    }

    shuffleElements(elemc);

    elemc.addEventListener("mouseenter", function() {
        console.log("Container hover in");
        fixed.style.display = "block";
    });

    elemc.addEventListener("mouseleave", function() {
        console.log("Container hover out");
        fixed.style.display = "none";
        hoverVideo.pause();
        hoverVideo.style.display = "none";
        hoverVideo.removeAttribute('src');
        hoverVideo.load();
        hoverImage.style.display = "none";
        hoverImage.removeAttribute('src');
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e) {
        e.addEventListener("mouseenter", function() {
            var mediaSrc = e.getAttribute("data-image");
            console.log("Element hover in", mediaSrc);
            if (mediaSrc.endsWith(".mp4") || mediaSrc.endsWith(".webm") || mediaSrc.endsWith(".ogg")) {
                hoverImage.style.display = "none";
                hoverVideo.setAttribute("src", mediaSrc);
                hoverVideo.style.display = "block";
                hoverVideo.play();
            } else {
                hoverVideo.style.display = "none";
                hoverImage.setAttribute("src", mediaSrc);
                hoverImage.style.display = "block";
            }
        });

        e.addEventListener("mouseleave", function() {
            console.log("Element hover out");
            hoverVideo.pause();
            hoverVideo.style.display = "none";
            hoverVideo.removeAttribute('src');
            hoverVideo.load();
            hoverImage.style.display = "none";
            hoverImage.removeAttribute('src');
        });
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

function tabContent(tab_name) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block";  
  }

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('input[name="tabs"]');
    const tabImage = document.getElementById("tab-image");

    tabs.forEach(tab => {
        tab.addEventListener("change", function() {
            let imageUrl = "";
            switch(this.id) {
                case "tabone":
                    imageUrl = "./assets/Media/designIMG.webp";
                    break;
                case "tabtwo":
                    imageUrl = "./assets/Media/ProjectIMG.webp";
                    break;
                case "tabthree":
                    imageUrl = "./assets/Media/executionIMG.webp";
                    break;
            }
            tabImage.style.transition = 'none';
            tabImage.style.opacity = '0';
            setTimeout(() => {
                tabImage.src = imageUrl;
                tabImage.style.transition = 'opacity 0.5s ease';
                tabImage.style.opacity = '1';
            }, 500);
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const swiper = document.querySelector('.swiper');

    swiper.addEventListener('mouseenter', function() {
        swiper.classList.add('custom-cursor');
    });

    swiper.addEventListener('mouseleave', function() {
        swiper.classList.remove('custom-cursor');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const swiper = document.querySelector('.swiper');

    swiper.addEventListener('mouseenter', function() {
        swiper.classList.add('custom-cursor');
    });

    swiper.addEventListener('mouseleave', function() {
        swiper.classList.remove('custom-cursor');
    });
});

var menu = document.querySelector("nav h3");
var full = document.querySelector('#full-scr');
var navimg = document.querySelector('nav img');
var closeFullScr = document.querySelector('#full-scr-icon');
var flag = 0;

menu.addEventListener("click", function() {
    if (flag == 0) {
        full.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1;
    }
});

closeFullScr.addEventListener("click", function() {
    full.style.top = "-100%";
    navimg.style.opacity = 1;
    flag = 0;
});


var loader = document.querySelector('#loader');
setTimeout(function(){
    loader.style.top = '-100%';
},4000)