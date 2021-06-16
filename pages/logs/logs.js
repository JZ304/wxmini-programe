// logs.js
const util = require('../../utils/util.js')

Page({
  // 直接渲染页面的数据
  data: {
    logs: []
  },
  // 加载之后渲染页面的数据
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})
