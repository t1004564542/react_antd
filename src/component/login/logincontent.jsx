import React, {useState, useEffect} from 'react';
import { Row, Col } from 'antd'
import './login.modules.scss'

const LoginContent = (props) => {
  return (
    <div>
      <div className="login-container">
        <Row style="position: relative">
          <Col span={ 12 } className="login-container-left" />
          <Col span={ 12 } className="login-container-right" />
        </Row>
        <div className="main-content">
          <div className="deco-part">
            <div style="position: relative">
              <img className="deco-img" src="../../assets/imgs/back.png" alt="" />
              <div className="form-wrapper">
                { props.children }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
