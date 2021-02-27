// pages/login/login.js

// 获取用户的昵称与头像数据，完成后返回上一个页面
Page({
    handleGetUserInfo(e) {
        // console.log(e);
        const { userInfo } = e.detail;
        wx.setStorageSync("userinfo", userInfo);
        wx.navigateBack({
            delta: 1
        });
    }
})