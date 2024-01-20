

function smooth() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
smooth();
function imageDisplayer() {
    var elemC = document.querySelector("#elem-container");
var fix = document.querySelector("#fixed-img");
elemC.addEventListener("mouseenter", function () {
    fix.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
    fix.style.display = "none";
});
    var elem = document.querySelectorAll(".elem");
    elem.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            console.log(image);
            fix.style.backgroundImage = `url(${image})`;
        });
    });
}
imageDisplayer();
function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 40,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
}
swiper();

function mouseEffect() {
    var mouse = document.querySelector("#mouse");
var p = document.querySelector("#page5");
p.addEventListener("mouseenter", function (dets) {
    mouse.style.display = "block";
    mouse.style.display = "flex";
    mouse.style.zIndex = "99";
    var yaxis = dets.y+"px";
    var xaxis = dets.x+"px";
    gsap.to(mouse, {
        y: yaxis,
        x: xaxis,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        scrub: 2,
        
    });
});
p.addEventListener("mouseleave", function () {
    mouse.style.display = "none";
});

}
mouseEffect();
var loader = document.querySelector("#loader");
setTimeout(() => {
    loader.style.display = "none";
},4000);