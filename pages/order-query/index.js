Page({
  data: {
    searchValue: '',
    statistics: {
      arrivalIn7Days: 0,
      expectedDelay: 0,
      containerDrop: 0,
      expectedDetention: 0,
      waitingPickup: 0,
      waitingLoading: 0
    }
  },

  onLoad() {
    // 页面加载时可以从服务器获取统计数据
  },

  onBack() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  // 搜索输入
  onSearchInput(e) {
    this.setData({
      searchValue: e.detail.value
    });
  },

  // 搜索提交
  onSearchSubmit() {
    const { searchValue } = this.data;
    if (!searchValue.trim()) {
      wx.showToast({
        title: '请输入提单号或箱号',
        icon: 'none'
      });
      return;
    }
    // 执行搜索逻辑
  },

  // 查看详情
  onViewDetail(e) {
    const { type } = e.currentTarget.dataset;
    // 根据不同类型跳转到对应的详情页面
    wx.navigateTo({
      url: `/pages/order-detail/index?type=${type}`
    });
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '邀请好友使用Cargo全能王',
      path: '/pages/index/index'
    };
  }
}); 