Page({
  data: {
    searchValue: '',
    customers: [
      {
        id: 1,
        companyName: '上海远洋物流有限公司',
        status: 'active',
        statusText: '活跃',
        rating: 'A+',
        difficulty: '低',
        contactName: '张经理'
      },
      {
        id: 2,
        companyName: '广州海运集团',
        status: 'potential',
        statusText: '潜在',
        rating: 'B',
        difficulty: '中',
        contactName: '李总监'
      },
      {
        id: 3,
        companyName: '深圳国际货运代理',
        status: 'inactive',
        statusText: '不活跃',
        rating: 'C',
        difficulty: '高',
        contactName: '王经理'
      }
    ]
  },

  onLoad() {
    // 页面加载时可以从服务器获取客户数据
  },

  onBack() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  onSearch() {
    const { searchValue } = this.data;
    if (!searchValue.trim()) {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none'
      });
      return;
    }
    // 执行搜索逻辑
    wx.showToast({
      title: '搜索功能开发中',
      icon: 'none'
    });
  },

  onCustomerDetail(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/customer-detail/index?id=${id}`
    });
  },

  // 创建客户
  onCreateCustomer() {
    wx.navigateTo({
      url: '/pages/customer-create/index'
    });
  }
}); 