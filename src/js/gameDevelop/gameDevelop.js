$(function () {
    $(".classify-title").after(`
        ${
        dataInfo.gameDevelopInfo.content.slice(0, 3).map(item => {
            if (item.id % 2 != 0) {
                return `
                        <div class="classify">
                            <div class="classify-info">
                                <p>${item.pro_date}</p>
                                <h3>${item.pro_title}</h3>
                                <p>${item.pro_sort[2]}</p>
                                <p>-</p>
                                <p>${item.pro_introduce.length > 40 ? item.pro_introduce.slice(0, 40) + "..." : item.pro_introduce}</p>
                                <div>
                                    <p>下载浏览</p>
                                </div>
                            </div>
                            <div class="classify-pic" data-index=${item.id} data-ify="gameDevelopInfo">
                                <img src="${item.pro_anli_imgs[0]}" alt="">
                                <b>
                                    <p>查看详情</p>
                                </b>
                            </div>
                        </div>
                    `
            } else {
                return `
                        <div class="classify">
                            <div class="classify-pic" data-index=${item.id} data-ify="gameDevelopInfo">
                                <img src="${item.pro_anli_imgs[0]}" alt="">
                                <b>
                                    <p>查看详情</p>
                                </b>
                            </div>
                            <div class="classify-info">
                                <p>${item.pro_date}</p>
                                <h3>${item.pro_title}</h3>
                                <p>${item.pro_sort[2]}</p>
                                <p>-</p>
                                <p>${item.pro_introduce.length > 40 ? item.pro_introduce.slice(0, 40) + "..." : item.pro_introduce}</p>
                                <div>
                                    <p>下载浏览</p>
                                </div>
                            </div>
                        </div>
                    `
            }
        }).join("")
        }
    `)
})
var mySwiper = new Swiper('.swiper-container', {
    speed: 700,
    autoplay: {
        disableOnInteraction: false,
        delay: 2000,
    },
})
$(".game-process li").mouseenter(function () {
    const src = $(this).find("img:first-child").attr("src").replace(".png", "-hover.png")
    $(this).find("img:first-child").attr("src", src)
})
$(".game-process li").mouseleave(function () {
    const src = $(this).find("img:first-child").attr("src").replace("-hover.png", ".png")
    $(this).find("img:first-child").attr("src", src)
})

$("article").on("click", ".classify-pic", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("anli-detail", JSON.stringify(dataInfo[t].content[i]))
    location.href = "./anli-detail.html"
})