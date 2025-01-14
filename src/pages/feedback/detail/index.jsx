import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
import Layout from '../../../components/Layout'
import './index.scss'

export default class FeedbackDetail extends Component {
  state = {
    feedback: null
  }

  componentDidMount() {
    // 获取路由参数中的反馈数据
    const router = getCurrentInstance().router
    if (router?.params?.feedback) {
      this.setState({
        feedback: JSON.parse(decodeURIComponent(router.params.feedback))
      })
    }
  }

  render () {
    const { feedback } = this.state
    
    if (!feedback) return null

    return (
      <Layout>
        <View className='feedback-detail'>
          <View className='detail-header'>
            <Text className='address'>{feedback.address}</Text>
            <Text className='service'>{feedback.service}</Text>
            <Text className='date'>{feedback.date}</Text>
          </View>
          
          <View className='detail-body'>
            <Text className='description'>{feedback.description}</Text>
            <View className='images-list'>
              {feedback.images.map((image, index) => (
                <Image 
                  key={index}
                  className='image'
                  src={image}
                  mode='widthFix'
                />
              ))}
            </View>
          </View>
        </View>
      </Layout>
    )
  }
} 