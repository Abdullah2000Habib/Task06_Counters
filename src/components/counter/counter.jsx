import React, { Component } from 'react';
import "./style.css";
class Counter extends Component {
render() {
    return (
        <>
            <div className='counterWrapper'>
                <span className='counterValue'>{this.props.item.count}</span>
                <button className='counterDec'onClick={(e)=>{this.props.dec(this.props.item.id)}}>-</button>
                <button className='counterInc' onClick={(e)=>{this.props.inc(this.props.item.id)}}>+</button>
            </div>
        </>
    );
}
}

export default Counter;
