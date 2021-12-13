import { List, Avatar, Card, Space, Select, Tag } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

const listData = new Array(23).fill('').map((_, i) => ({
  href: 'https://ant.design',
  title: `Add native node esm module exports ${i}`,
  avatar: 'https://joeschmoe.io/api/v1/random',
}))

const options = [
  { value: 'gold' },
  { value: 'lime' },
  { value: 'green' },
  { value: 'cyan' },
]

function tagRender(props: any) {
  const { label, value, closable, onClose } = props
  const onPreventMouseDown = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
  }
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  )
}

const PullRequestsList = () => (
  <Space size='middle' direction='vertical'>
    <Space>
      <Select
        mode='multiple'
        showArrow
        tagRender={tagRender}
        defaultValue={['gold', 'cyan']}
        style={{ width: '100%' }}
        options={options}
      />
    </Space>
    <List
      grid={{ column: 5, gutter: 16 }}
      size='large'
      pagination={{
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 15,
      }}
      dataSource={listData}
      renderItem={(item) => (
        <List.Item key={item.title}>
          <Card
            cover={
              <img
                alt='example'
                src='https://picsum.photos/400/300'
              />
            }
            actions={[
              <CheckOutlined key='setting' />,
              <CloseOutlined key='edit' />,
            ]}
          >
            <Card.Meta
              avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
              title='Card title'
              description='This is the description'
            />
          </Card>
        </List.Item>
      )}
    />
  </Space>
)

export default PullRequestsList
