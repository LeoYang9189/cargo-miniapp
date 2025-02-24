// pages/profile/profile.js
const { getUserInfo, clearUserInfo } = require('../../utils/storage');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoggedIn: false,
    userInfo: null
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
    // 每次显示页面时检查登录状态
    this.checkLoginStatus();
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
  },

  // 检查登录状态
  checkLoginStatus() {
    const userInfo = getUserInfo();
    this.setData({
      isLoggedIn: !!userInfo,
      userInfo: userInfo || null
    });
  },

  // 处理用户点击
  handleUserClick() {
    if (!this.data.isLoggedIn) {
      wx.navigateTo({
        url: '/pages/login/login'
      });
    }
  },

  // 处理退出登录
  handleLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          clearUserInfo();
          this.setData({
            isLoggedIn: false,
            userInfo: null
          });
          wx.showToast({
            title: '已退出登录',
            icon: 'success'
          });
        }
      }
    });
  },

  // 我的订单
  onMyOrders() {
    if (!this.data.isLoggedIn) {
      this.checkLoginBeforeAction();
      return;
    }
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  // 我的报价
  onMyQuotes() {
    if (!this.data.isLoggedIn) {
      this.checkLoginBeforeAction();
      return;
    }
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  // 设置
  onSettings() {
    if (!this.data.isLoggedIn) {
      this.checkLoginBeforeAction();
      return;
    }
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  // 检查登录状态并提示
  checkLoginBeforeAction() {
    wx.showModal({
      title: '提示',
      content: '请先登录后再使用该功能',
      confirmText: '去登录',
      success: (res) => {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/login/login'
          });
        }
      }
    });
  }
})