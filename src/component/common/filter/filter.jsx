import React from 'react';
import style from './style.module.scss'

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className={style.filterContent}>
                <div className={style.filterLeft}>
                    { this.props.filterLeft }
                </div>
                <div className={style.filterRight}>
                    { this.props.filterRight }
                </div>
            </div>
        );
    }
}

export default Filter;
