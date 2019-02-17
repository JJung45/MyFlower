import React from 'react';
import {Link} from 'react-router-dom';

export default function EmptyCart(){
    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <h1>Your cart is currently empty. <br /><br /><Link to="/">Please go back to main page.</Link></h1>
                </div>
            </div>
        </div>
    )
}