import React from 'react'
import { Breadcrumb } from 'antd'
import style from '../../../styles/home.module.css'

function Crumb() {
    return (
        <Breadcrumb className={ style.crumb }>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default Crumb