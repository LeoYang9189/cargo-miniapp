// 模拟的用户数据
const mockUsers = [
  { email: 'test@example.com', password: '123456', name: '测试用户' },
  { email: 'admin@cargo.com', password: 'admin123', name: '管理员' }
];

// 模拟的微信绑定数据
const mockWxBindings = {
  'wx_123456': 'test@example.com',  // 微信ID: 邮箱
};

const StorageKeys = {
  USER_INFO: 'user_info',
  TOKEN: 'token'
};

// 保存用户信息
const setUserInfo = (userInfo) => {
  wx.setStorageSync(StorageKeys.USER_INFO, userInfo);
};

// 获取用户信息
const getUserInfo = () => {
  return wx.getStorageSync(StorageKeys.USER_INFO);
};

// 清除用户信息
const clearUserInfo = () => {
  wx.removeStorageSync(StorageKeys.USER_INFO);
  wx.removeStorageSync(StorageKeys.TOKEN);
};

// 模拟登录验证
const mockLogin = (email, password) => {
  const user = mockUsers.find(u => u.email === email && u.password === password);
  if (user) {
    const userInfo = { ...user, token: 'mock_token_' + Date.now() };
    delete userInfo.password;
    setUserInfo(userInfo);
    return { success: true, data: userInfo };
  }
  return { success: false, message: '邮箱或密码错误' };
};

// 模拟微信登录验证
const mockWxLogin = (code) => {
  const mockWxId = 'wx_123456'; // 模拟微信返回的ID
  const boundEmail = mockWxBindings[mockWxId];
  
  if (boundEmail) {
    const user = mockUsers.find(u => u.email === boundEmail);
    if (user) {
      const userInfo = { ...user, token: 'mock_wx_token_' + Date.now() };
      delete userInfo.password;
      setUserInfo(userInfo);
      return { success: true, data: userInfo, isBound: true };
    }
  }
  
  return { success: true, data: { wxId: mockWxId }, isBound: false };
};

// 模拟账号绑定
const mockBindAccount = (email, password, wxId) => {
  const loginResult = mockLogin(email, password);
  if (loginResult.success) {
    mockWxBindings[wxId] = email;
    return { success: true, data: loginResult.data };
  }
  return { success: false, message: '账号或密码错误' };
};

module.exports = {
  mockLogin,
  mockWxLogin,
  mockBindAccount,
  getUserInfo,
  clearUserInfo
}; 