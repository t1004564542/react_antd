import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Log from '../view/'
import Demo from '../component/demo/demo'
import Demo2 from '../component/demo/demo1.jsx'
import Demo3 from '../component/demo/demo2.jsx'

export default class R extends React.Component{
    render() {
        return (
            <Routes>
                <Route path="/log" exact element = { <Demo /> } />
                <Route path="/demo1" exact element = { <Demo2 /> }/>
                <Route path="/demo2" exact element={ <Demo3 /> } />
                <Route path="/*" element={ <Navigate path="/demo" /> } />
            </Routes>
        );
    }
}