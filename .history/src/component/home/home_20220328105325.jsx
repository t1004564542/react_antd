import React from "react";
import style from "../../styles/home.module.css"
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
        //    <Layout>
        //         <Sider className={ style.sider }>导航</Sider>
        //         <Layout>
        //             <Header className={ style.header }>头</Header>
        //             <Content className={ style.content }>中心</Content>
        //         </Layout>
        //    </Layout>
        <Layout>
      
      <Layout>
      <Sider>Sider</Sider>
        <Header>Header</Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
        ) 
    }
}

export default Home