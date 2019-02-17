import React from 'react';
import CartItem from './CartItem';

export default function Cart({value}) {
    const {cart} = value;
        return (
            <React.Fragment>
                {cart.map(item=>{
                    return <CartItem key={item.id} item={item} value={value}/>
                })}
            </React.Fragment>
        )
}