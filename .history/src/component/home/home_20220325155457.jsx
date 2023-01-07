import React from "react";
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
           <Layout>
                <Sider>导航</Sider>
                <Layout>
                    <Header>头</Header>
                    <Content>中心</Content>
                </Layout>
           </Layout>
        ) 
    }
}

export default Home