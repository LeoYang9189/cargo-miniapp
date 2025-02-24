Page({
  data: {
    searchValue: '',
    currentTab: 'pending',
    pendingQuotes: [
      {
        id: 1,
        quoteId: 'QT' + Math.random().toString().slice(2, 10),
        status: 'pending',
        statusText: '待报价',
        pol: 'Shanghai',
        pod: 'Singapore',
        customerName: '上海远洋物流有限公司',
        price20GP: '--',
        price40GP: '--',
        price40HC: '--'
      },
      {
        id: 2,
        quoteId: 'QT' + Math.random().toString().slice(2, 10),
        status: 'pending',
        statusText: '待报价',
        pol: 'Ningbo',
        pod: 'Bangkok',
        customerName: '宁波国际货运代理有限公司',
        price20GP: '--',
        price40GP: '--',
        price40HC: '--'
      }
    ],
    quotedQuotes: [
      {
        id: 3,
        quoteId: 'QT' + Math.random().toString().slice(2, 10),
        status: 'quoted',
        statusText: '已报价',
        pol: 'Shanghai',
        pod: 'Ho Chi Minh',
        customerName: '上海海运物流有限公司',
        price20GP: 'USD 2,500',
        price40GP: 'USD 4,000',
        price40HC: 'USD 4,200'
      },
      {
        id: 4,
        quoteId: 'QT' + Math.random().toString().slice(2, 10),
        status: 'quoted',
        statusText: '已报价',
        pol: 'Shenzhen',
        pod: 'Manila',
        customerName: '深圳外运物流有限公司',
        price20GP: 'USD 1,800',
        price40GP: 'USD 3,200',
        price40HC: 'USD 3,400'
      }
    ]
  },

  onBack() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  // 切换标签页
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab
    });
  },

  // 搜索
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

  // 创建报价
  onCreateQuote() {
    wx.navigateTo({
      url: '/pages/quote-create/index'
    });
  }
}); 