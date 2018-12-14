

// 数据加载

// 案例展示版块数据
function app_show(data) {
    data.slice(0, 6).map(item => {
        $(".anli_show_item").append(`
            <div data-index=${item.id} data-sort=${item.pro_sort[1]} class="swiper-slide">
                <img src="${item.pro_anli_imgs[0]}">
                <p>${item.pro_title}<br /><span>${item.pro_sort[2]}</span></p>
                <div class="title">${item.pro_sort[0]}</div>
            </div>
        `)
    })
    var mySwiper2 = new Swiper('.swiper-container2', {
        speed: 300,
        loop: true,
        effect: 'coverflow',
        slidesPerView: 2,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
    })
}


// 资讯
function app_news(el, news) {
    $(el).html(`
    ${news.slice(0, 6).map(item => {
            return `<li data-index=${item.id} data-add=${item.add}><a href="./news_detail.html">${item.news_title}</a></li>`
        }).join("")
        }
    `)
}

// 跳转到news详情
$(".app-news").on("click", "li", function () {
    const i_news = $(this).data("index")
    const s_news = $(this).data("add")
    console.log(i_news, s_news)
    sessionStorage.setItem("news_detail_info", JSON.stringify([i_news, s_news]))
})

// 分类
function app_classify(el, info) {
    $(el).html(`
    ${info.slice(0, 6).map((item, index) => {
            return `<li data-index=${index} data-sort=${item.pro_sort[1]}><a href="./app_detail.html">${item.pro_title}</a></li>`
        }).join("")
        }
    `)
}

// 跳转到app详情
$(".tab").on("click", "li", function () {
    const i = $(this).data("index")
    const s = $(this).data("sort")
    sessionStorage.setItem("app_detail_info", JSON.stringify([i, s]))
})
$(".anli_show_item").on("click", ".swiper-slide", function () {
    const i = $(this).data("index")
    const s = $(this).data("sort")
    sessionStorage.setItem("app_detail_info", JSON.stringify([i, s]))
    location.href = "./app_detail.html"
})


$(function () {
    app_show(dataInfo.appInfo.content)

    app_news($(".app-news ol")[0], dataInfo.dynamicInfo)
    app_news($(".app-news ol")[1], dataInfo.newsInfo)
    app_news($(".app-news ol")[2], dataInfo.dynamicInfo)

    app_classify($(".item-title ol")[0], dataInfo.appInfo.content)
    app_classify($(".item-title ol")[1], dataInfo.websiteInfo.content)
    app_classify($(".item-title ol")[2], dataInfo.brandInfo.content)
    app_classify($(".item-title ol")[3], dataInfo.marketInfo.content)
    app_classify($(".item-title ol")[4], dataInfo.gameDevelopInfo.content)
})




var mySwiper1 = new Swiper('.swiper-container1', {
    speed: 300,
})
var mySwiper = new Swiper('.swiper-container', {
    speed: 300,
    on: {
        slideChangeTransitionStart: function () {
            const i = this.activeIndex
            if (i >= 3) {
                mySwiper1.slideTo(1, 300, false);
            } else {
                mySwiper1.slideTo(0, 300, false);
            }
            $(".swiper-container1 p").removeClass("borderBottom")
            $(".swiper-container1 p").addClass(function (index, className) {
                if (i == index) {
                    $(this).addClass("borderBottom")
                }
            })
        },
    }
})

$('.swiper-div-prev').click(function () {
    mySwiper.slidePrev();
})
$('.swiper-div-next').click(function () {
    mySwiper.slideNext();
})

$(".two-select").on("click", "p", function () {
    const i = $(this).attr("data-index")
    $(".swiper-container1 p").removeClass("borderBottom")
    $(this).addClass("borderBottom")
    mySwiper.slideTo(i, 300, false);
})



// 分类点击展示
$(".item-title>li").click(function () {
    const type = $(this).find("p").text()
    if (type == "展开") {
        $(".item-title .tab").removeClass("animaheight")
        $(".item-title ol").removeClass("animaleft")
        $(".item-title p").text("展开")
        $(this).find(".tab").addClass("animaheight")
        $(this).find("ol").addClass("animaleft")
        $(this).find("p").text("收起")
    }
})


// news 点击
$(".app-news ul").on("click", "li", function () {
    const i = $(this).data("index")
    $(".app-news ul li").removeClass("activeli")
    $(this).addClass("activeli")
    $(".app-news ol").removeClass("activeitem")
    $(".app-news ol").addClass(function (index) {
        if (i == index) {
            $(this).addClass("activeitem")
        }
    })
})




