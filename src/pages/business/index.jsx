import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Layout from '../../components/Layout'
import './index.scss'

export default class Business extends Component {
  state = {
    services: [
      {
        icon: 'check.png',
        title: '系统检查',
        content: '我们的检查可确保您的烘干机通风系统安全高效地运行。'
      },
      {
        icon: 'clean.png',
        title: '清洁服务',
        content: '通风口应每年清洁一次，以防止火灾和其他危险。'
      },
      {
        icon: 'repair.png',
        title: '维修服务',
        content: '从不当的通风口材料到破损的接头，我们的维修可确保您的通风口正常工作。'
      },
      {
        icon: 'install.png',
        title: '安装服务',
        content: '我们使用符合规范的材料和方法来确保最佳的系统性能。'
      }
    ],
    values: [
      {
        icon: 'inspection.png',
        title: '全系统检查',
        content: '我们对您的现有系统进行彻底检查，包括技术阅读，以隔离问题并确定正���的解决方案。我们将识别任何问题或危险，并向您介绍我们的发现。这个过程使我们能够提供适当的住宅通风口清洁。'
      },
      {
        icon: 'professional.png',
        title: '专业服务和效果',
        content: '烘干机通风口向导专业人员仅使用符合规范的材料以及专业工具和技术，以提供最高质量的烘干机通风口清洁服务和客户体验。我们根据您的具体情况和需求为您提供个性化的完整解决方案。'
      },
      {
        icon: 'promise.png',
        title: '小鹿的承诺',
        content: '我们知道拥有一个干净的烘干机通风口对您的家有多么重要，与我们合作您可以高枕无忧。我们为我们的工作感到自豪，我们业务标准确保我们的住宅烘干机通风口清洁服务感到满意。'
      }
    ]
  }

  componentDidMount() {
    console.log('Business component mounted');
    console.log('Services:', this.state.services);
    console.log('Values:', this.state.values);
  }

  render () {
    const { services, values } = this.state

    return (
      <Layout>
        <View className='business-page'>
          <View className='business-header'>
            <View className='primary-text'>专业的烘干机通风管道清洁服务</View>
            <View className='secondary-text'>为您的家庭带来安全和效率</View>
          </View>

          <View className='section'>
            <View className='section-title'>我们的服务</View>
            <View className='services-grid'>
              {services.map((service, index) => (
                <View key={index} className='service-item'>
                  <Image 
                    className='icon'
                    src={require(`../../assets/icons/${service.icon}`)}
                  />
                  <View className='title'>{service.title}</View>
                  <View className='content'>{service.content}</View>
                </View>
              ))}
            </View>
          </View>

          <View className='section'>
            <View className='section-title'>我们的优势</View>
            <View className='values-container'>
              {values.map((value, index) => (
                <View key={index} className='value-item'>
                  <Image 
                    className='icon'
                    src={require(`../../assets/icons/${value.icon}`)}
                  />
                  <View className='content-wrapper'>
                    <View className='title'>{value.title}</View>
                    <View className='content'>{value.content}</View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Layout>
    )
  }
} 