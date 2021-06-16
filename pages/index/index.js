// index.js
// 获取应用实例
const app = getApp()

Page({


  data: {
    currentSwiperItem:0,
    info2:10000000,
    msg: 'Hello World111',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    array:[{
      name:'张三',
      age:'24',
      country:'china',
      email:'zhangsan@gamil.com',
    },{
      name:'李四',
      age:'18',
      country:'china',
      email:'李四@gamil.com',
    },{
      name:'荣荣',
      age:'18',
      country:'china',
      email:'rr@gamil.com',
    }],
    images:[{
      name:'1',
      url:"https://www.supersg.cn/images/desc/app2.png"
    },{
      "name":2,
      "url":"https://www.supersg.cn/images/desc/app1.png"
    },{
      "name":3,
      "url":"https://www.supersg.cn/images/desc/user_active.png"
    }]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindSwiperChange(e){
    this.setData({
      currentSwiperItem: e.detail.current,
    })
  },
  clickme:function(){
    this.setData({msg:"hello world"})
  }
})
