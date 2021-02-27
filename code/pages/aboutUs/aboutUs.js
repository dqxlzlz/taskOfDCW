// pages/aboutUs/aboutUs.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
                id: 0,
                name: "简介",
                isActive: true
            },
            {
                id: 1,
                name: "运作机制",
                isActive: false
            },
            {
                id: 2,
                name: "外界评价",
                isActive: false
            }
        ],
        partment: [{
            id: 0,
            content: "网络技术部"
        }, {
            id: 1,
            content: "记者采访部"
        }, {
            id: 2,
            content: "美术设计部"
        }, {
            id: 3,
            content: "信息策划部"
        }, {
            id: 4,
            content: "人力资源部"
        }, {
            id: 5,
            content: "宣传推广部"
        }, {
            id: 6,
            content: "新闻发言人"
        }],
        title: [{
            id: 0,
            _content: "网络技术部"
        }, {
            id: 1,
            _content: "记者采访部"
        }, {
            id: 2,
            _content: "美术设计部"
        }, {
            id: 3,
            _content: "信息策划部"
        }, {
            id: 4,
            _content: "人力资源部"
        }, {
            id: 5,
            _content: "宣传推广部"
        }, {
            id: 6,
            _content: "新闻发言人"
        }],
        content: [{
                id: 0,
                detail: "软件开发分部，硬件维护分部"
            },
            {
                id: 1,
                detail: "记者，视频编辑人员。"
            },
            {
                id: 2,
                detail: ""
            },
            {
                id: 3,
                detail: ""
            },
            {
                id: 4,
                detail: ""
            },
            {
                id: 5,
                detail: ""
            },
            {
                id: 6,
                detail: ""
            }
        ]
    },



    // 通过改变isActive数组的值来改变上方的导航栏
    hanleDetail(e) {
        console.log(e);
    },

    handleItemChange(e) {
        // console.log(e);
        const { index } = e.detail;
        let { tabs } = this.data;
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
        this.setData({
            tabs
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        this.popup = this.selectComponent("#popup");
    },
    showPopup() {
        this.popup.showPopup();
    },
    //取消事件
    _close() {
        console.log('你点击了关闭按钮');
        this.popup.hidePopup();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})