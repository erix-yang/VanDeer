import { View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import './index.scss'

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <View className={`layout ${isMobile ? 'mobile' : 'desktop'}`}>
      <View className='content'>
        {children}
      </View>
    </View>
  )
}

export default Layout 