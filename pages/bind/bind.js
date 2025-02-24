const { mockBindAccount } = require('../../utils/storage');

Page({
  data: {
    email: '',
    password: '',
    wxId: '',
    userInfo: null
  },

  onLoad(options) {
    // 获取微信ID
    this.setData({
      wxId: options.wxId || ''
    });

    // 获取用户信息
    this.getUserProfile();
  },

  // 获取用户信息
  getUserProfile() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        });
      },
      fail: () => {
        wx.showToast({
          title: '获取用户信息失败',
          icon: 'none'
        });
      }
    });
  },

  // 处理账号绑定
  handleBind() {
    const { email, password, wxId } = this.data;
    
    if (!email || !password) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '绑定中...'
    });

    setTimeout(() => {
      const result = mockBindAccount(email, password, wxId);
      wx.hideLoading();

      if (result.success) {
        wx.showToast({
          title: '绑定成功',
          icon: 'success',
          duration: 2000
        });

        setTimeout(() => {
          wx.reLaunch({
            url: '/pages/index/index'
          });
        }, 2000);
      } else {
        wx.showToast({
          title: result.message,
          icon: 'error'
        });
      }
    }, 1500);
  },

  // 跳转到注册页面
  onRegister() {
    wx.showToast({
      title: '请联系管理员创建账号',
      icon: 'none'
    });
  }
}); 