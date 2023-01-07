import React from 'react'
import Crumbs from './crumbs'
import Clock from '../../common/clock/clock'
import AvatarComp from './avatar'
import { Divider } from 'antd'

class Head extends React.Component {
  render() {
    return (
      <div>
        <Crumbs />
        <div style={{ float: 'right' }}>
          <Clock />
          <Divider type="vertical" style={{ background: '#333', verticalAlign : "middle", height : 16, margin: '0 16px' }}/>
          <AvatarComp />
        </div>
      </div>
    )
  }
}

export default Head
