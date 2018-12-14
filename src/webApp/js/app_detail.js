
function more(data) {
    data.slice(0, 4).map((item, index) => {
        $(".more_app ul").append(`
            <li data-index=${index} data-sort=${item.pro_sort[1]}>
                <img src="${item.pro_anli_imgs[0]}" alt="">
                <h6>${item.pro_title}</h6>
                <p>${item.pro_sort[2]}</p>
            </li>
        `)
    }).join("")
}

function init_detail(data) {
    $(".container .banner").html(`
        <img src="${data.pro_top_img}" alt="">
    `)
    $(".container .info").html(`
        <h2>${data.pro_title}</h2>
        <p>${data.pro_sort[2]}</p>
        <h3>项目介绍</h3>
        <p>${data.pro_introduce}</p>
        <a href="tel:13350724957">索要项目报价</a>
        <div class="info_img">
            ${
        data.pro_anli_imgs.map(item => {
            return `<img src="${item}" alt="">`
        }).join("")
        }         
        </div>
    `)
}

const app_detail_info = JSON.parse(sessionStorage.getItem("app_detail_info"))
const i = app_detail_info[0]
const s = app_detail_info[1]

$(function () {
    init_detail(dataInfo[s].content[i])
    more(dataInfo[s].content)
})


// 跳转到app详情
$(".more_app").on("click", "li", function () {
    const i_o = $(this).data("index")
    const s_o = $(this).data("sort")
    sessionStorage.setItem("app_detail_info", JSON.stringify([i_o, s_o]))
    location.href = "./app_detail.html"
})