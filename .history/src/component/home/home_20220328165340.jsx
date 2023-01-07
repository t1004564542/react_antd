import React from "react";
import style from "../../styles/home.module.scss"
import Head from './header/head'
import Aside from './sider/aside'
import { Layout } from "antd";
const { Header, Sider, Content} = Layout


class Home extends React.Component{
    // timerID: number;
    constructor(props) {
        super(props);
        this.state = {
          content: '组件2'
        }
        this.myRef = React.createRef()
    }
    componentDidMount() {
        console.log(this.myRef.current)
    }
    btnClick() {
        console.log(this.myRef)
    }
    render() {
        return( 
           <Layout style={{ display: 'flex'}}>
                <Sider className={style.sider}>Aside</Sider>
                <Layout className={ style.layout }>
                    <Header className={ style.header }>
                        <Head />
                    </Header>
                    <Content className={ style.content }>中心</Content>
                </Layout>
           </Layout>
        ) 
    }
}

export default Home