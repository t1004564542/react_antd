import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Log from '../view/log/Log'
import Home from '../component/home/home'
import Login from '../component/login/login'
import Code from '../view/code/code'
import Package from "../view/package/package";

 function R(props){
   return (
     <Routes>
       <Route path="/login" exact element={<Login />} />
       <Route path='/home/*' element={
         <Home route={
           <Routes>
             <Route path="/logManager" exact element={<Log />} />
             <Route path="/code" exact element={<Code />} />
             <Route path="/package" exact element={<Package />} />
           </Routes>
         }/>
       }/>
       <Route path='/*' element={ <Navigate to="/login"  replace={true}/>} />
       <Route path='/home' element={ <Navigate to="/home/logManager"  replace={true}/>} />
     </Routes>
   )
}

export default R
