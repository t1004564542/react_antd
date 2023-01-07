import React from 'react';
import { Modal, Button } from 'antd'
import log from "tailwindcss/lib/util/log";

class LogDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      detail: {}
    }
    this.cancelHandle = this.cancelHandle.bind(this)
    this.okHandle = this.okHandle.bind(this)
  }

  componentDidMount() {

  }
  componentDidUpdate() {

  }

  componentWillUnmount() {

  }
  cancelHandle() {
    this.props.closeHandle()
  }
  okHandle() {
    this.props.okHandle()
  }

  render() {
    const detail = this.props.detail.optContent ? JSON.parse(this.props.detail.optContent) : {}
    return (
      <div>
        <Modal
          title='日志详情'
          visible={this.props.visible}
          keyboard={false}
          maskClosable={false}
          onCancel={this.cancelHandle}
          onOk={this.okHandle}
        >
          <pre style={{ maxHeight: '500px', overflowY: 'auto'}}>{ JSON.stringify(detail) }</pre>
        </Modal>
      </div>
    );
  }
}

export default LogDetail;
