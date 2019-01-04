$(function () {
    const data = JSON.parse(getWebStorage("anli-detail"))
    $(".banner img").attr("src", data.pro_top_img)
    // $(".banner p").text(data.pro_date)
    // $(".banner h3").text(data.pro_title)
    $(".sort-title").text(`${data.pro_sort[0]}>`)
    $(".pro_title").text(data.pro_title)
    $(".introduce span").text(data.pro_title)
    $(".pro_introduce").text(data.pro_introduce)
    $(".code-img").attr("src", data.pro_link)
    $("article .show").html(`
        ${
        data.pro_anli_imgs.map(item => {
            return `
                    <img src="${item}" alt="">
                `
        })
        }
    `)
    $(".jump").html(`
        ${
        data.id == 0 ? `
                <a href="javascript:void(0);" data-index="${data.id + 1}" data-ify="${data.pro_sort[1]}">下一篇：<span>${dataInfo[data.pro_sort[1]].content[data.id + 1].pro_title}</span></a>
            `: data.id == dataInfo[data.pro_sort[1]].content.length - 1 ? `
                <a href="javascript:void(0);" data-index="${data.id - 1}" data-ify="${data.pro_sort[1]}">上一篇：<span>${dataInfo[data.pro_sort[1]].content[data.id - 1].pro_title}</span></a>
            `: `
                <a href="javascript:void(0);" data-index="${data.id - 1}" data-ify="${data.pro_sort[1]}">上一篇：<span>${dataInfo[data.pro_sort[1]].content[data.id - 1].pro_title}</span></a>
                <a href="javascript:void(0);" data-index="${data.id + 1}" data-ify="${data.pro_sort[1]}">下一篇：<span>${dataInfo[data.pro_sort[1]].content[data.id + 1].pro_title}</span></a>
            `
        }
    `)
    $(".appDevelop div").html(`
        ${
        dataInfo[data.pro_sort[1]].content.slice(0, 4).map(item => {
            return `
                <div class="pro-normal ${item.id == 6 ? "big" : ""}" data-index=${item.id} data-ify="${data.pro_sort[1]}">
                    <div>
                        <img src="${item.pro_anli_imgs[0]}" alt="">
                        <b>
                            <p>查看详情</p>
                        </b>
                    </div>
                    <p>${item.pro_title}</p>
                    <p>${item.pro_sort[2]}</p>
                </div>
            `
        }).join("")
        }
    `)

    $(".dynamic-list ul").html(`
        ${
        dataInfo.dynamicInfo.slice(0, 4).map(item => {
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
    $(".dynamic-detail").html(`
        <a data-index=0 data-ify="dynamicInfo" href="javascript:void(0);"><img src="${dataInfo.dynamicInfo[0].news_img}" alt=""></a>
    `)
})


$(".appDevelop").on("click", ".pro-normal", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("anli-detail", JSON.stringify(dataInfo[t].content[i]))
    location.href = "./anli-detail.html"
})
$(".jump").on("click", "a", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("anli-detail", JSON.stringify(dataInfo[t].content[i]))
    location.href = "./anli-detail.html"
})
$(".dynamic-list").on("click", "li", function () {
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
$(".dynamic-detail").on("click", "a", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("news-detail", JSON.stringify(dataInfo[t][i]))
    location.href = "./news-detail.html"
})