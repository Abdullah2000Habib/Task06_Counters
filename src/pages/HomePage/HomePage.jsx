import React, { Component } from 'react';
import Counter from '../../components/counter/counter';
import "./style.css";
const counterData = [
    {id:1,count:0,step:2},
    {id:2,count:0,step:4},
    {id:3,count:0,step:6},
    {id:4,count:0,step:8},
]

class HomePage extends Component {
    state ={
        counterData,
        total:0,
    }

totalHandler = ()=>{
    this.setState((prev)=>{
        return {...prev,total:prev.counterData.reduce((acc,current)=>acc+=current.count ,0)}
    })
}
incrementHandler = (id)=>{
    this.setState((prev)=>{
        return {...prev , counterData:prev.counterData.map((item)=>{
            return item.id === id ? {...item , count :item.count + item.step} :item
        })}
})
    this.totalHandler();
}
decHandler = (id)=>{
    this.setState((prev)=>{
        return {...prev , counterData:prev.counterData.map((item)=>{
            return item.id === id && item.count >= item.step? {...item , count :item.count - item.step} :item
        })}
})
    this.totalHandler();    

}
    render() {
        return (
            <>
                <section className='counterSection'>
                    <div className='counters'>
                        {this.state.counterData.map((item)=>{
                            return(<Counter key={item.id} item={item} inc={this.incrementHandler} dec={this.decHandler}/>)
                        })}
                    </div>
                    <span className='totalValue'>Total amount: <span className='value'>{this.state.total}</span></span>
                </section>
            </>
        );
    }
}

export default HomePage;
