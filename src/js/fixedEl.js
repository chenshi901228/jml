

$(".fixedEl")
    .mouseenter(function () {
        $(this)[0].style.width = 300 + "px"
    })
    .mouseleave(function () {
        $(this)[0].style.width = 50 + "px"
    })

$(".fixedEl li")
    .mouseenter(function () {
        $(this)[0].style.backgroundColor = "#fff"
        const src = $(this).find("img").attr("src").replace("_1", "_2")
        $(this).find("img").attr("src", src)
        $(".fixedEl p").show()
        $(this).find("p")[0].style.color = "#000"
    })
    .mouseleave(function () {
        $(this)[0].style.backgroundColor = "#191919"
        const src = $(this).find("img").attr("src").replace("_2", "_1")
        $(this).find("img").attr("src", src)
        $(".fixedEl p").hide()
        $(this).find("p")[0].style.color = "#fff"
    })

$(".fixedEl .Totop")
    .click((e) => {
        e.preventDefault()
        $("body,html").animate({
            scrollTop: 0
        }, 500)
    })



