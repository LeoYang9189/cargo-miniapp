// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList: [
      {
        id: 1,
        name: '运营演示账号@售前演示环境',
        avatar: '/images/avatar3.png',
        lastMessage: '你好，我现在不在，欢迎留言，一会回复您。',
        time: '2024/12/19'
      },
      {
        id: 2,
        name: '朱丹@上海巴士悦信物流发展有限公司',
        avatar: '/images/avatar4.png',
        lastMessage: '我通过了你的朋友验证请求，现在我们可以开始聊天了。',
        time: '2024/12/19'
      }
      // 可以添加更多消息
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 页面加载时的逻辑
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

  gotoChat(e) {
    wx.navigateTo({
      url: '/pages/chat/chat'
    })
  }
})