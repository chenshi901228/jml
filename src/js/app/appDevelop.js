$(function () {

    $(".classify-title").after(`
    ${
        dataInfo.appInfo.content.slice(0, 6).map((item, index) => {
            if (index % 2 == 0) {
                return `
                <div class="classify">
                    <div class="classify-pic"  data-index=${item.id} data-ify="appInfo">
                        <img src="${item.pro_anli_imgs[0]}" alt="">
                        <b>
                            <p>查看详情</p>
                        </b>
                    </div>
                    <div class="classify-info">
                        <p>${item.pro_date}</p>
                        <h3>${item.pro_title.length > 18 ? item.pro_title.slice(0, 18) + "..." : item.pro_title}</h3>
                        <p>${item.pro_sort[2]}</p>
                        <p>-</p>
                        <p>${item.pro_introduce.length > 50 ? item.pro_introduce.slice(0, 50) + "..." : item.pro_introduce}</p>
                        <div>
                            <p>下载浏览</p>
                        </div>
                    </div>
                </div>
                `
            } else {
                return `
                <div class="classify">
                    <div class="classify-info">
                        <p>${item.pro_date}</p>
                        <h3>${item.pro_title.length > 18 ? item.pro_title.slice(0, 18) + "..." : item.pro_title}</h3>
                        <p>${item.pro_sort[2]}</p>
                        <p>-</p>
                        <p>${item.pro_introduce.length > 50 ? item.pro_introduce.slice(0, 50) + "..." : item.pro_introduce}</p>
                        <div>
                            <p>下载浏览</p>
                        </div>
                    </div>
                    <div class="classify-pic"  data-index=${item.id} data-ify="appInfo">
                        <img src="${item.pro_anli_imgs[0]}" alt="">
                        <b>
                            <p>查看详情</p>
                        </b>
                    </div>
                </div>
                `
            }
        }).join("")
        }
    `)


    $(".dynamic-detail").html(`
        <h2>${dataInfo.dynamicInfo[0].news_date.slice(5, 10)}</h2>
        <h4>${dataInfo.dynamicInfo[0].news_title.length > 18 ? dataInfo.dynamicInfo[0].news_title.slice(0, 18) + "..." : dataInfo.dynamicInfo[0].news_title}</h4>
        <p>${dataInfo.dynamicInfo[0].news_info_top.length > 30 ? dataInfo.dynamicInfo[0].news_info_top.slice(0, 30) + "..." : dataInfo.dynamicInfo[0].news_info_top}</p>
        <img src="${dataInfo.dynamicInfo[0].news_img}" alt="">
        <div>
            <a data-index=${dataInfo.dynamicInfo[0].id} data-ify="dynamicInfo" href="javascript:void(0);">查看详情</a>
        </div>
    `)

    $(".dynamic-list ul").html(`
        ${
        dataInfo.dynamicInfo.slice(0, 8).map(item => {
            return `
                    <li data-index=${item.id} data-ify="dynamicInfo">
                        <div>
                            <h4>${item.news_title.length > 18 ? item.news_title.slice(0, 18) + "..." : item.news_title}</h4>
                            <p>${item.news_info_top.length > 18 ? item.news_info_top.slice(0, 18) + "..." : item.news_info_top}</p>
                        </div>
                        <p>${item.news_date.slice(5, 10)}</p>
                    </li>
                `
        }).join("")
        }
    `)
})

var mySwiper = new Swiper('.swiper-container', {
    speed: 700,
    autoplay: {
        disableOnInteraction: false,
        delay: 2000,
    }
})
var mySwiper3 = new Swiper('.swiper-container3', {
    speed: 700,
    slidesPerView: 3,
    navigation: {
        nextEl: '.next-button',
        prevEl: '.pre-button',
    },
})

$(".dynamic-detail").on("click", "a", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("news-detail", JSON.stringify(dataInfo[t][i]))
    location.href = "./news-detail.html"
})
$(".dynamic-list").on("click", "li", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("news-detail", JSON.stringify(dataInfo[t][i]))
    location.href = "./news-detail.html"
})

$("article").on("click", ".classify-pic", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("anli-detail", JSON.stringify(dataInfo[t].content[i]))
    location.href = "./anli-detail.html"
})