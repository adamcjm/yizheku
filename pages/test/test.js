// 获取应用实例
const app = getApp();

Page({
    data: {
        myName: "迈克尔",
        myAge: "26",
        userInfo: {}
    },
    // 事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: "../index/index"
        })
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            var userInfo = app.globalData.userInfo;
            this.setData({
                userInfo: userInfo
            })
        }
        wx.getUserInfo({
            success: res => {
                console.log(res);
            }
        })
    }
})