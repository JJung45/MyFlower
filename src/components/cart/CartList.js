import React, { Component } from 'react';
import {FlowerConsumer} from '../../context';
import Title from '../Title';
import Cart from './Cart';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';

class CartList extends Component {
    render() {
        return (
            <section>
                <FlowerConsumer>
                    {value=>{
                        const {cart} = value;
                        if(cart.length>0){
                            return (
                                <React.Fragment>
                                    <div className="py-5">
                                    <div className="container text-center">
                                            <Title title="In cart" className="py-5"/>
                                            <div className="row">
                                                <Cart value={value} />
                                            </div>
                                            <div className="row mt-3">
                                                <CartTotals value={value}/>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        }else{
                            return (
                                <EmptyCart />
                            )
                        }
                    }}
                </FlowerConsumer>
            </section>
        );
    }
}

export default CartList;