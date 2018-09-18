



$(function ($) {
    $("footer").hide()
    const height = $(window).height() - 106
    $('.swiper-container')[0].style.height = $(window).height() + "px"
    $('.swiper-container')[0].style.top = 0
    $('header')[0].style.top = height + "px"
    $("header .left-box")[0].style.background = "transparent"
    $("header .right-box")[0].style.background = "transparent"

    for (let i = 0; i < $("header a").length; i++) {
        $("header a")[i].style.color = "#fff"
    }
    for (let i = 0; i < $("header span").length; i++) {
        $("header span")[i].style.color = "#fff"
    }
    for (let i = 0; i < $("header p").length; i++) {
        $("header p")[i].style.color = "#fff"
    }
    const srcPhone = $(".icon-phone").attr('src').replace("phone", "phone_1")
    $(".icon-phone").attr('src', srcPhone)
});


var scrollFunc = function () {
    console.log("a")
    $(".swiper-container")[0].style.height = 0
    $('header')[0].style.top = 0
    $(".brand-title").show("slow")
    $("footer").show()
    $("article")[0].style.display = "block"
    $("header .left-box")[0].style.backgroundColor = "#EBEBEB"
    $("header .right-box")[0].style.backgroundColor = "#F5F5F5"

    for (let i = 0; i < $("header a").length; i++) {
        $("header a")[i].style.color = "#000"
    }
    for (let i = 0; i < $("header span").length; i++) {
        $("header span")[i].style.color = "#000"
    }
    for (let i = 0; i < $("header p").length; i++) {
        $("header p")[i].style.color = "grey"
    }
    const srcPhone = $(".icon-phone").attr('src').replace("phone_1", "phone")
    $(".icon-phone").attr('src', srcPhone)
}
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
window.onmousewheel = document.onmousewheel = scrollFunc;




