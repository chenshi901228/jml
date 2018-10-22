

const classifyData = document.getElementsByClassName("classify")
function init(item, i) {
    if (i % 2 == 0) {
        classifyData[i].innerHTML = `
            <div class="classify-pic" data-index=${item.id} data-ify="brandInfo">
                <img src="${item.pro_anli_imgs[0]}" alt="">
                <b>
                    <p>查看详情</p>
                </b>
            </div>
            <div class="classify-info">
                <p>${item.pro_sort[0]} #${i < 9 ? "0" + (i + 1) : i + 1}</p>
                <h3>${item.pro_title.length > 14 ? item.pro_title.slice(0, 14) + "..." : item.pro_title}</h3>
                <p>${item.pro_introduce.length > 60 ? item.pro_introduce.slice(0, 60) + "..." : item.pro_introduce}
                    <br/><br/>-<br/><br/>日期：${item.pro_date.slice(0, 4)}年${item.pro_date.slice(5, 7)}月${item.pro_date.slice(8, 10)}日<br/>项目：${item.pro_title.length > 16 ? item.pro_title.slice(0, 16) + "..." : item.pro_title}
                </p>
                <a href="javascript:void(0);" data-index=${item.id} data-ify="brandInfo"><img src="./images/icon/icon_right.png" alt=""></a>
            </div>
        `
    } else {
        classifyData[i].innerHTML = `
            <div class="classify-info">
                <p>${item.pro_sort[0]} #${i < 9 ? "0" + (i + 1) : i + 1}</p>
                <h3>${item.pro_title.length > 14 ? item.pro_title.slice(0, 14) + "..." : item.pro_title}</h3>
                <p>${item.pro_introduce.length > 60 ? item.pro_introduce.slice(0, 60) + "..." : item.pro_introduce}
                    <br/><br/>-<br/><br/>日期：${item.pro_date.slice(0, 4)}年${item.pro_date.slice(5, 7)}月${item.pro_date.slice(8, 10)}日<br/>项目：${item.pro_title.length > 16 ? item.pro_title.slice(0, 16) + "..." : item.pro_title}
                </p>
                <a href="javascript:void(0);" data-index=${item.id} data-ify="brandInfo"><img src="./images/icon/icon_right.png" alt=""></a>
            </div>
            <div class="classify-pic" data-index=${item.id} data-ify="brandInfo">
                <img src="${item.pro_anli_imgs[0]}" alt="">
                <b>
                    <p>查看详情</p>
                </b>
            </div>
        `
    }
}


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


    init(dataInfo.brandInfo.content[0], 0)
    init(dataInfo.brandInfo.content[1], 1)
    init(dataInfo.brandInfo.content[2], 2)
    init(dataInfo.brandInfo.content[3], 3)

    $(".classify1").html(`
        ${
            dataInfo.brandInfo.content.slice(4, 6).map(item => {
                return `
                        <div class="classify1-m">
                            <div class="classify1-m-pic" data-index=${item.id} data-ify="brandInfo">
                                <img src="${item.pro_anli_imgs[0]}" alt="">
                                <b>
                                    <p>查看详情</p>
                                </b>
                            </div>
                            <div class="title">
                                <div>
                                    <p>${item.pro_sort[0]}</p>
                                    <h1>${item.pro_title.length > 14 ? item.pro_title.slice(0, 14) + "..." : item.pro_title}</h1>
                                </div>
                                <a href="javascript:void(0);" data-index=${item.id} data-ify="brandInfo"><img src="./images/icon/icon_right.png" alt=""></a>
                            </div>
                        </div>
                    `
            }).join("")
        }
    `)


    $(".dynamic ul").html(`
        ${
            dataInfo.dynamicInfo.slice(0,3).map(item=>{
                return `
                    <li data-index=${item.id} data-ify="dynamicInfo">
                        <img src="${item.news_img[0]}" alt="">
                        <div class="word">
                            <h5>${item.news_title.length>26?item.news_title.slice(0,26)+"...":item.news_title}</h5>
                            <p>${item.news_info_top.length>30?item.news_info_top.slice(0,30)+"...":item.news_info_top}</p>
                        </div>
                        <div class="bottom">
                            <p>查看更多</p>
                            <img src="./images/brand/jiantou-right.png" alt="">
                        </div>
                    </li>
                `
            }).join("")
        }
    `)


});


var mySwiper = new Swiper('.swiper-container', {
    speed: 1400,
    autoplay: {
        disableOnInteraction: false,
        delay: 2000,
    },
    effect: 'fade',
})
$(".dynamic").on("click","li",function(){
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("news-detail", JSON.stringify(dataInfo[t][i]))
    location.href = "./news-detail.html"
})
$(".classify").on("click", ".classify-pic", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("anli-detail", JSON.stringify(dataInfo[t].content[i]))
    location.href = "./anli-detail.html"
})
$(".classify1").on("click", ".classify1-m-pic", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("anli-detail", JSON.stringify(dataInfo[t].content[i]))
    location.href = "./anli-detail.html"
})
$(".classify").on("click", "a", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("anli-detail", JSON.stringify(dataInfo[t].content[i]))
    location.href = "./anli-detail.html"
})
$(".classify1").on("click", "a", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("anli-detail", JSON.stringify(dataInfo[t].content[i]))
    location.href = "./anli-detail.html"
})

var scrollFunc = function () {
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








