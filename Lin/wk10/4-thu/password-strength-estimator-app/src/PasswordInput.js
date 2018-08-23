import React from 'react';
import estimateStrength from './estimateStrength';

export default class PasswordInput extends React.Component {
  constructor() {
    super();
    this.showMsg = this.showMsg.bind(this);
    this.state = {
      msg: '',
    }
  }

  showMsg(event) {
    this.setState({
      msg: estimateStrength(event.target.value)
    });
  }


  render() {
    const { msg } = this.state;
    // console.log(msg)
    let outPut;
    if (msg.score === 1 || msg.score === 2) {
      outPut = 'Password too weak!';
    }
    else if (msg.score === 3 || msg.score === 4) {
      outPut = 'Make more secure!';
    }
    else if (msg.score === 5) {
      outPut = 'Strong Password!';
    }
    else if(msg.score === 0){
      outPut = '';
    }
    return <div>
      <input type="text" onChange={this.showMsg} />
      <p>{outPut}</p>
    </div>
  }
}