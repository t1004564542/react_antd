import React from 'react'
import HookDemo from './hook'

const Demo = (props)=>{
    console.log(props);
    const content = '组件1';
    return ( 
        <div>
            <HookDemo></HookDemo>
            <span>{ content }</span>
        </div>
    );
};


export default Demo;