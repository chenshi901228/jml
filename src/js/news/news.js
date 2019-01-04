const pageAll = Math.ceil(dataInfo.newsInfo.length / 12)
function init(i) {
    $(".dynamic-list ul").html(`
        ${
        dataInfo.newsInfo.slice(0, 12).map(item => {
            return `
                    <li data-index=${item.id} data-ify="newsInfo">
                        <div>
                            <img src="${item.news_img[0]}" alt="">
                            <b>
                                <p>查看更多</p>
                            </b>
                        </div>
                        <div>
                            <div class="time-title">
                                <h2>${item.news_date.slice(8, 10)}
                                    <br/>
                                    <span>${item.news_date.slice(0, 4)}.${item.news_date.slice(5, 7)}</span>
                                </h2>
                                <p>${item.news_title.length > 28 ? item.news_title.slice(0, 28) + "..." : item.news_title}</p>
                            </div>
                            <div class="dynamic-link">
                                <p>查看详情</p>
                                <img src="./images/icon/right__03.jpg" alt="">
                            </div>
                        </div>
                    </li>
                    `
        }).join("")
        }
    `)
}
$(function () {
    init(0)
    for (let i = 0; i < pageAll; i++) {
        $(".dynamic-pagination ul").append(`
            <li>
                <a href="javascript:void(0);" data-index=${i}>${i + 1}</a>
            </li>
        `)
    }
})
$(".dynamic-pagination").on("click", "a", function () {
    const i = $(this).attr("data-index")
    for (let j = 0; j < pageAll; j++) {
        $(".dynamic-pagination a")[j].style.color = "#000"
        $(".dynamic-pagination a")[j].style.backgroundColor = "rgb(243, 243, 243)"
    }
    $(this)[0].style.color = "#fff"
    $(this)[0].style.backgroundColor = "#b41b1d"
    init(i * 12)
})
$(".dynamic-list").on("click", "li", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("news-detail", JSON.stringify(dataInfo[t][i]))
    location.href = "./news-detail.html"
})