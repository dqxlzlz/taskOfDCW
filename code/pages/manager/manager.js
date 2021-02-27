// pages/manager/manager.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
                id: 0,
                name: "意见反馈",
                isActive: true,
            },
            {
                id: 1,
                name: "更新文章",
                isActive: false
            }
        ],
        textVal: "", //文本内容
        imgs: [], //图片信息
        count: 3, //
        //被选中的图片的数组
        chooseImgs: []
    },
    UpLoadImg: [],


    //将图片与文字一起上传到外网链接，并校验输入内容是否为空


    handleFormSubmit() {
        const { textVal, chooseImgs } = this.data;
        if (!textVal.trim()) {
            wx.showToast({
                title: '输入不合法',
                mask: true,
                icon: 'none'
            });
            return;
        }
        //显示等待
        wdx.wx.showLoading({
            title: "正在上传中",
            mask: true,
        });
        //遍历数组chooseImgs，并将其上传
        chooseImgs.forEach((v, i) => {
            wx.uploadFile({
                url: 'http://img.coolcr.cn/index/api.html',
                filePath: v,
                name: "image",
                formData: {},
                success: (result) => {
                    if (i === chooseImgs.length - 1) {
                        this.setData({
                            textVal: "",
                            chooseImgs: []
                        })
                        wx.wx.navigateBack({
                            delta: 1
                        });
                    }
                }
            });
        })
    },
    handleTextInput(e) {
        this.setData({
            textVal: e.detail.value
        })
    },


    // 删除选中的图片的开始


    handleRemoveImg(e) {
        const { index } = e.currentTarget.dataset;
        let { chooseImgs } = this.data;
        chooseImgs.splice(index, 1);
        this.setData({
            chooseImgs
        })
    },


    //选择图片的按钮


    handleChooseImg() {
        wx.chooseImage({
            count: 9,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: (result) => {
                this.setData({
                    chooseImgs: [...this.data.chooseImgs, ...result.tempFilePaths]
                })
            },
        });
    },
    bindUpload: function(e) {
        switch (this.data.imgs.length) {
            case 0:
                this.data.count = 3
                break
            case 1:
                this.data.count = 2
                break
            case 2:
                this.data.count = 1
                break
        }
        var that = this
        wx.chooseImage({
            count: that.data.count, // 默认3
            sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths
                for (var i = 0; i < tempFilePaths.length; i++) {
                    wx.uploadFile({
                        url: 'https://graph.baidu.com/upload',
                        filePath: tempFilePaths[i],
                        name: "file",
                        header: {
                            "content-type": "multipart/form-data"
                        },
                        success: function(res) {
                            if (res.statusCode == 200) {
                                wx.showToast({
                                    title: "上传成功",
                                    icon: "none",
                                    duration: 1500
                                })

                                that.data.imgs.push(JSON.parse(res.data).data)

                                that.setData({
                                    imgs: that.data.imgs
                                })
                            }
                        },
                        fail: function(err) {
                            wx.showToast({
                                title: "上传失败",
                                icon: "none",
                                duration: 2000
                            })
                        },
                        complete: function(result) {
                            console.log(result.errMsg)
                        }
                    })
                }
            }
        })
    },
    // 删除图片
    deleteImg: function(e) {
        var that = this
        wx.showModal({
            title: "提示",
            content: "是否删除",
            success: function(res) {
                if (res.confirm) {
                    for (var i = 0; i < that.data.imgs.length; i++) {
                        if (i == e.currentTarget.dataset.index) that.data.imgs.splice(i, 1)
                    }
                    that.setData({
                        imgs: that.data.imgs
                    })
                } else if (res.cancel) {
                    console.log("用户点击取消")
                }
            }
        })
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