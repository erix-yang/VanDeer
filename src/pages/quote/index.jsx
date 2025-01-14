import { Component } from 'react'
import { View, Input, Form, Button, Text, Picker } from '@tarojs/components'
import Layout from '../../components/Layout'
import './index.scss'

export default class Quote extends Component {
  state = {
    form: {
      city: '',
      address: '',
      zipCode: '',
      email: '',
      phone: '',
      area: '',
      firstFloorDryers: '0',
      upperFloorDryers: '0'
    },
    errors: {},
    isSubmitting: false,
    showSuccess: false,
    cities: ['Vancouver', 'Richmond', 'Burnaby', 'Coquitlam', 'Surrey', 'Langley', 'Maple Ridge'],
    selectedCityIndex: 0
  }

  validateForm = () => {
    const { form } = this.state
    const errors = {}

    if (!form.city) errors.city = '请选择城市'
    if (!form.address) errors.address = '请输入详细地址'
    if (!form.phone) {
      errors.phone = '请输入联系电话'
    } else if (!/^1[3-9]\d{9}$/.test(form.phone)) {
      errors.phone = '请输入有效的手机号码'
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = '请输入有效的邮箱地址'
    }
    if (!form.area) {
      errors.area = '请输入房屋面积'
    } else if (isNaN(form.area) || Number(form.area) <= 0) {
      errors.area = '请输入有效的面积'
    }

    return errors
  }

  handleInput = (field, e) => {
    const { form, errors } = this.state
    const value = e.detail.value
    
    this.setState({
      form: { ...form, [field]: value },
      errors: { ...errors, [field]: '' }
    })
  }

  handleCityChange = (e) => {
    const { form, errors, cities } = this.state
    const selectedIndex = e.detail.value
    
    this.setState({
      selectedCityIndex: selectedIndex,
      form: { ...form, city: cities[selectedIndex] },
      errors: { ...errors, city: '' }
    })
  }

  handleSubmit = async () => {
    const errors = this.validateForm()
    
    if (Object.keys(errors).length > 0) {
      this.setState({ errors })
      return
    }

    this.setState({ isSubmitting: true })

    try {
      // 这里添加提交表单的API调用
      await new Promise(resolve => setTimeout(resolve, 1500)) // 模拟API调用
      
      this.setState({ 
        showSuccess: true,
        form: {
          city: '',
          address: '',
          zipCode: '',
          email: '',
          phone: '',
          area: '',
          firstFloorDryers: '0',
          upperFloorDryers: '0'
        }
      })

      setTimeout(() => {
        this.setState({ showSuccess: false })
      }, 3000)
    } catch (error) {
      console.error('提交失败:', error)
    } finally {
      this.setState({ isSubmitting: false })
    }
  }

  render () {
    const { 
      form, 
      errors, 
      isSubmitting, 
      showSuccess,
      cities,
      selectedCityIndex
    } = this.state

    return (
      <Layout>
        <View className='quote-page'>
          <View className='page-header'>
            <Text className='title'>预估报价</Text>
            <Text className='subtitle'>填写以下信息获取清洁服务报价</Text>
          </View>

          <Form className='quote-form' onSubmit={this.handleSubmit}>
            <View className='form-group'>
              <View className='label required'>城市</View>
              <Picker
                mode='selector'
                range={cities}
                onChange={this.handleCityChange}
                value={selectedCityIndex}
              >
                <View className='picker'>
                  {form.city || '请选择城市'}
                </View>
              </Picker>
              {errors.city && <Text className='error'>{errors.city}</Text>}
            </View>

            <View className='form-group'>
              <View className='label required'>详细地址</View>
              <Input
                className='input'
                value={form.address}
                onInput={e => this.handleInput('address', e)}
                placeholder='请输入详细地址'
              />
              {errors.address && <Text className='error'>{errors.address}</Text>}
            </View>

            <View className='form-group'>
              <View className='label'>邮政编码</View>
              <Input
                className='input'
                value={form.zipCode}
                onInput={e => this.handleInput('zipCode', e)}
                placeholder='请输入邮政编码（选填）'
              />
            </View>

            <View className='form-group'>
              <View className='label'>电子邮箱</View>
              <Input
                className='input'
                type='email'
                value={form.email}
                onInput={e => this.handleInput('email', e)}
                placeholder='请输入电子邮箱（选填）'
              />
              {errors.email && <Text className='error'>{errors.email}</Text>}
            </View>

            <View className='form-group'>
              <View className='label required'>联系电话</View>
              <Input
                className='input'
                type='number'
                value={form.phone}
                onInput={e => this.handleInput('phone', e)}
                placeholder='请输入手机号码'
              />
              {errors.phone && <Text className='error'>{errors.phone}</Text>}
            </View>

            <View className='form-group'>
              <View className='label required'>房屋面积（平方米）</View>
              <Input
                className='input'
                type='number'
                value={form.area}
                onInput={e => this.handleInput('area', e)}
                placeholder='请输入房屋面积'
              />
              {errors.area && <Text className='error'>{errors.area}</Text>}
            </View>

            <View className='form-group'>
              <View className='label'>一层/地下室烘干机台数</View>
              <Input
                className='input'
                type='number'
                value={form.firstFloorDryers}
                onInput={e => this.handleInput('firstFloorDryers', e)}
                placeholder='请输入数量'
              />
            </View>

            <View className='form-group'>
              <View className='label'>二层/三层烘干机台数</View>
              <Input
                className='input'
                type='number'
                value={form.upperFloorDryers}
                onInput={e => this.handleInput('upperFloorDryers', e)}
                placeholder='请输入数量'
              />
            </View>

            <Button 
              className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
              formType='submit'
              disabled={isSubmitting}
            >
              {isSubmitting ? '提交中...' : '获取报价'}
            </Button>
          </Form>

          {showSuccess && (
            <View className='success-message'>
              <View className='success-content'>
                <Text className='icon'>✓</Text>
                <Text className='text'>提交成功！我们会尽快与您联系</Text>
              </View>
            </View>
          )}
        </View>
      </Layout>
    )
  }
} 