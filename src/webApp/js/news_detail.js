
function more(data) {
    console.log(data)
    data.slice(0, 4).map(item => {
        $(".more_news ul").append(`
            <li data-index=${item.id} data-add=${item.add}>
                <a href="">${item.news_title}</a>
            </li>
        `)
    })
}

function init_detail(data) {
    $(".container .banner").html(`
        <img src="${data.news_img[0]}" alt="">
    `)
    $(".container .info").html(`
        <h2>${data.news_title}</h2>
        <p>${data.news_date}</p>
        <p>${data.news_info_top}</p>
        <img src="${data.news_img}" alt="">
        <p>${data.news_info_m}</p>
    `)
}

const news_detail_info = JSON.parse(sessionStorage.getItem("news_detail_info")) || [0, "newsInfo"]
const i = news_detail_info[0]
const s = news_detail_info[1]

$(function () {
    init_detail(dataInfo[s][i])
    more(dataInfo[s])
})


// 跳转到news详情
$(".more_news").on("click", "li", function () {
    const i_o = $(this).data("index")
    const s_o = $(this).data("add")
    sessionStorage.setItem("news_detail_info", JSON.stringify([i_o, s_o]))
    location.href = "./news_detail.html"
})