import React from 'react'
import { Breadcrumb } from 'antd'
import style from '../../../styles/home.module.scss'

function Crumb() {
    return (
        <Breadcrumb className={style.crumb}>
            <Breadcrumb.Item>项目管理</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">需求管理</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>新建需求</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default Crumb