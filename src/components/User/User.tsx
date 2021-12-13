import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge, Typography } from 'antd'

const { Link, Text } = Typography

const User = () => (
  <>
    <Link href='https://github.com/hweeTan' target='_blank'>
      <Text strong>Huy Tran</Text>
      <Badge count={5}>
        <Avatar style={{ margin: 0, marginLeft: 16 }} shape='square' icon={<UserOutlined />} />
      </Badge>
    </Link>
  </>
)

export default User
