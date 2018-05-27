import React from 'react';

const Counter = ({value, increment, decrement}) => {
    return (
        <div style={{margin:'100px', textAlign:'center'}}>
            <h2> Counter</h2>
            <span style={{fontSize:'50px'}}> {value}</span>
            <div style={{textAlign:'center'}}>
                <button className={'green'} onClick={increment}> + </button>
                &nbsp;
                <button className={'red'}   onClick={decrement}> - </button>
            </div>

        </div>
    )}

export default Counter;