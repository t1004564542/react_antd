import React from 'react'

class Demo1 extends React.Component{
    // timerID: number;
    constructor(props) {
        super(props);
        this.state = {
          content: '组件2'
        }
        this.myRef = React.createRef()
    }
    componentDidMount() {
        console.log(this.myRef.current)
    }
    btnClick() {
        console.log(this.myRef)
    }
    render() {
        return( 
            <div>
                <input type='text' ref={ this.myRef } />
                <button onClick={ () => this.btnClick()}>{ this.state.content }</button>
            </div>
        ) 
    }
}

export default Demo1