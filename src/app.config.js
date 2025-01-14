export default {
  pages: [
    'pages/business/index',
    'pages/feedback/index',
    'pages/feedback/detail/index',
    'pages/quote/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'DustCleaning',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#1890ff',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [{
      pagePath: 'pages/business/index',
      text: '业务介绍',
      iconPath: './assets/icons/business.png',
      selectedIconPath: './assets/icons/business-active.png'
    }, {
      pagePath: 'pages/feedback/index',
      text: '客户反馈',
      iconPath: './assets/icons/feedback.png',
      selectedIconPath: './assets/icons/feedback-active.png'
    }, {
      pagePath: 'pages/quote/index',
      text: '预估报价',
      iconPath: './assets/icons/quote.png',
      selectedIconPath: './assets/icons/quote-active.png'
    }]
  }
}