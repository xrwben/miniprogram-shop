// const app = getApp<IAppOption>();

Page({
  data: {
    currentTab: 'all', // 全部all 待发货unsend 已发货 sended
    triggered: false,
    orderList: [
      { name: '台湾水仙芒', pic: '../../static/order/order-img.png', unit: '5KG/箱', num: 2, price: '2000', status: '待发货' },
      { name: '台湾水仙芒', pic: '../../static/order/order-img.png', unit: '5KG/箱', num: 2, price: '2000', status: '待发货' },
      { name: '台湾水仙芒', pic: '../../static/order/order-img.png', unit: '5KG/箱', num: 2, price: '2000', status: '待发货' },
      { name: '台湾水仙芒', pic: '../../static/order/order-img.png', unit: '5KG/箱', num: 2, price: '2000', status: '待发货' },
      { name: '台湾水仙芒', pic: '../../static/order/order-img.png', unit: '5KG/箱', num: 2, price: '2000', status: '待发货' },
      { name: '台湾水仙芒', pic: '../../static/order/order-img.png', unit: '5KG/箱', num: 2, price: '2000', status: '待发货' },
      { name: '台湾水仙芒', pic: '../../static/order/order-img.png', unit: '5KG/箱', num: 2, price: '2000', status: '待发货' }
    ]
  },
  // 切换tab
  changeTab(e: any) {
    this.setData({
      currentTab: e.target.dataset.tab
    })
  },
  // 下拉刷新
  pullFresh(e:any) {
    console.log("下拉>>>", e)
    this.setData({
      triggered: true
    })
  }
})