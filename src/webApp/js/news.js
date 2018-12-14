

const list_new_arr = ["newsInfo", "dynamicInfo", "newsInfo"]
let n = 0, l = dataInfo[list_new_arr[0]].length


// news数据
function news_list(i) {
    dataInfo[list_new_arr[i]].slice(n, n + 6).map(item => {
        $(".news_item ul").append(`
            <li>
                <h1>${item.news_title}</h1>
                <p class="sort">类型：<span>APP开发技术</span></p>
                <p class="news_info">${item.news_info_title}</p>
                <a data-index=${item.id} data-add=${item.add} href="./news_detail.html">查看更多</a>
            </li>
        `)
    })
}

$(function () {
    $(".app-news h1").addClass("animah1")
    news_list(0, n)
})

$(".app-news ul").on("click", "li", function () {
    n = 0
    const i = $(this).data("index")
    l = dataInfo[list_new_arr[i]].length
    $(".app-news ul li").removeClass("activeli")
    $(this).addClass("activeli")
    $('.load_more p').text("更多")
    $(".news_item ul").empty()
    news_list(i, n)
})

$(".load_more").click(function () {
    n = n + 6
    if (n <= l) {
        news_list(i, n)
    } else {
        $('.load_more p').text("no more")
    }
})

// 跳转到news详情
$(".news_item").on("click", "a", function () {
    const i_news = $(this).data("index")
    const s_news = $(this).data("add")
    sessionStorage.setItem("news_detail_info", JSON.stringify([i_news, s_news]))
})

