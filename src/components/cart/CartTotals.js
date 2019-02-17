import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../Button';

export default function CartTotals({value}) {
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
    return (
            <React.Fragment>
                <div className="col-5 col-md-6 col-lg-6 mx-auto text-left">
                    <Link to="/">
                        <Button className="btn btn-outline text-uppercase mb-2 px-5 mr-2" type="button" onClick={()=>clearCart()} style={{fontSize: 15.97+'px'}}>
                            All clear
                        </Button>
                    </Link>
                    <Link to="/wrapping">
                        <Button className="btn btn-outline text-uppercase mb-2 px-5" type="button" style={{fontSize: 15+'px'}}>
                            move next
                        </Button>
                    </Link>
                </div>
                <div className="col-5 col-md-6 col-lg-6 mx-auto text-right">
                    <h6>
                        <span className="text-title">subTotal :</span>
                        <strong>$ {cartSubtotal}</strong>
                    </h6>
                    <h6>
                        <span className="text-title">Tax :</span>
                        <strong>$ {cartTax}</strong>
                    </h6>
                    <h5>
                        <span className="text-title">Total :</span>
                        <strong>$ {cartTotal}</strong>
                    </h5>
                </div>
            </React.Fragment>
    );
}