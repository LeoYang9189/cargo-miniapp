Page({
  data: {
    currentTab: 'submit' // 设置默认显示"我提交的"标签页
  },

  // 切换标签页
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab
    });
  },

  // 导航方法
  navigateToOrderQuery() {
    wx.navigateTo({ url: '/pages/order-query/index' });
  },
  navigateToInternalInquiry() {
    wx.navigateTo({ url: '/pages/internal-inquiry/index' });
  },
  navigateToQuoteManage() {
    wx.navigateTo({ url: '/pages/quote-manage/index' });
  },
  navigateToApproval() {
    wx.navigateTo({ url: '/pages/approval/index' });
  },
  navigateToAIChat() {
    wx.navigateTo({ url: '/pages/ai-chat/index' });
  },
  navigateToCustomer() {
    wx.navigateTo({ url: '/pages/customer/index' });
  },
  navigateToScanCard() {
    wx.navigateTo({
      url: '/pages/scan-card/index'
    });
  },
  navigateToNewInquiry() {
    wx.navigateTo({ url: '/pages/new-inquiry/index' });
  }
});

