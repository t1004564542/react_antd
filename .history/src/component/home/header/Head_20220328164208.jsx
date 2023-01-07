import React from 'react'
import Crumbs from './crumbs'
import Clock from '../../common/clock'

class Head extends React.Component {
    render() {
        return (
            <div>
                <Crumbs />
                <React.f>
                    <Clock />
                </React.f>
            </div>
        )
    }
}

export default Head