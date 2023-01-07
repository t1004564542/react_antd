import React from 'react'
import Crumbs from './crumbs'
import Clock from '../../common/clock'

class Head extends React.Component {
    render() {
        return (
            <div>
                <Crumbs />
                <Re>
                    <Clock />
                </Re>
            </div>
        )
    }
}

export default Head