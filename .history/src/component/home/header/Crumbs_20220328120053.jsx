import React from 'react'
import { Breadcrumb } from 'antd';
import { render } from 'react-dom'
console.log(Breadcrumb)

// class Crumbs extends React.Component{
//     render() {
//         return (
//             <Breadcrumb>
//                 <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item>
//                     <a href="">Application Center</a>
//                 </Breadcrumb.Item>
//                 <Breadcrumb.Item>
//                     <a href="">Application List</a>
//                 </Breadcrumb.Item>
//                 <Breadcrumb.Item>An Application</Breadcrumb.Item>
//             </Breadcrumb>
//         )
//     }
// }

function Crumb() {
    return (
        <Breadcrumb></Breadcrumb>
    )
}
export default Crumb