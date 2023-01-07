import React, {useState, useEffect, useRef} from 'react';
import store from '../../store/index'
import Code from '../common/code/code'
import { useNavigate } from 'react-router-dom'
import { Input, Button, message} from 'antd'
import { login, getEncryptedString } from '../../api/login'


const Login = (props) => {
  const [ code, setChange] = useState('')
  const [ loginData, saveLoginData ] = useState({})
  const codeRef = useRef()
  let navigate = useNavigate()
  /* 登录 */
  const loginHandle = () => {
    login(aesEncrypted()).then(res => {
      if(res.code === 200) {
        store.dispatch({
          type: 'saveUserInfo',
          value: res.data
        })
        navigate('/home')
      } else {
        message.error(res.message)
      }
    }).finally(() => {
      navigate('/home')
    });
  }
  /* 数据加密处理 */
  const aesEncrypted = () => {
    return {
      timestamp: loginData.timestamp,
      checkKey: codeRef.current.state.code,
      captcha: code,
      password: 'syms@xdja.com',
      account: 'admin'
    };
  }
  /* 输入框变化 */
  const inputChange = (e) => {
    setChange(e.target.value)
  }
  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState())
    })
  })
  useEffect(() => {
    store.dispatch({
      type: 'changeName',
      value: '121'
    })
    getEncryptedString().then(result => {
      saveLoginData({ ...result.data})
    });
  }, [])
  return (
    <div style={{ background: 'red' }}>
      <Code ref={ codeRef }/>
      <Input placeholder={'验证码'} onChange={inputChange} value={code}/>
      <Button onClick={loginHandle}>登录</Button>
    </div>
  );
};

export default Login;
