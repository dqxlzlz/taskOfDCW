// pages/mine/mine.js


// 通过login页面将获取的数据改变userInfo数据

Page({
    data: {
        userinfo: {}
    },
    onShow() {
        const userinfo = wx.getStorageSync("userinfo");
        this.setData({ userinfo })
    }

})