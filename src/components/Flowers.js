import React, { Component } from 'react';
import styled from 'styled-components';
import {FlowerConsumer} from '../context';
import propTypes from 'prop-types';

class Flowers extends Component {

    render() {
        const {id, name, img, meaning, price, inCart} = this.props.flower;

        return (
            <FlowerWrapper className="col-11 mx-auto col-md-6 col-lg-6 mt-5">
                <div className="card" style={{borderRadius: 0}}>
                <FlowerConsumer>
                    {value=>(
                        <div className="row">
                            <div className="col-4 mx-auto py-5 text-container" style={{lineHeight:20+"px"}}>
                                <h5>{name}</h5>
                                <p className="meaning">{meaning}</p>
                                <p>$ {price}</p>
                            </div>
                            <div className="col-7 img-container">
                                <img src={img} alt="flower1" className="card-img-top py-2"/>
                                <p className="flowertape text-center font-weight-bold position-absolute" onClick={()=>value.openModal(id)}>
                                    {inCart? "" : "Pick it!"}
                                </p>
                            </div>
                        </div>
                    )}
                </FlowerConsumer>
                </div>
            </FlowerWrapper>
        );
    }
}

Flowers.propTypes = {
    flower: propTypes.shape({
        id: propTypes.number,
        img: propTypes.string,
        name: propTypes.string,
        price: propTypes.number,
        inCart: propTypes.bool
    }).isRequired
};

const FlowerWrapper = styled.div`
    .flowertape{
        background: rgba(166,127,120,0.5);
        font-family: 'Dancing Script', cursive;
        font-size: 20px;
        color: var(--mainWhite);
        width: 80px;
        height: 100%;
        top:0;
        right: 15%;
        line-height: 200px;
        cursor: pointer;
    }
    .meaning{
        font-family: 'Dancing Script', cursive;
        font-size: 15px;
    }

    &:hover{
        .card{
            box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.2);
        }
    }
`;

export default Flowers;