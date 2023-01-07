import React from 'react'
import {timeFormat} from '../../utils/method'

console.log(timeFormat(new Date()))

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          time: timeFormat(new Date())
        }
    }
    render() {
        return (
            <span>{ this.state.time }</span>    
        )
    }
}
export default Clock