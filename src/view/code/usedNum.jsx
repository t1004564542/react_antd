import React from 'react';
import { Modal, Button, Form, Input} from 'antd'

class UsedNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }
  cancelHandle = () =>  {
    this.props.closeHandle()
  }
  okHandle = () => {
    this.props.closeHandle()
  }
  render() {
    return (
      <div>
        <Modal
          title='修改可用次数'
          visible={this.props.visible}
          keyboard={false}
          maskClosable={false}
          onCancel={this.cancelHandle}
          onOk={this.okHandle}
        >
          <Form name='usedFrom'>
            <Form.Item label='可用次数' name='usedNum'>
              <Input />
            </Form.Item>
          </Form>
          <span style={{ paddingLeft: '70px' }}>当前已用次数： { 2 }</span>
        </Modal>
      </div>
    );
  }
}

export default UsedNum;
