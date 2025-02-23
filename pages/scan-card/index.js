Page({
  data: {
    userInfo: {
      name: '陈天池',
      title: '总经理',
      company: '上海AAA供应链管理有限公司',
      phone: '134 8236 0000',
      email: 'gm@logistic.com',
      address: '上海市闵行区1222号'
    }
  },

  // 返回首页
  onBack() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  editProfile() {
    wx.showToast({
      title: '编辑资料',
      icon: 'none'
    })
  },

  changeStyle() {
    wx.showToast({
      title: '切换样式',
      icon: 'none'
    })
  },

  switchCard() {
    wx.showToast({
      title: '切换名片',
      icon: 'none'
    })
  },

  shareCard() {
    wx.showToast({
      title: '分享名片',
      icon: 'none'
    })
  },

  viewUpdates() {
    wx.showToast({
      title: '查看更新',
      icon: 'none'
    })
  }
}) 