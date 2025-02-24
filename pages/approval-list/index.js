Page({
  data: {
    currentTab: 'submit',
    searchValue: '',
    approvalList: [
      {
        id: 1,
        title: '新客户开发申请',
        status: 'pending',
        statusText: '待审批',
        applicant: '张三',
        applyTime: '2024-03-20 14:30',
        type: '客户开发'
      },
      {
        id: 2,
        title: '报价方案审批',
        status: 'approved',
        statusText: '已通过',
        applicant: '李四',
        applyTime: '2024-03-19 16:45',
        type: '报价审批'
      },
      {
        id: 3,
        title: '特殊价格申请',
        status: 'rejected',
        statusText: '已拒绝',
        applicant: '王五',
        applyTime: '2024-03-18 09:15',
        type: '价格审批'
      }
    ]
  },

  onLoad() {
    // 页面加载时可以从服务器获取审批数据
  },

  onBack() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({ currentTab: tab });
    // 根据tab切换加载不同的数据
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
  },

  onApprovalDetail(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/approval-detail/index?id=${id}`
    });
  }
}); 