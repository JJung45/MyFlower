import React, { Component } from 'react';
import {FlowerConsumer} from '../../context';
import Title from '../Title';
import EmptyCart from '../cart/EmptyCart';
import WrappingItem from './WrappingItem';
import WrappingFourth from './WrappingFourth';
import WrappingTotal from './WrappingTotal';

class Wrapping extends Component {
    render() {
        return (
            <FlowerConsumer>
                {value=>{
                    const {cart,options} = value;
                    if(cart.length>0){
                        return (
                            <div className="py-5">
                                <div className="container">
                                    <Title title="select a design" />
                                    <div className="row">
                                        {options.map(option=>{
                                            return <WrappingItem key={option.id} option={option} value={value}/>
                                        })}
                                       <WrappingFourth value={value} />
                                    </div>
                                    <div className="row mt-3">
                                        <WrappingTotal value={value}/>
                                    </div>
                                </div>
                            </div>
                        )
                    }else{
                        return (
                            <EmptyCart />
                        )
                    }
                }}
            </FlowerConsumer>
        );
    }
}

export default Wrapping;