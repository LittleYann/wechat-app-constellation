//index.js
//获取应用实例
var app = getApp()
Page({

  onLoad:function() {
    var that = this;
    wx.request({
      url: 'https://www.ztandgy.com.cn/wxbot/iamge.do',
      method: 'GET',
      success:function(res) {
         that.setData({
          code: res.data.code,
          url: res.data.data.url
       })
      }
    })
  },

})
