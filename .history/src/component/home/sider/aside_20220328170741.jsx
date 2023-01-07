import React from 'react'
import { Menu, Divider } from 'antd';
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

const rootSubmenuKeys = ['sub1', 'sub2'];

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
            style={{ width: 200, height '100vh' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            // onOpenChange={onOpenChange}
            mode='inline'
            theme="dark"
        >
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

