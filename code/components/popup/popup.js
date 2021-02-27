// components/popup/popup.js


// 弹窗组件


Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: '部门名称'
        },
        // 弹窗内容
        content_leftText: {
            type: String,
            value: '详细信息'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        flag: true,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //隐藏弹框
        hidePopup: function() {
            this.setData({
                flag: !this.data.flag
            })
        },
        //展示弹框
        showPopup() {
            this.setData({
                flag: !this.data.flag
            })
        },
        /*
         * triggerEvent 用于触发事件
         */
        _close() {
            this.triggerEvent("close");
        }
    }
})