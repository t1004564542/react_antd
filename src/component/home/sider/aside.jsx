import React from 'react'
import { Menu, Divider } from 'antd';
import {
    ProjectOutlined,
    InboxOutlined,
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
const { SubMenu } = Menu;

const Memuitem = () => {
    let  navigate = useNavigate()
    const _menu = [
        { id: 1, name: '项目管理', path: '/home/project', per: 100, icon: ProjectOutlined },
        { id: 2, name: '配置包下载', path: '/home/package', per: 200, icon: InboxOutlined },
        { id: 3, name: '激活码管理', path: '/home/code', per: 220, icon: MailOutlined },
        {
            id: 4, name: '数据管理', per: 300, icon: CalendarOutlined, children: [
                { id: 41, name: '终端统计', path: '/statisticsTerminal', per: 310 },
                { id: 42, name: '项目统计', path: '/statisticsProject', per: 320 },
            ]
        },
        { id: 5, name: '日志管理', path: '/home/logManager', per: 400, icon: AppstoreOutlined },
        {
            id: 6, name: '系统管理', per: 800, icon: SettingOutlined, children: [
                { id: 61, name: '用户管理', path: '/userManager', per: 810 },
                { id: 62, name: '角色管理', path: '/roleManager', per: 820 },
                { id: 63, name: '应用字典', path: '/aDict', per: 830 },
                { id: 67, name: '预置应用', path: '/preset', per: 830 },
                { id: 64, name: '终端字典', path: '/tDict', per: 840 },
                { id: 68, name: '终端白名单', path: '/whiteList', per: 850 },
                { id: 65, name: '基础配置', path: '/basics', per: 850 },
                { id: 66, name: '运维工具', path: '/tool', per: 850 },
            ]
        },
    ];
    return _menu.map(item => {
        if (item.children) {
            return (
                <SubMenu key={item.id} icon={<item.icon />} title={item.name}>
                    {item.children.map(res => {
                        return (
                            <Menu.Item key={res.id} onClick={() => navigate(item.path)}>{res.name}</Menu.Item>
                        )
                    })}
                </SubMenu>
            )
        } else {
            return (
                <Menu.Item key={item.id} icon={<item.icon />} onClick={() => navigate(item.path)}>
                    {item.name}
                </Menu.Item>
            )
        }
    })
}

const Aside = () => {
    return (
        <Menu
            style={{ width: 220, height: '100vh', overflowY: "auto" }}
            defaultSelectedKeys={[1]}
            defaultOpenKeys={[4]}
            mode='inline'
            theme="dark"
        >
            { Memuitem() }
        </Menu>
    )
}
export default Aside

