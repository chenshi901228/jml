function init(i) {
    $(".appInfo").html(`
        ${
        dataInfo.appInfo.content.slice(i, i + 7).map(item => {
            return `
                <div class="pro-normal ${(item.id + 1) % 7 == 0 ? "big" : ""}" data-index=${item.id} data-ify="appInfo">
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
}


const pageAll = Math.ceil(dataInfo.appInfo.content.length / 7)
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
    init(i * 7)
})
$(".appDevelop").on("click", ".pro-normal", function () {
    const i = $(this).attr("data-index")
    const t = $(this).attr("data-ify")
    setWebStorage("anli-detail", JSON.stringify(dataInfo[t].content[i]))
    location.href = "./anli-detail.html"
})