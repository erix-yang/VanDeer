import { Component } from 'react'
import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/business/index',
      'pages/feedback/index',
      'pages/quote/index'
    ],
    tabBar: {
      list: [{
        pagePath: 'pages/business/index',
        text: '业务介绍',
        iconPath: 'assets/icons/business.png',
        selectedIconPath: 'assets/icons/business-active.png'
      }, {
        pagePath: 'pages/feedback/index',
        text: '客户反馈',
        iconPath: 'assets/icons/feedback.png',
        selectedIconPath: 'assets/icons/feedback-active.png'
      }, {
        pagePath: 'pages/quote/index',
        text: '预估报价',
        iconPath: 'assets/icons/quote.png',
        selectedIconPath: 'assets/icons/quote-active.png'
      }]
    }
  }

  render () {
    return this.props.children
  }
}

export default App
