import React from 'react'
import { Menu, Divider } from 'antd';
import {
    ProjectOutlined,
    InboxOutlined,
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

const rootSubmenuKeys = ['sub1', 'sub2'];
const Memuitem = () => {
    const _menu = [
        { id: '1', name: '项目管理', path: '/project', per: 100, icon: ProjectOutlined },
        { id: '2', name: '配置包下载', path: '/package', per: 200, icon: InboxOutlined },
        { id: '3', name: '激活码管理', path: '/code', per: 220, icon: MailOutlined },
        {
            id: '4', name: '数据管理', per: 300, icon: CalendarOutlined, children: [
                { id: '41', name: '终端统计', path: '/statisticsTerminal', per: 310 },
                { id: '42', name: '项目统计', path: '/statisticsProject', per: 320 },
            ]
        },
        { id: '5', name: '日志管理', path: '/logManager', per: 400, icon: AppstoreOutlined },
        {
            id: '6', name: '系统管理', per: 800, icon: SettingOutlined, children: [
                { id: '61', name: '用户管理', path: '/userManager', per: 810 },
                { id: '62', name: '角色管理', path: '/roleManager', per: 820 },
                { id: '63', name: '应用字典', path: '/aDict', per: 830 },
                { id: '67', name: '预置应用', path: '/preset', per: 830 },
                { id: '64', name: '终端字典', path: '/tDict', per: 840 },
                { id: '68', name: '终端白名单', path: '/whiteList', per: 850 },
                { id: '65', name: '基础配置', path: '/basics', per: 850 },
                { id: '66', name: '运维工具', path: '/tool', per: 850 },
            ]
        },
    ];
    return _menu.map(item => {
        if (res.children) {

        } else {
            return (
                <Menu.Item key={item.id} icon={<item.icon />}>
                    {item.name}
                </Menu.Item>
            )
        }
    })
}

const Aside = () => {
    // const [openKeys, setOpenKeys] = React.useState(['sub1']);

    // const onOpenChange = keys => {
    //     const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    //     if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //         setOpenKeys(keys);
    //     } else {
    //         setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    //     }
    // }
    return (
        <Menu
            style={{ width: 200, height: '100vh' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            // onOpenChange={onOpenChange}
            mode='inline'
            theme="dark"
        >
            <Memuitem />
            <Menu.Item key="1" icon={<MailOutlined />}>
                Navigation One
            </Menu.Item>
            <Menu.Item key="2" icon={<CalendarOutlined />}>
                Navigation Two
            </Menu.Item>
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
                <SubMenu key="sub1-2" title="Submenu">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
            </SubMenu>
            <Menu.Item key="link" icon={<LinkOutlined />}>
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Ant Design
                </a>
            </Menu.Item>
        </Menu>
    )
}
export default Aside

