

// $(".fixedEl")
//     .mouseenter(function () {
//         $(this)[0].style.width = 300 + "px"
//     })
//     .mouseleave(function () {
//         $(this)[0].style.width = 50 + "px"
//     })

// $(".fixedEl li")
//     .mouseenter(function () {
//         $(this)[0].style.backgroundColor = "#fff"
//         const src = $(this).find("img").attr("src").replace("_1", "_2")
//         $(this).find("img").attr("src", src)
//         $(".fixedEl p").show()
//         $(this).find("p")[0].style.color = "#000"
//     })
//     .mouseleave(function () {
//         $(this)[0].style.backgroundColor = "#191919"
//         const src = $(this).find("img").attr("src").replace("_2", "_1")
//         $(this).find("img").attr("src", src)
//         $(".fixedEl p").hide()
//         $(this).find("p")[0].style.color = "#fff"
//     })

// $(".fixedEl .Totop")
//     .click((e) => {
//         e.preventDefault()
//         $("body,html").animate({
//             scrollTop: 0
//         }, 500)
//     })


//跳转其他链接 
$(function () {
    $(".fixedEl").after(`
        <div class="thirdParty">
            <div>
                <img class="t-close" src="./images/icon/close.png" alt="">
                <img class="t-bgm" src="./images/icon/third_party.png" alt="">
                <b>发现更多<br/>应用设计</b>
            </div>
        </div>
    `)
})

// 固定导航
$(".fixedEl .Totop")
    .click((e) => {
        e.preventDefault()
        $("body,html").animate({
            scrollTop: 0
        }, 500)
    })


$(".link ul").html(`
    ${
    dataInfo.partLink.map(item => {
        return `<li><a href="${item.link}">${item.name}</a></li>`
    }).join("")
    }
`)

$("body").on("click", ".thirdParty .t-close", () => {
    $(".thirdParty").hide()
})
$("body").on("click", ".thirdParty b", () => {
    location.href = "https://cd.58.com/wangzhan/?key=%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1&cmcskey=%E7%BD%91%E7%AB%99%E8%AE%BE%E8%AE%A1&final=1&jump=1&specialtype=gls&classpolicy=huangyezonghe_A"
})



