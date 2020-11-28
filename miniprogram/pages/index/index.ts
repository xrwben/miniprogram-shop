// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    recommendList: [
      { title: '北京平谷大红桃', des: '空气里都是甜甜的红桃香气', num: 500, score: 500, price: 80, pic: '../../static/home/recommend_1.png' },
      { title: '北京平谷大红桃', des: '空气里都是甜甜的红桃香气', num: 500, score: 500, price: 80, pic: '../../static/home/recommend_1.png' },
      { title: '北京平谷大红桃', des: '空气里都是甜甜的红桃香气', num: 500, score: 500, price: 80, pic: '../../static/home/recommend_1.png' },
      { title: '北京平谷大红桃', des: '空气里都是甜甜的红桃香气', num: 50, score: 500, price: 80, pic: '../../static/home/recommend_1.png' }
    ],
    pastList: [
      { title: '寻乌脐橙', date: '8.1-8.20', pic: '../../static/home/past-img-1.png' },
      { title: '乌江草莓', date: '8.1-8.20', pic: '../../static/home/past-img-2.png' },
      { title: '浙江乌梅', date: '8.1-8.20', pic: '../../static/home/past-img-3.png' },
      { title: '广西猕猴桃', date: '8.1-8.20', pic: '../../static/home/past-img-4.png' },
      { title: '湖南葡萄', date: '8.1-8.20', pic: '../../static/home/past-img-5.png' },
      { title: '广东荔枝', date: '8.1-8.20', pic: '../../static/home/past-img-6.png' }
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        },
      })
    }
  },
  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
})
