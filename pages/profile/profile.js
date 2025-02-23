// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      name: '羊羊羊',
      avatar: '/assets/images/avatar-default.png'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 点击专属客服
  onTapService() {
    wx.navigateTo({
      url: '/pages/chat/chat'
    })
  },

  // 点击我的报价单
  onTapQuotation() {
    // 处理点击事件
  },

  // 点击运价订阅
  onTapFreight() {
    // 处理点击事件
  },

  // 点击跟踪订阅
  onTapTrack() {
    // 处理点击事件
  },

  // 点击版本更新
  onTapVersion() {
    // 处理点击事件
  },

  // 点击刷新缓存
  onTapRefresh() {
    // 处理点击事件
  }
})