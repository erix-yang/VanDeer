import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Layout from '../../components/Layout'
import './index.scss'

export default class Feedback extends Component {
  state = {
    feedbacks: [
      {
        id: 1,
        cover: require('../../assets/images/feedback1.jpg'),
        images: [
          require('../../assets/images/feedback1.jpg'),
          require('../../assets/images/feedback1_2.jpg'),
          require('../../assets/images/feedback1_3.jpg')
        ],
        address: '北京市朝阳区恒大名都',
        service: '烘干机通风管道清洁',
        date: '2024-03-15',
        description: '专业的服务团队，清洁效果非常好，家里再也没有烘干机排气管堵塞的问题了。'
      },
      // ... 更多反馈数据
    ]
  }

  handleFeedbackClick = (feedback) => {
    // 将反馈数据编码后通过路由参数传递
    Taro.navigateTo({
      url: `/pages/feedback/detail/index?feedback=${encodeURIComponent(JSON.stringify(feedback))}`
    })
  }

  render () {
    const { feedbacks } = this.state

    return (
      <Layout>
        <View className='feedback-page'>
          <View className='page-header'>
            <Text className='title'>客户反馈</Text>
            <Text className='subtitle'>真实客户，真实评价</Text>
          </View>

          <View className='feedback-grid'>
            {feedbacks.map(feedback => (
              <View 
                key={feedback.id} 
                className='feedback-item'
                onClick={() => this.handleFeedbackClick(feedback)}
              >
                <View className='image-wrapper'>
                  <Image 
                    className='cover'
                    src={feedback.cover}
                    mode='aspectFill'
                  />
                  <View className='overlay'>
                    <Text className='view-more'>查看详情</Text>
                  </View>
                </View>
                <View className='info'>
                  <Text className='address'>{feedback.address}</Text>
                  <Text className='service'>{feedback.service}</Text>
                  <Text className='date'>{feedback.date}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Layout>
    )
  }
} 