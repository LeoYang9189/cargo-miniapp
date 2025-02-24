Page({
  data: {
    pageTitle: '',
    feature: '',
    messages: [],
    inputMessage: '',
    scrollToMessage: '',
    messageId: 1
  },

  goBack() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  onLoad(options) {
    const feature = options.feature;
    let pageTitle = '';
    let welcomeMessage = '';

    // 根据功能类型设置页面标题和欢迎语
    switch (feature) {
      case 'astrology':
        pageTitle = '星象占卜';
        welcomeMessage = '您好！我是您的星座运势分析师，请告诉我您的星座，我来为您解读运势。';
        break;
      case 'legal':
        pageTitle = '法律顾问';
        welcomeMessage = '您好！我是您的法律顾问，请详细描述您遇到的法律问题，我会为您提供专业的建议。';
        break;
      case 'coding':
        pageTitle = 'AI编程';
        welcomeMessage = '您好！我是您的编程助手，请告诉我您需要开发的功能，我会为您提供代码方案。';
        break;
      case 'marketing':
        pageTitle = '营销策划';
        welcomeMessage = '您好！我是您的营销策划专家，请描述您的产品或服务，我会为您制定详细的营销方案。';
        break;
      default:
        pageTitle = 'AI助手';
        welcomeMessage = '您好！我是您的AI助手，请问有什么可以帮您？';
    }

    this.setData({
      pageTitle,
      feature,
      messages: [{
        id: 1,
        type: 'ai',
        content: welcomeMessage,
        time: '现在'
      }]
    });
  },

  onInputChange(e) {
    this.setData({
      inputMessage: e.detail.value
    });
  },

  sendMessage() {
    if (!this.data.inputMessage.trim()) return;

    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    // 添加用户消息
    const userMessage = {
      id: this.data.messageId + 1,
      type: 'user',
      content: this.data.inputMessage,
      time: timeStr
    };

    const messages = [...this.data.messages, userMessage];
    
    this.setData({
      messages,
      inputMessage: '',
      messageId: userMessage.id,
      scrollToMessage: `msg-${userMessage.id}`
    });

    // 模拟AI回复
    setTimeout(() => {
      const aiMessage = {
        id: this.data.messageId + 1,
        type: 'ai',
        content: this.getAIResponse(this.data.feature, userMessage.content),
        time: timeStr
      };

      const updatedMessages = [...this.data.messages, aiMessage];
      
      this.setData({
        messages: updatedMessages,
        messageId: aiMessage.id,
        scrollToMessage: `msg-${aiMessage.id}`
      });
    }, 1000);
  },

  getAIResponse(feature, userMessage) {
    // 根据不同功能返回相应的回复
    const responses = {
      astrology: [
        '根据星象显示，近期您的运势...',
        '从行星位置来看，建议您...',
        '结合月相变化，您最近...'
      ],
      legal: [
        '从法律角度分析，这种情况...',
        '根据相关法规，建议您...',
        '需要注意的法律风险是...'
      ],
      coding: [
        '这个功能可以这样实现：\n1. 首先...\n2. 然后...',
        '建议使用以下代码结构：\n```\n示例代码\n```',
        '这个问题的最佳实践是...'
      ],
      marketing: [
        '从市场分析来看，建议您...',
        '可以考虑以下营销策略：\n1. ...\n2. ...',
        '根据目标受众特点，推荐...'
      ]
    };

    const featureResponses = responses[feature] || [
      '我明白您的问题，让我来帮您解答。',
      '这是一个很好的问题，我的建议是...',
      '让我为您详细分析一下这个问题。'
    ];

    return featureResponses[Math.floor(Math.random() * featureResponses.length)];
  },

  // 重置对话
  resetChat() {
    wx.showModal({
      title: '提示',
      content: '确定要清空当前对话吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            messages: [],
            messageId: 1
          });
          // 显示初始提示
          this.showInitialHint();
        }
      }
    });
  },

  // 显示初始提示
  showInitialHint() {
    const welcomeMessage = '您好！我是您的AI助手，请问有什么可以帮您？';
    this.setData({
      messages: [{
        id: 1,
        type: 'ai',
        content: welcomeMessage,
        time: '现在'
      }]
    });
  }
}); 