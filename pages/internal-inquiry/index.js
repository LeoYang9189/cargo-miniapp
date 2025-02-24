Page({
  data: {
    // 条款选项
    terms: ['CY-CY', 'CFS-CFS', 'CY-CFS', 'CFS-CY'],
    termsIndex: 0,

    // 起运港选项
    pols: ['Shanghai', 'Ningbo', 'Qingdao', 'Xiamen', 'Shenzhen'],
    polIndex: 0,

    // 目的港选项
    pods: ['Singapore', 'Bangkok', 'Jakarta', 'Manila', 'Ho Chi Minh'],
    podIndex: -1,

    // 船公司选项
    carriers: ['不限', 'COSCO', 'MSC', 'MAERSK', 'ONE', 'CMA'],
    carrierIndex: 0,

    // 品名
    commodity: 'FAK',

    // 整拼类型
    shipmentType: 'FCL', // FCL: 整箱, LCL: 拼箱

    // 箱型选项
    containerTypes: ['20GP', '40GP', '40HC', '40NOR', '45HC'],
    
    // 箱型箱量列表
    containers: [
      { typeIndex: -1, quantity: '' }
    ]
  },

  onBack() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  // 条款选择
  onTermsChange(e) {
    this.setData({
      termsIndex: e.detail.value
    });
  },

  // 起运港选择
  onPolChange(e) {
    this.setData({
      polIndex: e.detail.value
    });
  },

  // 目的港选择
  onPodChange(e) {
    this.setData({
      podIndex: e.detail.value
    });
  },

  // 船公司选择
  onCarrierChange(e) {
    this.setData({
      carrierIndex: e.detail.value
    });
  },

  // 品名输入
  onCommodityInput(e) {
    this.setData({
      commodity: e.detail.value
    });
  },

  // 整拼类型切换
  onShipmentTypeChange(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      shipmentType: type
    });
  },

  // 箱型选择
  onContainerTypeChange(e) {
    const index = e.currentTarget.dataset.index;
    const containers = this.data.containers;
    containers[index].typeIndex = e.detail.value;
    this.setData({ containers });
  },

  // 箱量输入
  onQuantityInput(e) {
    const index = e.currentTarget.dataset.index;
    const containers = this.data.containers;
    containers[index].quantity = e.detail.value;
    this.setData({ containers });
  },

  // 添加箱型箱量组
  addContainer() {
    if (this.data.containers.length >= 5) return;
    const containers = this.data.containers;
    containers.push({ typeIndex: -1, quantity: '' });
    this.setData({ containers });
  },

  // 删除箱型箱量组
  deleteContainer(e) {
    const index = e.currentTarget.dataset.index;
    const containers = this.data.containers;
    containers.splice(index, 1);
    this.setData({ containers });
  },

  // 提交表单
  submitForm() {
    const data = {
      terms: this.data.terms[this.data.termsIndex],
      pol: this.data.pols[this.data.polIndex],
      pod: this.data.pods[this.data.podIndex],
      carrier: this.data.carriers[this.data.carrierIndex],
      commodity: this.data.commodity,
      shipmentType: this.data.shipmentType,
      containers: this.data.shipmentType === 'FCL' ? this.data.containers.map(item => ({
        type: this.data.containerTypes[item.typeIndex],
        quantity: item.quantity
      })) : []
    };

    // 表单验证
    if (!data.pod) {
      wx.showToast({
        title: '请选择目的港',
        icon: 'none'
      });
      return;
    }

    if (data.shipmentType === 'FCL') {
      const validContainers = data.containers.filter(item => item.type && item.quantity);
      if (validContainers.length === 0) {
        wx.showToast({
          title: '请至少填写一组箱型箱量',
          icon: 'none'
        });
        return;
      }
    }

    console.log('提交的数据：', data);
    wx.showToast({
      title: '提交成功',
      icon: 'success'
    });
  }
}); 