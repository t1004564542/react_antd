import React, {useState, useEffect} from 'react';
import store from '../../../store/index'
import style from '../home.module.scss'
import { loginOut } from '../../../api/login'
import { Avatar, Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons'

const AvatarComp = (props) => {
  const loginOutHandle = () => {
    loginOut().then(result => {
      store.dispatch({
        key: 'loginOut'
      })
    })
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <span>修改密码</span>
      </Menu.Item>
      <Menu.Item>
        <span onClick={ loginOutHandle }>退出登录</span>
      </Menu.Item>
    </Menu>
  )
  return (
    <div className={ style.avatar }>
      <Avatar size={ 24 }>A</Avatar>
      <Dropdown overlay={ menu } trigger={['click']}>
        <span className={ style.userName }>
          admin <DownOutlined />
        </span>
      </Dropdown>
    </div>
  );
};

export default AvatarComp;
