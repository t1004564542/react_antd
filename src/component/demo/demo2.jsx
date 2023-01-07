import React from 'react'

export default class Demo3 extends React.Component{
    // timerID: number;
    constructor(props) {
        super(props);
        this.state = {
          content: '组件3'
        }
    }
    render() {
        return (
            <span>{ this.state.content }</span>
        );
    }
}