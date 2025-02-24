const { mockLogin, mockWxLogin } = require('../../utils/storage');

Page({
  data: {
    email: '',
    password: ''
  },

  onLoad() {
    // 演示账号提示
    wx.showModal({
      title: '测试账号',
      content: 'email: test@example.com\n密码: 123456',
      showCancel: false
    });
  },

  // 处理普通登录
  handleLogin() {
    const { email, password } = this.data;
    if (!email || !password) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '登录中...'
    });

    // 模拟登录请求
    setTimeout(() => {
      const result = mockLogin(email, password);
      wx.hideLoading();
      
      if (result.success) {
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        });
        setTimeout(() => {
          wx.reLaunch({
            url: '/pages/index/index'
          });
        }, 1500);
      } else {
        wx.showToast({
          title: result.message,
          icon: 'error'
        });
      }
    }, 1000);
  },

  // 处理微信登录
  handleWechatLogin() {
    wx.showLoading({
      title: '登录中...'
    });

    wx.login({
      success: (res) => {
        if (res.code) {
          setTimeout(() => {
            const result = mockWxLogin(res.code);
            wx.hideLoading();
            
            if (result.success) {
              if (result.isBound) {
                // 已绑定，直接登录
                wx.showToast({
                  title: '登录成功',
                  icon: 'success'
                });
                setTimeout(() => {
                  wx.reLaunch({
                    url: '/pages/index/index'
                  });
                }, 1500);
              } else {
                // 未绑定，跳转绑定页面
                wx.navigateTo({
                  url: `/pages/bind/bind?wxId=${result.data.wxId}`
                });
              }
            } else {
              wx.showToast({
                title: '微信登录失败',
                icon: 'none'
              });
            }
          }, 1000);
        } else {
          wx.hideLoading();
          wx.showToast({
            title: '微信登录失败',
            icon: 'none'
          });
        }
      },
      fail: () => {
        wx.hideLoading();
        wx.showToast({
          title: '微信登录失败',
          icon: 'none'
        });
      }
    });
  },

  // 忘记密码
  onForgotPassword() {
    wx.showToast({
      title: '请联系管理员重置密码',
      icon: 'none'
    });
  }
}); 