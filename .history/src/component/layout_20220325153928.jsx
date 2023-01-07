import React from 'react'
import RouteConfig from '../routes'
import { useNavigate } from 'react-router-dom'
function Layout(props) {
    function Tab() {
        // let  navigate = useNavigate()
        return (
            <div>
                {/* <ul>
                    <li className="menus" onClick={ () => navigate('/demo') }>菜单1</li>
                    <li className="menus" onClick={ () => navigate('/demo1') }>菜单2</li>
                    <li className="menus" onClick={ () => navigate('/demo2') }>菜单3</li>
                </ul> */}
                 caidan
                <RouteConfig />
            </div>    
        )
    }
    return (
        <Tab></Tab>
    )
}
export default Layout