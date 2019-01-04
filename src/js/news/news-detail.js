$(".top li").click(() => {
    this.location.href = "./news-detail.html"
})
$(function () {
    const data = JSON.parse(getWebStorage("news-detail"))
    let i = data.id, c = data.add
    $(".add").text(`${data.add == "dynamicInfo" ? "聚米粒智库" : "聚米粒新闻"}>`)
    $(".add-title").text(data.news_title)
    $(".introduce h4").text(data.news_title)
    $(".introduce h4").after(`
        <p>${data.news_date}</p>
        <p>${data.news_info_title}</p>
        <span>${data.news_info_top}</span>
        <img src="${data.news_img[0]}" />
        <span>${data.news_info_m}</span>
    `)

    $(".jump").html(`
        ${
        i == 0 ? `
                <a href="javascript:void(0);" data-index="${i + 1}" data-ify="${c}">下一篇：<span>${dataInfo[c][i + 1].news_title.length > 20 ? dataInfo[c][i + 1].news_title.slice(0, 20) + "..." : dataInfo[c][i + 1].news_title}</span></a>
            `: i == dataInfo[c].length - 1 ? `
                <a href="javascript:void(0);" data-index="${i - 1}" data-ify="${c}">上一篇：<span>${dataInfo[c][i - 1].news_title.length > 20 ? dataInfo[c][i - 1].news_title.slice(0, 20) + "..." : dataInfo[c][i - 1].news_title}</span></a>
            `: `
                <a href="javascript:void(0);" data-index="${i - 1}" data-ify="${c}">上一篇：<span>${dataInfo[c][i - 1].news_title.length > 20 ? dataInfo[c][i - 1].news_title.slice(0, 20) + "..." : dataInfo[c][i - 1].news_title}</span></a>
                <a href="javascript:void(0);" data-index="${i + 1}" data-ify="${c}">下一篇：<span>${dataInfo[c][i + 1].news_title.length > 20 ? dataInfo[c][i + 1].news_title.slice(0, 20) + "..." : dataInfo[c][i + 1].news_title}</span></a>
            `
        }
    `)

    $(".experience ul").html(`
        ${
        dataInfo[c].slice(0, 6).map(item => {
            return `
                    <li data-index=${item.id} data-ify=${c}>
                        <p>${item.news_title.length > 18 ? item.news_title.slice(0, 18) + "..." : item.news_title}</p>
                        <p>${item.news_info_top.length > 16 ? item.news_info_top.slice(0, 16) + "..." : item.news_info_title}</p>
                    </li>
                `
        }).join("")
        }
    `)

    $(".experience div").after(`
        ${
        dataInfo[c].slice(0, 2).map(item => {
            return `
                    <img data-index=${item.id} data-ify=${c} src="${item.news_img}" />
                `
        }).join("")
        }
    `)
})
$(".jump").on("click", "a", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("news-detail", JSON.stringify(dataInfo[t][i]))
    location.href = "./news-detail.html"
})
$(".experience").on("click", "img", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("news-detail", JSON.stringify(dataInfo[t][i]))
    location.href = "./news-detail.html"
})
$(".experience").on("click", "li", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("news-detail", JSON.stringify(dataInfo[t][i]))
    location.href = "./news-detail.html"
})