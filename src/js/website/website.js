$(function () {
    $(".websiteInfo").html(`
        ${
        dataInfo.websiteInfo.content.slice(0, 14).map(item => {
            return `
                <div class="pro-normal ${(item.id + 1) % 7 == 0 ? "big" : ""}" data-index=${item.id} data-ify="websiteInfo">
                    <div>
                        <img src="${item.pro_anli_imgs[0]}" alt="">
                        <b>
                            <p>查看详情</p>
                        </b>
                    </div>
                    <p>${item.pro_title.length > 18 ? item.pro_title + "..." : item.pro_title}</p>
                    <p>${item.pro_sort[2]}</p>
                </div>
                `
        }).join("")
        }
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
var mySwiper2 = new Swiper('.swiper-container2', {
    speed: 700,
    autoplay: {
        disableOnInteraction: false,
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active',
        clickable: true,
        renderBullet: function (index, className) {
            return `<li data-index="${index}" class="${className}"><b>${dataInfo.bannerShow[index]}<br/>解决方案</b></li>`;
        },
    },
})
$(".top-show li")
    .mouseenter(function () {
        mySwiper2.slideTo($(this).attr("data-index"), 1000, false)
    })

$(window).scroll(function () {
    if ($(window).scrollTop() >= 650) {
        $('.nav1').addClass("fixedPo")
    } else if ($(window).scrollTop() < 650) {
        $('.nav1').removeClass("fixedPo")
    }
})


$(".dynamic-list").on("click", "li", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("news-detail", JSON.stringify(dataInfo[t][i]))
    location.href = "./news-detail.html"
})

$(".appDevelop").on("click", ".pro-normal", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("anli-detail", JSON.stringify(dataInfo[t].content[i]))
    location.href = "./anli-detail.html"
})