import { FC } from 'react'
import { Layout } from 'antd'
import { useRoutes } from 'react-router-dom'
import './App.less'
import Header from './components/Header'
import SideBar from './components/SideBar'
import routes from './routes'

const App: FC = () => {
  const routeElement = useRoutes(routes)
  return (
    <Layout>
      <SideBar />
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Header />
        {routeElement}
        <Layout.Footer style={{ textAlign: 'center' }}>
          Fun with Github ©2021 Created by 200lab
        </Layout.Footer>
      </Layout>
    </Layout>
  )
}
export default App
