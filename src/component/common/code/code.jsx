import React from 'react';
import { randomImage } from '../../../api/login'

class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      code: ''
    }
  }

  componentDidMount() {
    this.getCode()
  }

  componentWillUnmount() {

  }
  getCode() {
    let code = '';
    for(let i = 0; i < 4; i++) {
      code += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[this.random(0,62)];
    }
    this.setState({code: code})
    randomImage({"checkKey": code}).then(result => {
      this.setState({ src: result.data.captcha})
    });
  }
  random (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {
    return (
      <div>
        <img src={ this.state.src } alt=""/>
      </div>
    );
  }
}

export default Code;

