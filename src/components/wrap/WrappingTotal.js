import React, { Component } from 'react';
import {Button} from '../Button';

class WrappingTotal extends Component {
    render() {
        const {cartTotal,lastTotal,subPrice} = this.props.value;
        
        return (
            <React.Fragment>
                <div className="col-11 col-md-6 col-lg-6 mx-auto mt-2 text-left" style={{fontSize: 12.72+'px'}}>
                    <span>* 실력있는 플로리스트이 꽃에 맞는 예쁜 디자인으로 가격에 맞춰 포장해드립니다 :) </span>
                </div>
                <div className="col-11 col-md-6 col-lg-6 mx-auto mt-2 text-right">
                    <h6>
                        <span className="text-title">subTotal :</span>
                        <strong>$ {cartTotal}</strong>
                    </h6>
                    <h6>
                        <span className="text-title">design price :</span>
                        <strong>$ {subPrice}</strong>
                    </h6>
                    <h5>
                        <span className="text-title">Total :</span>
                        <strong>$ {lastTotal}</strong>
                    </h5>
                    <Button order className="btn btn-outline text-uppercase px-5 mt-2" type="button" >
                        ORDER
                    </Button>
                </div>
                
            </React.Fragment>
        );
    }
}

export default WrappingTotal;