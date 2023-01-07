import React from 'react'
import { timeFormat } from '../../../utils/method'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: timeFormat(new Date()),
            timer: null
        }
    }
    componentDidMount() {
        this.setState({
            timer: setInterval(() => {
                this.setState({ time: timeFormat(new Date()) })
            }, 1000)
        })
    }
    componentWillUnmount() {
        clearInterval(this.state.timer)
    }
    render() {
        return (
            <span style={{ lineHeight: '50px', verticalAlign: 'middle' }}>{this.state.time}</span>
        )
    }
}
export default Clock
