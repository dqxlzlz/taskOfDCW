//Page Object
Page({
    data: {


        // 轮播图的数据，未完成的开发
        SwiperList: [{
                id: 0,
                txt: "回家的风景",
                image_src: "https://s3.ax1x.com/2021/02/19/yho4Cn.png"
            },
            {
                id: 1,
                txt: "我们的2020",
                image_src: "https://s3.ax1x.com/2021/02/19/yhof4s.png"
            },
            {
                id: 2,
                txt: "元旦心相连，青春飞梦young",
                image_src: "https://s3.ax1x.com/2021/02/19/yhoREQ.png"
            }
        ],

        // 中间导航栏的数据
        icon: [{
            id: 0,
            loca: "../../icon/aboutUs.png",
            txt: "了解我们",
            toWhere: "../aboutUs/aboutUs"
        }, {
            id: 1,
            loca: "../../icon/scsb.png",
            txt: "双创申报",
            toWhere: "../scsb/scsb"
        }, {
            id: 2,
            loca: "../../icon/aboutIt.png",
            txt: "关于双创",
            toWhere: "../gysc/gysc"
        }, {
            id: 3,
            loca: "../../icon/joinUs.png",
            txt: "加入我们",
            toWhere: "../joinUs/joinUs"
        }, {
            id: 4,
            loca: "../../icon/wait.png",
            txt: "敬请期待",
            toWhere: "null"
        }],

        // 下方文章的数据
        scsj: [{
            id: 0,
            image: "https://s3.ax1x.com/2021/02/19/yh4X4I.png",
            txt: "关于举办第十届中南大学大学生服务外包大赛",
            toWhere: "../yemian1/yemian1"
        }, {
            id: 1,
            image: "https://s3.ax1x.com/2021/02/19/yhoihn.png",
            txt: "创创的点滴成长--双创大事件",
            toWhere: "../yemian2/yemian2"
        }]
    },

    //options(Object)
    onLoad: function(options) {
        var reqTask = wx.request({
            url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
            success: (result) => {
                this.setData({
                    swiperList: result.data.message
                })
            }
        });
    },

    onReady: function() {

    },
    onShow: function() {

    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() {

    },
    onShareAppMessage: function() {

    },
    onPageScroll: function() {

    },
    //item(index,pagePath,text)
    onTabItemTap: function(item) {

    }
});