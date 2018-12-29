const device = navigator.userAgent
if (!/Windows/.test(device)) {
    window.location.href = "./webApp/webindex.html"
}


const dataInfo = {
    index_banner_img: [
        "./images/banner/one.jpg",
        "./images/banner/two.jpg",
        "./images/banner/three.jpg"
    ],
    bannerShow:['APP开发','网站建设','品牌设计','整合营销','游戏开发','其他'],
    qq: 786154530,
    partLink: [],
    appInfo: {
        bannerImg: [],
        content: [
            {
                id: 0,
                pro_top_img: "./images/appDevelop/app_banner.jpg",
                pro_title: "映客直播APP",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["App开发", "appInfo", "APP开发/直播APP开发"],
                pro_introduce: `映客直播app是一款在线直播软件，映客app以实时的视频直播互动的方式，映客app让网友们无距离无延迟最真实全面的信息传达。通过映客app从此，你所看见的世界随时都掌握在你的手中。`,
                pro_anli_imgs: ["./images/appDevelop/app-anli_1.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 1,
                pro_top_img: "./images/appDevelop/app_banner.jpg",
                pro_title: "鲸鱼直播APP",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["App开发", "appInfo", "APP开发/直播APP开发"],
                pro_introduce: `鲸鱼直播app是由聚米粒科技有限公司打造的一款能够随时随地开启直播的手机app。鲸鱼直播app让每个人都可以现场直播无需任何专业设备，只需要拿起你的iPhone，打开鲸鱼直播app就是这么简单。`,
                pro_anli_imgs: ["./images/appDevelop/app-anli_2.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 2,
                pro_top_img: "./images/appDevelop/app_banner.jpg",
                pro_title: "脸控直播App",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["App开发", "appInfo", "知名品牌APP开发/音乐APP开发"],
                pro_introduce: `脸控直播app是一款十分火爆的真人视频直播软件，实时语音连麦，精彩才艺表演，拿起手机就能与众多高颜值主播亲密互动。`,
                pro_anli_imgs: ["./images/appDevelop/app-anli_1.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 3,
                pro_top_img: "./images/appDevelop/app_banner.jpg",
                pro_title: "藏道购物APP",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["App开发", "appInfo", "APP开发/购物APP开发"],
                pro_introduce: `藏道购物APP。低折扣买正品好货，每日精选高性价比好物打折特卖，还有优惠券满减划算省钱。
                目前已有1000+品牌入驻醒购APP，涵盖运动户外、服装配饰、鞋靴箱包、钟表珠宝、生活家居、数码家电、食品超市、美妆个护、母婴童装等品类。每天多品牌限量打折特卖，全场包邮，优惠不停。  
                低折扣 买好货`,
                pro_anli_imgs: ["./images/appDevelop/app-anli_4.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 4,
                pro_top_img: "./images/appDevelop/app_banner.jpg",
                pro_title: "美云直播APP开发",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["App开发", "appInfo", "APP开发/直播APP开发"],
                pro_introduce: `美云直播app是一款娱乐直播软件，美云直播苹果版为用户提供海量高颜值的美女主播们，让用户可以在这里体验到更加精彩的直播互动表演，与喜欢的主播亲密交友。`,
                pro_anli_imgs: ["./images/appDevelop/app-anli_5.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 5,
                pro_top_img: "./images/appDevelop/app_banner.jpg",
                pro_title: "可乐直播APP",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["App开发", "appInfo", "直播APP开发"],
                pro_introduce: `可乐直播APP是一款年轻人都在玩的视频直播社交类软件，校花，空姐，女神男神，模特，这里都有，香梨直播平台的主播颜值都特别高，人也特别高，才艺多多，为大家带来众多欢乐，喜欢看直播的朋友欢迎下载！`,
                pro_anli_imgs: ["./images/appDevelop/app-anli_6.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 6,
                pro_top_img: "./images/appDevelop/app_banner.jpg",
                pro_title: "千秀直播APP",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["App开发", "appInfo", "APP开发/直播APP开发"],
                pro_introduce: `千秀直播app是一款在线直播软件，千秀直播手机版为用户打造一个手机直播平台，汇聚大量明星网红，还有超多高颜值的校花、
                校草，在这里人人都可以当主播，魔法美颜，让你轻松呈现出自己最美的一面。千秀直播来袭，直播升级，火爆潮流的手 
                机视频直播社交平台， 有明星有网红，各路素人都在玩，高颜值超搞笑的都在千秀直播。 
                啊，一个聚集了明星、网红、校花、校草、高颜值帅哥美女，有生活趣事，花边新闻，各类发布会等内容的手机直播社交软件。 
                数不尽的大咖、小鲜肉、美女妹、纸等你来约，全天候服务用户，但这里拒绝色情和低俗，给大家一个舒适安逸的直播环境。`,
                pro_anli_imgs: ["./images/appDevelop/app-anli_7.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }
        ]
    },
    websiteInfo: {
        bannerImg: [],
        content: [
            {
                id: 0,
                pro_top_img: "./images/website/web_banner.jpg",
                pro_title: "新新服装官网",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["网站建设", "websiteInfo", "网站设计/服装设计官网"],
                pro_introduce: `新新服装成立于2004年，创办了中国首家时尚资讯网络，率先建立为设计服务的面料交易平台，肩负着为设计师和时尚企业家赋能升级的使命
                在各个产业集群设立了“设界”众创空间，致力于更贴切的设计服务和帮助企业转型升级
                如今，新新不仅是资讯的优质服务商，更是集合了人工智能、互联网+、大数据等前沿科技的时尚科技服务商
                为服装、鞋、包、家纺、首饰、面料等60万企业，100万+设计师服务，涵盖了90%的品牌。`,
                pro_anli_imgs: ["./images/website/website-anli_1.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 1,
                pro_top_img: "./images/website/web_banner.jpg",
                pro_title: "合记药铺",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["网站建设", "websiteInfo", "网站设计/网站开发"],
                pro_introduce: `合计药铺是一家中西药网上大药房也是全国连锁品牌中医馆,在国内设有食品、药品、医药等医疗机构合法企业。`,
                pro_anli_imgs: ["./images/website/website-anli_2.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 2,
                pro_top_img: "./images/website/web_banner.jpg",
                pro_title: "MODAO家居设计",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["网站建设", "websiteInfo", "网站设计/家居官网设计"],
                pro_introduce: `modao家居一直致力于建设世界家居和中式家居结合的功能强大的行业门户平台。为商家和用户搭起了一座直接沟通的桥梁，轻松实现消费者在modao家居网进行洽谈交易，同时让用户充分享受到网上购物的乐趣与惬意。`,
                pro_anli_imgs: ["./images/website/website-anli_3.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 3,
                pro_top_img: "./images/website/web_banner.jpg",
                pro_title: "武珍药材官网",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["网站建设", "websiteInfo", "网站设计/商品相关"],
                pro_introduce: `武珍药材网是一家专业中药材大全知识查询网站,主要介绍各种中药的功效与作用、用药禁忌及食用方法、图片、快速查询名称等,是中国最全的中药信息网站。`,
                pro_anli_imgs: ["./images/website/website-anli_4.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 4,
                pro_top_img: "./images/website/web_banner.jpg",
                pro_title: "伊伊布舍·布艺网站",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["网站建设", "websiteInfo", "网站设计/商品相关"],
                pro_introduce: `伊伊布艺网是国内专业的中国布艺行业门户网站。为布艺企业和个人提供窗帘布艺、布艺沙发、家居布艺等方面的布艺资讯信息。`,
                pro_anli_imgs: ["./images/website/website-anli_5.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 5,
                pro_top_img: "./images/website/web_banner.jpg",
                pro_title: "艺术家居网站",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["网站建设", "websiteInfo", "家居官网设计"],
                pro_introduce: `艺术家居,为您打造出一方你喜欢称其为家的空间,更有家居产品特惠活动。`,
                pro_anli_imgs: ["./images/website/website-anli_6.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 6,
                pro_top_img: "./images/website/web_banner.jpg",
                pro_title: "舒仁地产",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["网站建设", "websiteInfo", "网站设计/地产官网设计"],
                pro_introduce: `舒仁房地产专注于一手楼盘销售委托管理服务。力求打造一支有着绝对专业知识和素养的强大团队。`,
                pro_anli_imgs: ["./images/website/website-anli_7.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            },
            // {
            //     id: 7,
            //     pro_top_img: "./images/website/web_banner.jpg",
            //     pro_title: "好贷宝·钱包金融",
            //     pro_date: "2017-11-03 21:08:23",
            //     pro_sort: ["网站建设", "websiteInfo", "金融APP开发/理财APP开发"],
            //     pro_introduce: `A股上市公司财富管理平台 稳健可托付的财富管理平台 · 多重防护 · 安全保障 好贷宝·钱包金融是A股上市公司奥马电器旗下金融科技事业部品牌钱包的重要成员，专注于金融科技领域的技术创新与发展，是“钱包”金融科技生态体系中的新起之秀和未来发展重点。`,
            //     pro_anli_imgs: ["./images/website/website-anli_1.jpg"],
            //     pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            // }, {
            //     id: 8,
            //     pro_top_img: "./images/website/web_banner.jpg",
            //     pro_title: "长江商学院·校友专属社交圈子APP",
            //     pro_date: "2017-11-03 21:08:23",
            //     pro_sort: ["网站建设", "websiteInfo", "学院APP开发/社交圈子APP开发"],
            //     pro_introduce: `长江商学院旗下的“UNI”APP平台旨在汇聚财富和力量，打造属于长江校友的高端社交综合类APP。 我们着力于用户体验考虑，APP界面视觉风格以扁平化为主，色块选用稳重的蓝色，与长江商学院的VI色调相融合，通过一系列辅助色系的变化，打造出层次丰富的质感空间。`,
            //     pro_anli_imgs: ["./images/website/website-anli_2.png"],
            //     pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            // }, {
            //     id: 9,
            //     pro_top_img: "./images/website/web_banner.jpg",
            //     pro_title: "咪咕音乐App客户端",
            //     pro_date: "2017-11-03 21:08:23",
            //     pro_sort: ["网站建设", "websiteInfo", "知名品牌APP开发/音乐APP开发"],
            //     pro_introduce: `咪咕音乐面向用户提供完整的音乐产品及体验，推出众多正版音乐歌曲、彩铃订制等音乐类订制内容，每年更有超百场“咪咕和Ta的朋友们”、“咪咕音乐现场”等线上、线下联动的演艺活动及“年度音乐盛典咪咕汇”等大型音乐颁奖礼。`,
            //     pro_anli_imgs: ["./images/website/website-anli_3.png"],
            //     pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            // }, {
            //     id: 10,
            //     pro_top_img: "./images/website/web_banner.jpg",
            //     pro_title: "龙亿惠品：B2B2C电商系统定制开发APP",
            //     pro_date: "2017-11-03 21:08:23",
            //     pro_sort: ["网站建设", "websiteInfo", "B2B2CAPP开发/电商APP开发"],
            //     pro_introduce: `无论从何而言，我们都在挑战传统。这涉及到商业模式、产品、设计、开发之间大量的沟通、碰撞与协作，我们试图通过龙亿惠品这个项目，来展现国内商业模式创新的新思维，将全新商业模式在O2O行业真正落地。`,
            //     pro_anli_imgs: ["./images/website/website-anli_4.jpg"],
            //     pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            // }, {
            //     id: 11,
            //     pro_top_img: "./images/website/web_banner.jpg",
            //     pro_title: "灵度珠宝 · 珠宝DIY定制化APP开发",
            //     pro_date: "2017-11-03 21:08:23",
            //     pro_sort: ["网站建设", "websiteInfo", "定制APP开发/珠宝电商APP开发"],
            //     pro_introduce: `老银匠旗下珠宝品牌：灵度珠宝 灵度珠宝作为老银匠旗下的轻奢珠宝品牌，旨在整合线上与线下门店资源，2017年携手艾邦智汇共同打造属于年轻消费群的个性珠宝定制电商APP。 为打动目标人群，除了营造良好的体验之外，对于用户而言，全新的DIY试戴功能设计是本项目的亮点，用户可以通过自身的喜好，自由组合搭配珠宝设计，并且进行拍照试戴，极大地满足了用户对于定制珠宝的个性化需求。`,
            //     pro_anli_imgs: ["./images/website/website-anli_5.png"],
            //     pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            // }, {
            //     id: 12,
            //     pro_top_img: "./images/website/web_banner.jpg",
            //     pro_title: "乾坤好车 · 分期购车平台APP",
            //     pro_date: "2017-11-03 21:08:23",
            //     pro_sort: ["网站建设", "websiteInfo", "购车平台APP开发"],
            //     pro_introduce: `乾坤好车是当下年轻人的购车方式，不仅有当下热门品牌车型推荐，还与传统购车方式相比优势巨大：超低首付、超额分期、灵活智选、手续极简等，更重要的是提供多种购车方式供年轻人选择，减轻年轻人的购车压力。`,
            //     pro_anli_imgs: ["./images/website/website-anli_6.png"],
            //     pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            // }, {
            //     id: 13,
            //     pro_top_img: "./images/website/web_banner.jpg",
            //     pro_title: "V电影 · 创意短片分享平台",
            //     pro_date: "2017-11-03 21:08:23",
            //     pro_sort: ["网站建设", "websiteInfo", "V电影APP开发/短视频APP开发"],
            //     pro_introduce: `V电影，是新片场社区旗下的短片创意库，实时分享国内外各类高品质短片，定期举办V电影开放日活动，在大银幕展映电影的同时，给创作人与观众见面交流的机会。 V电影在国内年轻创作人群及影视爱好者中享有较高品牌影响力，辐射了中国95%以上的影视爱好者及专业人群。`,
            //     pro_anli_imgs: ["./images/website/website-anli_7.jpg"],
            //     pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            // }
        ]
    },
    brandInfo: {
        bannerImg: [],
        content: [
            {
                id: 0,
                pro_top_img: "./images/brand/brand_banner.jpg",
                pro_title: "芙蓉苑logo设计",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["品牌设计", "brandInfo", "品牌设计/logo设计"],
                pro_introduce: `厦门湖里嘉园路口芙蓉苑餐厅，给您舒服的就餐环境和良好就餐品质。`,
                pro_anli_imgs: ["./images/brand/brand_1.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 1,
                pro_top_img: "./images/brand/brand_banner.jpg",
                pro_title: "珍百年",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["品牌设计", "brandInfo", "品牌设计/logo设计"],
                pro_introduce: `珍百年，百年老店，珍百年 燕窝代餐棒，不节食也可以轻松减肥，获得广大客户好评。`,
                pro_anli_imgs: ["./images/brand/brand_2.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 2,
                pro_top_img: "./images/brand/brand_banner.jpg",
                pro_title: "buffet乐园",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["品牌设计", "brandInfo", "品牌设计/logo设计"],
                pro_introduce: `给孩子打造一个专属的私密空间，即能玩的开心，也能学习的奇妙天地。`,
                pro_anli_imgs: ["./images/brand/brand_3.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 3,
                pro_top_img: "./images/brand/brand_banner.jpg",
                pro_title: "灵佛山庄",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["品牌设计", "brandInfo", "品牌设计/logo设计"],
                pro_introduce: `灵佛山庄养身会所，适合广大现代白领城市人士，力求为客人缓解压力，放松舒适的养身会所。`,
                pro_anli_imgs: ["./images/brand/brand_4.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 4,
                pro_top_img: "./images/brand/brand_banner.jpg",
                pro_title: "壹号农庄",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["品牌设计", "brandInfo", "品牌设计/logo设计"],
                pro_introduce: `壹号农庄建成养生休闲、自然体验、现代农业展示、有机农业生产、现代仓储物流五大核心功能区，是集数字农业、有机种植、休闲观光、养生度假、运动拓展、科普教育于一体的特色鲜明的数字化养生农庄。`,
                pro_anli_imgs: ["./images/brand/brand_5.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 5,
                pro_top_img: "./images/brand/brand_banner.jpg",
                pro_title: "泉水鱼",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["品牌设计", "brandInfo", "品牌设计/logo设计"],
                pro_introduce: `泉水鱼旅游休闲度假基地，是集餐饮、住宿、会议、垂钓、娱乐融为一体的高档休闲会所。周边风景秀丽、景色迷人，驱车驶入仿佛行进山间图画中。`,
                pro_anli_imgs: ["./images/brand/brand_6.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 6,
                pro_top_img: "./images/brand/brand_banner.jpg",
                pro_title: "一山一牛品牌",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["品牌设计", "brandInfo", "品牌设计/logo设计"],
                pro_introduce: `一山一牛适合家人朋友一同前往，主要以“牛”为菜品原材料，满足不同人的不同口味。`,
                pro_anli_imgs: ["./images/brand/brand_7.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }
        ]
    },
    marketInfo: {
        bannerImg: [],
        content: [
            {
                id: 0,
                pro_top_img: "./images/marketing/marketing_banner.jpg",
                pro_title: "蘇坪村",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["整合营销", "marketInfo", ""],
                pro_introduce: `苏平村总部位于上海， 携手聚米粒共同建设VIS视觉识别系统，为其国际化的全球战略目标打下坚实的品牌基础。`,
                pro_anli_imgs: ["./images/marketing/marketing-anli_1.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 1,
                pro_top_img: "./images/marketing/marketing_banner.jpg",
                pro_title: "麦田映画",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["整合营销", "marketInfo", "整合营销"],
                pro_introduce: `麦田映画是中国影视广告新锐品牌，是中国广告微电影的开拓者、领航者。公司专注于新媒体原创影视作品策划、拍摄、制作及媒体推广，以新意念，新思维，创造性的广告以及广告电影作品挖掘客户的企业文化和产品亮点。`,
                pro_anli_imgs: ["./images/marketing/marketing-anli_2.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 2,
                pro_top_img: "./images/marketing/marketing_banner.jpg",
                pro_title: "遇见民宿",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["整合营销", "marketInfo", ""],
                pro_introduce: `遇见民宿，一个门里充满阳光的院子，崇尚分享的地方，在这里你可以和朋友分享快乐，分享假期，分享美食。`,
                pro_anli_imgs: ["./images/marketing/marketing-anli_3.png"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 3,
                pro_top_img: "./images/marketing/marketing_banner.jpg",
                pro_title: "purefan生活",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["整合营销", "marketInfo", ""],
                pro_introduce: `隐匿于喧闹的都市中,闹中取静,精心设计布置,purefan生活馆力求为各大家庭提供中西式烹调课程的会员制教室,并提供各类企业相关厨艺服务。`,
                pro_anli_imgs: ["./images/marketing/marketing-anli_4.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }
        ]
    },
    gameDevelopInfo: {
        bannerImg: [],
        content: [
            {
                id: 0,
                pro_top_img: "./images/gameDevelop/game_banner.jpg",
                pro_title: "青年棋牌",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["游戏开发", "gameDevelopInfo", "游戏APP开发/棋牌"],
                pro_introduce: `青年棋牌是一款能给你带来欢乐的斗地主游戏。就要斗地主app拥有多种游戏模式供你选择，全新的游戏形式，有趣的游戏图画，让你在闲散时间能够感受到快乐！`,
                pro_anli_imgs: ["./images/gameDevelop/game-anli_1.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 1,
                pro_top_img: "./images/gameDevelop/game_banner.jpg",
                pro_title: "牛总统",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["游戏开发", "gameDevelopInfo", "游戏APP开发/斗牛"],
                pro_introduce: `牛总统app快速刺激的对战棋牌游戏。场景精美、动画生动、玩法丰富、节奏明快，瞬间即可让你体验到无穷乐趣。除合入原汁原味的地方性斗牛玩法，更创新性推出多种策略玩法：看牌抢庄、疯狂加注、百人大战，使对战过程更加刺激。
                游戏分为低分区、中分区、高分区。玩法简单，斗智斗勇，博得很多玩家的喜欢。游戏可以由2人到6人同时进行，总共52张牌（除大小王），在确定庄家后，系统将给玩家每人5张牌，比较确定胜负。`,
                pro_anli_imgs: ["./images/gameDevelop/game-anli_2.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }, {
                id: 2,
                pro_top_img: "./images/gameDevelop/game_banner.jpg",
                pro_title: "發發發",
                pro_date: "2017-11-03 21:08:23",
                pro_sort: ["游戏开发", "gameDevelopInfo", "游戏APP开发/麻将"],
                pro_introduce: `全民都爱玩的棋牌游戏：上万牌友五星推荐，给你真人对战的游戏体验。
                创新玩法，集成欢乐、经典、癞子，经典与趣味性相辅相成的超火爆棋牌类游戏~
                ---【游戏特色】---
                [丰富竞技玩法]
                24小时随时和全球玩家竞技PK！看谁技高一筹，看你如何抉择
                [一掷决胜负，一笑泯恩仇]
                加注抢庄，一夜暴富不是梦！刺激惊险的豹子皇，一局决胜负！
                [棋牌室，天涯亦咫尺]
                邀好友一起开私人房游戏，情感连线！私密又好玩，高分炫耀，连胜比拼，好友互动不停！
                [全国刺激赛事]
                丰富多样的赛事模式，定时赛，暴击赛，爽快刺激，诚邀各路高手见证实力、收获荣誉！
                [公平游戏防作弊]
                完善的防作弊系统，万人同时在线，自动配桌，随机比赛，尽享公平游戏！
                [高品质的游戏体验]
                场景化的游戏界面，感受真实；丰富趣味的飞机、炸弹动画，为游戏增添更多欢乐元素！`,
                pro_anli_imgs: ["./images/gameDevelop/game-anli_3.jpg"],
                pro_link: "./images/5fa06d4f5dd83f666637668da5b5d08c.gif"
            }
        ]
    },
    newsInfo: [
        {
            id: 0,
            add: "newsInfo",
            news_title: "聚米粒科技有限公司总结几类企业比较适合开发App软件",
            news_date: "2018-10-16 04:00:00",
            news_img: ["./images/dynamic/dynamic_1.jpg"],
            news_info_title: `A股上市公司财富管理平台 稳健可托付的财富管理平台 · 多重防护 · 安全保障 好贷宝·钱包金融是A股上市公司奥马电器旗下金融科技事业部品牌钱包的重要成员，专注于金融科技领域的技术创新与发展，是“钱包”金融科技生态体系中的新起之秀和未来发展重点。`,
            news_info_top: `在移动互联网时代App客户端汹涌澎湃的今天，App已经全面涉及到各个行业领域。虽然App的开发对企业有着宣传企业文化和提高形象的作用，但企业App软件开发是需要一定的费用成本，并不是所有行业都适合开发App应用，所以这时我们会有这样的思考：到底什么行业适合开发App呢？下面就跟随成都APP开发公司聚米粒智汇的小编一起来看看吧。`,
            news_info_b: `据成都聚米粒的商务主管Lily表示：有时候客户会这样问我们，我的企业需要App吗？哪些行业才需要开发App客户端呢？其实，App是根据企业的性质为企业量身打造的移动营销解决方案，开发App软件才能为企业锁定潜在的目标客户群，实现移动精准营销。最快的为企业创造有利的价值。`,
            news_info_m: `成都App软件开发公司聚米粒科技有限公司为你总结适合开发App的行业以及领域：<br/> 　　
            1、医疗App等医疗保健类企业如：美容整形机构、保健品专卖店、药品店；<br/> 　　
            2、移动电商App区域电商类企业如：阿里巴巴、天猫、淘宝、京东等电商第三方支付平台。<br/> `
        }, {
            id: 1,
            add: "newsInfo",
            news_title: "关心你的财产，告诉你理财类APP软件亟需解决的三大危害",
            news_date: "2018-10-16 04:00:00",
            news_img: ["./images/dynamic/dynamic_2.jpg"],
            news_info_title: ``,
            news_info_top: `随着智能科技的壮大，倍受瞩目的金融业也进军手机App软件的开发，尤其是理财类APP应用软件更是如雨后春笋般快速发展。各种理财APP的不仅给人们带来理财便利，同时也给用户带来个人信息被侵犯，生活被骚扰，以及手机病毒等侵害，那么在我们在使用理财类APP软件时应如何克服这三大危害。`,
            news_info_m: `1、理财类App软件需防止个人信息被泄露<br/><br/>
                在一些不法的理财APP软件的运营者把用户的个人信息贩卖出去，来谋求利益，因此导致了很多用户理财信息被泄露，　为了避免用户理财信息被泄露，爱好理财的用户们应该通过正规的官网来下载理财APP软件，这样才能避免自己重要的隐私信息外漏，以免造成损失。<br/><br/>
                2、理财类App软件要谨防遭骚扰广告信息<br/><br/>现在很多手机理财类APP，通过发布理财咨询，来吸引用户的眼球，诱惑用户下载其理财APP软件，但是如果用户一旦下载了此应用软件，之后，各种各样的广告骚扰信息就会扑面而来，有的甚至严重影响了用户的生活。<br/><br/>
                3、理财类App软件要防止手机被病毒感染<br/><br/>`
        }
    ],
    dynamicInfo: [
        {
            id: 0,
            add: "dynamicInfo",
            news_title: "聚米粒科技有限公司总结几类企业比较适合开发App软件",
            news_date: "2018-10-16 04:00:00",
            news_img: ["./images/dynamic/dynamic_1.jpg"],
            news_info_title: `A股上市公司财富管理平台 稳健可托付的财富管理平台 · 多重防护 · 安全保障 好贷宝·钱包金融是A股上市公司奥马电器旗下金融科技事业部品牌钱包的重要成员，专注于金融科技领域的技术创新与发展，是“钱包”金融科技生态体系中的新起之秀和未来发展重点。`,
            news_info_top: `在移动互联网时代App客户端汹涌澎湃的今天，App已经全面涉及到各个行业领域。虽然App的开发对企业有着宣传企业文化和提高形象的作用，但企业App软件开发是需要一定的费用成本，并不是所有行业都适合开发App应用，所以这时我们会有这样的思考：到底什么行业适合开发App呢？下面就跟随成都APP开发公司聚米粒智汇的小编一起来看看吧。`,
            news_info_b: `据成都聚米粒的商务主管Lily表示：有时候客户会这样问我们，我的企业需要App吗？哪些行业才需要开发App客户端呢？其实，App是根据企业的性质为企业量身打造的移动营销解决方案，开发App软件才能为企业锁定潜在的目标客户群，实现移动精准营销。最快的为企业创造有利的价值。`,
            news_info_m: `成都App软件开发公司聚米粒科技有限公司为你总结适合开发App的行业以及领域：<br/> 　　
            1、医疗App等医疗保健类企业如：美容整形机构、保健品专卖店、药品店；<br/> 　　
            2、移动电商App区域电商类企业如：阿里巴巴、天猫、淘宝、京东等电商第三方支付平台。<br/> `
        }, {
            id: 1,
            add: "dynamicInfo",
            news_title: "关心你的财产，告诉你理财类APP软件亟需解决的三大危害",
            news_date: "2018-10-16 04:00:00",
            news_img: ["./images/dynamic/dynamic_2.jpg"],
            news_info_title: ``,
            news_info_top: `随着智能科技的壮大，倍受瞩目的金融业也进军手机App软件的开发，尤其是理财类APP应用软件更是如雨后春笋般快速发展。各种理财APP的不仅给人们带来理财便利，同时也给用户带来个人信息被侵犯，生活被骚扰，以及手机病毒等侵害，那么在我们在使用理财类APP软件时应如何克服这三大危害。`,
            news_info_m: `1、理财类App软件需防止个人信息被泄露<br/><br/>
                在一些不法的理财APP软件的运营者把用户的个人信息贩卖出去，来谋求利益，因此导致了很多用户理财信息被泄露，　为了避免用户理财信息被泄露，爱好理财的用户们应该通过正规的官网来下载理财APP软件，这样才能避免自己重要的隐私信息外漏，以免造成损失。<br/><br/>
                2、理财类App软件要谨防遭骚扰广告信息<br/><br/>现在很多手机理财类APP，通过发布理财咨询，来吸引用户的眼球，诱惑用户下载其理财APP软件，但是如果用户一旦下载了此应用软件，之后，各种各样的广告骚扰信息就会扑面而来，有的甚至严重影响了用户的生活。<br/><br/>`
        },
        {
            id: 2,
            add: "dynamicInfo",
            news_title: "关于App开发的问题，中小企业APP软件你们有了吗",
            news_date: "2018-10-16 04:00:00",
            news_img: ["./images/dynamic/dynamic_3.jpg"],
            news_info_title: `众所周知，现在的APP软件开发逐渐成熟，很多的大企业都用上了APP为自己的宣传推广，而一些中小企业对APP开发还在探索之中。关于协助中小企业主如何透过联合项目的方式，节省APP开发成本、提竞争力，也是政府于本年度相关补助计划之一。面对这样的情况不禁会问，中小企业APP软件你们有了吗？现在就请和成都app开发公司艾邦的小编一起进入分享时刻。`,
            news_info_top: `众所周知，现在的APP软件开发逐渐成熟，很多的大企业都用上了APP为自己的宣传推广，而一些中小企业对APP开发还在探索之中。关于协助中小企业主如何透过联合项目的方式，节省APP开发成本、提竞争力，也是政府于本年度相关补助计划之一。面对这样的情况不禁会问，中小企业APP软件你们有了吗？现在就请和成都app开发公司艾邦的小编一起进入分享时刻。`,
            news_info_m: `一、App软件的市场前景<br/><br/>
                十年前，逢人可问你今天上网了吗?这句话曾几何时已变成你现在智慧了吗?中国每天近三分之二的人改用智能型手机，主计总处国情统计通报显示，截至2013年2月底，3G用户已高达2,299万户。由智能型手机所带动的行动势力崛起，App软件的使用也彻底改变了全球使用者搜寻信息以及购物的方式。<br/><br/>
                Google台湾区总经理陈俊廷表示，智能型手机App软件创造的信息与消费者需求息息相关。`
        },
        {
            id: 3,
            add: "dynamicInfo",
            news_title: "关于教育APP应用软件的是与非",
            news_date: "2018-10-16 04:00:00",
            news_img: ["./images/dynamic/dynamic_4.jpg"],
            news_info_title: `现在许多的家长都非常的注重对于孩子的早教问题，教育不管是对小家还是大家来说，都是一个极为重视关心的问题。教育下一代是我们当代人培养新生代认识和熟悉社会生活的重要工作。在如今的移动互联网时代，移动智能的APP也帮了家长很大的一个忙，但是家长们关于教育APP应用软件也存在着一定的烦恼。 现在就请和成都app开发公司艾邦的小编一起进入分享时刻。`,
            news_info_top: `现在许多的家长都非常的注重对于孩子的早教问题，教育不管是对小家还是大家来说，都是一个极为重视关心的问题。教育下一代是我们当代人培养新生代认识和熟悉社会生活的重要工作。在如今的移动互联网时代，移动智能的APP也帮了家长很大的一个忙，但是家长们关于教育APP应用软件也存在着一定的烦恼。<br/>
                现在就请和成都app开发公司艾邦的小编一起进入分享时刻。`,
            news_info_m: `关于教育APP软件的实用性<br/><br/>
                移动应用软件市场的儿童教育APP开发多不胜数，家长更是可以针对性下载各类型的教育APP应用辅助孩子的学习，比如，百科认知类、数学思维类、字母语言类、兴趣爱好类等等。通过这些初始的教育，帮助小朋友们认识、学习简单的事物。<br/><br/>
                教育APP应用市场存在的弊端<br/><br/>`
        },
        {
            id: 4,
            add: "dynamicInfo",
            news_title: "关于教育APP应用软件的是与非",
            news_date: "2018-10-16 04:00:00",
            news_img: ["./images/dynamic/dynamic_4.jpg"],
            news_info_title: `现在许多的家长都非常的注重对于孩子的早教问题，教育不管是对小家还是大家来说，都是一个极为重视关心的问题。教育下一代是我们当代人培养新生代认识和熟悉社会生活的重要工作。在如今的移动互联网时代，移动智能的APP也帮了家长很大的一个忙，但是家长们关于教育APP应用软件也存在着一定的烦恼。 现在就请和成都app开发公司艾邦的小编一起进入分享时刻。`,
            news_info_top: `现在许多的家长都非常的注重对于孩子的早教问题，教育不管是对小家还是大家来说，都是一个极为重视关心的问题。教育下一代是我们当代人培养新生代认识和熟悉社会生活的重要工作。在如今的移动互联网时代，移动智能的APP也帮了家长很大的一个忙，但是家长们关于教育APP应用软件也存在着一定的烦恼。<br/>
                现在就请和成都app开发公司艾邦的小编一起进入分享时刻。`,
            news_info_m: `关于教育APP软件的实用性<br/><br/>
                移动应用软件市场的儿童教育APP开发多不胜数，家长更是可以针对性下载各类型的教育APP应用辅助孩子的学习，比如，百科认知类、数学思维类、字母语言类、兴趣爱好类等等。通过这些初始的教育，帮助小朋友们认识、学习简单的事物。<br/><br/>
                教育APP应用市场存在的弊端<br/><br/>`
        }
    ],
}


// qq
$(function () {
    $(".fixedEl .qqNum").html(`
        <a href="http://wpa.qq.com/msgrd?v=3&uin=${dataInfo.qq}&site=qq&menu=yes" target="_blank">
            <img src="./images/icon/qq_1.png" alt="">
        </a>
        <div class="show-message">
            <a href="http://wpa.qq.com/msgrd?v=3&uin=${dataInfo.qq}&site=qq&menu=yes" target="_blank">
                咨询在线客服<br/>
                QQ:${dataInfo.qq}
            </a>
        </div>
    `)
})

// 本地缓存

//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//清除cookie  
function clearCookie(name) {
    setCookie(name, "", -1);
}


function setWebStorage(name, value) {
    if (window.localStorage) {
        localStorage.setItem(name, value)
    } else {
        if (name == "anli-detail") {
            clearCookie("news-detail")
        } else {
            clearCookie(name)
        }
        setCookie(name, value)
    }
}
function getWebStorage(name) {
    if (window.localStorage) {
        return localStorage.getItem(name)
    } else {
        return getCookie(name)
    }
}
