
// 初始化list

const list_arr = ["appInfo", "websiteInfo", "brandInfo", "marketInfo", "gameDevelopInfo"]
let newArr = [], n = 0


for (let i = 0; i < 5; i++) {
    for (let j = 0; j < dataInfo[list_arr[i]].content.length; j++) {
        newArr.push(dataInfo[list_arr[i]].content[j])
    }
}

const l = newArr.length

function list(data) {
    data.slice(n, n + 6).map(item => {
        $(".app_item ul").append(`
            <li data-index=${item.id} data-sort=${item.pro_sort[1]}>
                <img src="${item.pro_anli_imgs[0]}" alt="">
                <h6>${item.pro_title}</h6>
                <p>${item.pro_sort[2]}</p>
            </li>
        `)
    }).join("")
}


$(function () {
    $(".app_banner h6").addClass("anima_p")
    setTimeout(() => {
        $(".app_banner h2").addClass("anima_p")
    }, 500)

    list(newArr, n)
})
$('.load_more').click(() => {
    if (n + 6 <= l) {
        n = n + 6
        list(newArr, n)
    } else {
        $('.load_more p').text("no more")
    }
})


// 跳转到app详情
$(".app_item").on("click", "li", function () {
    const i_o = $(this).data("index")
    const s_o = $(this).data("sort")
    sessionStorage.setItem("app_detail_info", JSON.stringify([i_o, s_o]))
    location.href = "./app_detail.html"
})


// 自定义动画
const deviceH = window.innerHeight
const bottomH = $(".fixbottom").height()

let index_animate_getprice_a = function (Top) {
    if ($(".getprice").position().top - deviceH + bottomH < Top) {
        $(".getprice a").addClass("animap")
    }
}
let index_animate_getprice_p = function (Top) {
    if ($(".getprice").position().top - deviceH + bottomH < Top) {
        $(".getprice p").addClass("animap")
    }
}

window.onscroll = function () {
    let scrollTop = $(this).scrollTop()
	const Top = document.documentElement.scrollTop || document.body.scrollTop
	if (Top > 500) {
		$(".gotop").show()
	} else {
		$(".gotop").hide()
	}
    index_animate_getprice_a(scrollTop)
    index_animate_getprice_p(scrollTop)
}

