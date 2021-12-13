import { FC } from 'react'
import { Layout, PageHeader } from 'antd'
import User from '../User'

const Header: FC = () => (
  <Layout.Header className='site-layout-background' style={{ padding: 0 }}>
    <PageHeader
      ghost={false}
      title='react-router-dom'
      extra={
        <User />
      }
    />
  </Layout.Header>
)

export default Header
