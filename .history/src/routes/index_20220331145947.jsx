import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Log from '../view/log/Log'

export default class R extends React.Component{
    render() {
        return (
            <Routes>
                <Route path="/log" exact element={<Log /> } />
                <Route path="/demo1" exact element = { <Demo2 /> }/>
                <Route path="/demo2" exact element={ <Demo3 /> } />
                <Route path="/*" element={ <Navigate path="/demo" /> } />
            </Routes>
        );
    }
}