import React from 'react';
import styled from 'styled-components';

export default function CartItem({item, value}) {
    
    const {id, img, name, price, total, count} = item;
    const {increment, decrement, removeItem } = value;
    return (
        <ItemWrapping className="col-11 col-md-6 col-lg-6 mt-5 mx-auto">
            <div className="card">
                    <div className="removedItem text-right p-2" onClick={()=>removeItem(id)}>
                            <i className="fas fa-times-circle" />
                        </div>
                    <div className="row cartItemTop">
                        <div className="col-6 img-container">
                            <img src={img} alt="flower" className="card-img-top py-2"/>
                        </div>
                        <div className="col-5 text-container text-left py-4">
                            <h3>{name}</h3>
                            <h5>$ {price}</h5>
                        </div>
                    </div>
                    <div className="row  d-flex justify-content-center align-items-center">
                        <div className="col-6 indecrement">
                            <div>
                                <i className="fas fa-minus-square" onClick={()=>decrement(id)} />
                                <span className="btn btn-black mx-1">{count}</span>
                                <i className="fas fa-plus-square" onClick={()=>increment(id)} />
                            </div>
                        </div>
                        <div className="col-5 total">
                            <strong> Flower's total : $ {total}</strong>
                        </div>
                    </div>
                </div>
        </ItemWrapping>
    );
}

const ItemWrapping = styled.div`
    .row{
        margin: 0;
    }
    i{
        cursor: pointer;
    }
    .cartItemTop{
        border-bottom: 1px solid rgba(0,0,0,0.125);
    }
`;