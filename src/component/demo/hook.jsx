import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        console.log('hook的生命周期')
    })
    return (
        <div>
            <p>count{count}</p>
            <button onClick={ () => setCount(count + 1)}>count增加</button>
            <button onClick= {() => setCount(count -1)}>count减少</button>
        </div>
    )
}
export default Example
