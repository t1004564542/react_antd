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

cosnt le = { "projectId": 1, "controlMode": 0, "note": "ceshi1", "activeNum": 12, "workUserName": "工作系统", "workApns": [], "workPeripherals": [{ "code": "wifi", "mdmctl": 1, "opt": 1 }, { "code": "bluetooth", "mdmctl": 1, "opt": 0 }, { "code": "extra_storage", "mdmctl": 1, "opt": 1 }, { "code": "usb", "mdmctl": 1, "opt": 1 }, { "code": "otg", "mdmctl": 1, "opt": 1 }, { "code": "apn", "mdmctl": 1, "opt": 2 }, { "code": "nfc", "mdmctl": 1, "opt": 0 }, { "code": "screen_capture", "mdmctl": 1, "opt": 0 }, { "code": "camera", "mdmctl": 1, "opt": 0 }, { "code": "data_connectivity", "mdmctl": 1, "opt": 0 }, { "code": "internet", "mdmctl": 1, "opt": 0 }], "bluetoothWhitelist": "", "deskWallpaperOpt": 0, "workLockWallpapers": [], "workDeskWallpapers": [], "lockWallpaperOpt": 0, "workAppInstallSrcs": [], "networkWhile": { "whiteListDomain": [], "whiteListIp": [] }, "workPresetApps": [], "workUninstallApps": [{ "id": 65, "name": "网易新闻", "packageName": "com.netease.newsreader.activity", "defaultFlag": 0 }, { "id": 64, "name": "哔哩哔哩", "packageName": "tv.danmaku.bili", "defaultFlag": 0 }, { "id": 63, "name": "新浪新闻", "packageName": "com.sina.news", "defaultFlag": 0 }, { "id": 62, "name": "手机淘宝", "packageName": "com.taobao.taobao", "defaultFlag": 0 }, { "id": 61, "name": "天眼查", "packageName": "com.tianyancha.skyeye", "defaultFlag": 0 }, { "id": 60, "name": "搜狐新闻", "packageName": "com.sohu.newsclient", "defaultFlag": 0 }, { "id": 59, "name": "京东", "packageName": "com.jingdong.app.mall", "defaultFlag": 0 }, { "id": 58, "name": "腾讯新闻", "packageName": "com.tencent.news", "defaultFlag": 0 }, { "id": 57, "name": "去哪儿旅行", "packageName": "com.Qunar", "defaultFlag": 0 }, { "id": 55, "name": "UC浏览器", "packageName": "com.UCMobile", "defaultFlag": 0 }, { "id": 54, "name": "大众点评", "packageName": "com.dianping.v1", "defaultFlag": 0 }, { "id": 53, "name": "唯品会", "packageName": "com.achievo.vipshop", "defaultFlag": 0 }, { "id": 52, "name": "WPS office", "packageName": "cn.wps.moffice_eng", "defaultFlag": 0 }, { "id": 51, "name": "支付宝", "packageName": "com.eg.android.AlipayGphone", "defaultFlag": 0 }, { "id": 50, "name": "快手", "packageName": "com.smile.gifmaker", "defaultFlag": 0 }, { "id": 49, "name": "微博", "packageName": "com.sina.weibo", "defaultFlag": 0 }, { "id": 48, "name": "携程旅行", "packageName": "ctrip.android.view", "defaultFlag": 0 }, { "id": 47, "name": "高德地图", "packageName": "com.autonavi.minimap", "defaultFlag": 0 }, { "id": 46, "name": "知乎", "packageName": "com.zhihu.android", "defaultFlag": 0 }, { "id": 45, "name": "喜马拉雅", "packageName": "com.ximalaya.ting.android", "defaultFlag": 0 }, { "id": 44, "name": "抖音", "packageName": "com.ss.android.ugc.aweme", "defaultFlag": 0 }, { "id": 43, "name": "今日头条", "packageName": "com.ss.android.article.news", "defaultFlag": 0 }, { "id": 42, "name": "拼多多", "packageName": "com.xunmeng.pinduoduo", "defaultFlag": 0 }, { "id": 41, "name": "QQ浏览器", "packageName": "com.tencent.mtt", "defaultFlag": 0 }, { "id": 40, "name": "58同城", "packageName": "com.wuba", "defaultFlag": 0 }, { "id": 38, "name": "百度", "packageName": "com.baidu.searchbox", "defaultFlag": 0 }, { "id": 37, "name": "淘宝特价版", "packageName": "com.taobao.litetao", "defaultFlag": 0 }, { "id": 36, "name": "小红书", "packageName": "com.xingin.xhs", "defaultFlag": 0 }, { "id": 35, "name": "饿了么 ", "packageName": "me.ele", "defaultFlag": 0 }, { "id": 20, "name": "指南针", "packageName": "com.hihonor.compass", "defaultFlag": 0 }, { "id": 19, "name": "教育中心", "packageName": "com.huawei.educenter ", "defaultFlag": 0 }, { "id": 18, "name": "精品推荐", "packageName": "com.huawei.hifolder ", "defaultFlag": 0 }, { "id": 17, "name": "荣耀商城", "packageName": "com.hihonor.vmall", "defaultFlag": 0 }, { "id": 16, "name": "玩机技巧", "packageName": "com.hihonor.tips ", "defaultFlag": 0 }, { "id": 15, "name": "荣耀亲选", "packageName": "cn.honor.qinxuan", "defaultFlag": 0 }, { "id": 14, "name": "镜子", "packageName": "com.hihonor.mirror ", "defaultFlag": 0 }, { "id": 13, "name": "游戏中心 ", "packageName": "com.huawei.gamebox", "defaultFlag": 0 }, { "id": 12, "name": "运动健康", "packageName": "com.huawei.health ", "defaultFlag": 0 }, { "id": 11, "name": "生活服务", "packageName": "com.huawei.lives", "defaultFlag": 0 }, { "id": 10, "name": "电子邮件", "packageName": "com.hihonor.email ", "defaultFlag": 0 }, { "id": 9, "name": "换机克隆", "packageName": "com.hihonor.android.clone ", "defaultFlag": 0 }, { "id": 8, "name": "录音机", "packageName": "com.hihonor.soundrecorder ", "defaultFlag": 0 }, { "id": 7, "name": "荣耀俱乐部", "packageName": "com.honor.club", "defaultFlag": 0 }, { "id": 6, "name": "天气", "packageName": "com.hihonor.android.totemweather", "defaultFlag": 0 }], "workHideApps": [{ "id": 26, "name": "云空间", "packageName": "com.huawei.hidisk", "defaultFlag": 0 }, { "id": 24, "name": "我的荣耀", "packageName": "com.hihonor.phoneservice ", "defaultFlag": 0 }, { "id": 23, "name": "阅读", "packageName": "com.huawei.hwireader ", "defaultFlag": 0 }, { "id": 22, "name": "华为钱包", "packageName": "com.huawei.wallet ", "defaultFlag": 0 }, { "id": 21, "name": "应用市场", "packageName": "com.huawei.appmarket ", "defaultFlag": 0 }], "watermark": { "content": "", "fontSize": 16, "angle": 0, "fontColor": "#888888", "shadowColor": "#333333", "status": 1 }, "lifeUserName": "生活系统", "lifeGmApps": [{ "gmAppId": 1, "keepAlive": 1, "name": "安通+", "packageName": "com.xdja.actoma", "preventUninstall": 1, "uninstall": 1 }, { "gmAppId": 2, "keepAlive": 1, "name": "芯片管家", "packageName": "com.xdja.safekeyservice", "preventUninstall": 1, "uninstall": 1 }, { "gmAppId": 3, "keepAlive": 1, "name": "安全邮件", "packageName": "com.xdja.HDSafeEMailClient", "preventUninstall": 1, "uninstall": 1 }, { "gmAppId": 4, "keepAlive": 1, "name": "安全拨号", "packageName": "com.xdja.dialer", "preventUninstall": 1, "uninstall": 1 }], "lifePresetApps": [], "lifeUninstallApps": [{ "id": 65, "name": "网易新闻", "packageName": "com.netease.newsreader.activity", "defaultFlag": 0 }, { "id": 64, "name": "哔哩哔哩", "packageName": "tv.danmaku.bili", "defaultFlag": 0 }, { "id": 63, "name": "新浪新闻", "packageName": "com.sina.news", "defaultFlag": 0 }, { "id": 62, "name": "手机淘宝", "packageName": "com.taobao.taobao", "defaultFlag": 0 }, { "id": 61, "name": "天眼查", "packageName": "com.tianyancha.skyeye", "defaultFlag": 0 }, { "id": 60, "name": "搜狐新闻", "packageName": "com.sohu.newsclient", "defaultFlag": 0 }, { "id": 59, "name": "京东", "packageName": "com.jingdong.app.mall", "defaultFlag": 0 }, { "id": 58, "name": "腾讯新闻", "packageName": "com.tencent.news", "defaultFlag": 0 }, { "id": 57, "name": "去哪儿旅行", "packageName": "com.Qunar", "defaultFlag": 0 }, { "id": 55, "name": "UC浏览器", "packageName": "com.UCMobile", "defaultFlag": 0 }, { "id": 54, "name": "大众点评", "packageName": "com.dianping.v1", "defaultFlag": 0 }, { "id": 53, "name": "唯品会", "packageName": "com.achievo.vipshop", "defaultFlag": 0 }, { "id": 52, "name": "WPS office", "packageName": "cn.wps.moffice_eng", "defaultFlag": 0 }, { "id": 51, "name": "支付宝", "packageName": "com.eg.android.AlipayGphone", "defaultFlag": 0 }, { "id": 50, "name": "快手", "packageName": "com.smile.gifmaker", "defaultFlag": 0 }, { "id": 49, "name": "微博", "packageName": "com.sina.weibo", "defaultFlag": 0 }, { "id": 48, "name": "携程旅行", "packageName": "ctrip.android.view", "defaultFlag": 0 }, { "id": 47, "name": "高德地图", "packageName": "com.autonavi.minimap", "defaultFlag": 0 }, { "id": 46, "name": "知乎", "packageName": "com.zhihu.android", "defaultFlag": 0 }, { "id": 45, "name": "喜马拉雅", "packageName": "com.ximalaya.ting.android", "defaultFlag": 0 }, { "id": 44, "name": "抖音", "packageName": "com.ss.android.ugc.aweme", "defaultFlag": 0 }, { "id": 43, "name": "今日头条", "packageName": "com.ss.android.article.news", "defaultFlag": 0 }, { "id": 42, "name": "拼多多", "packageName": "com.xunmeng.pinduoduo", "defaultFlag": 0 }, { "id": 41, "name": "QQ浏览器", "packageName": "com.tencent.mtt", "defaultFlag": 0 }, { "id": 40, "name": "58同城", "packageName": "com.wuba", "defaultFlag": 0 }, { "id": 38, "name": "百度", "packageName": "com.baidu.searchbox", "defaultFlag": 0 }, { "id": 37, "name": "淘宝特价版", "packageName": "com.taobao.litetao", "defaultFlag": 0 }, { "id": 36, "name": "小红书", "packageName": "com.xingin.xhs", "defaultFlag": 0 }, { "id": 35, "name": "饿了么 ", "packageName": "me.ele", "defaultFlag": 0 }], "lifeHideApps": [{ "id": 26, "name": "云空间", "packageName": "com.huawei.hidisk", "defaultFlag": 0 }], "trial": 1, "softUpdateInfo": "update.pyis.safecenter.com:443", "noReset": 1, "updateServer": 1, "switchSim2Data": 0, "nfcSwitchDomain": 0, "handSwitchDomain": 0, "rebootForceWorkDomain": 1, "stopSubUser": 1, "switchDataCard": 1, "lifeDeveloperMode": 1, "lifeUsbDebugMode": 1, "bootanimation": {}, "shutdownanimation": {} }

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
        if (item.children) {
            return (
                // <Menu.Item key={item.id} icon={<item.icon />}>
                //     {item.name}
                // </Menu.Item>
                <SubMenu key={item.id} icon={<item.icon />} title={item.name}>
                    {item.children.map(res => {
                        return (
                            <Menu.Item key={res.id}>{res.name}</Menu.Item>
                        )
                    })}
                </SubMenu>
            )
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
            {/* <Menu.Item key="1" icon={<MailOutlined />}>
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
            </Menu.Item> */}
        </Menu>
    )
}
export default Aside

