import React, { Component } from 'react';
import {FlowerConsumer} from '../context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <FlowerConsumer>
                {value=>{
                    const {modalOpen, closeModal, addToCart, removeItem} = value;
                    const {img, name, price, birth, meaning, using, inCart} = value.modalFlower;
                    if(!modalOpen){
                        return null;
                    }else{
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h4>Pick it!
                                                {inCart?
                                                    <span className="px-2 pick" onClick={()=>removeItem(value.modalFlower.id)}>
                                                        <i className="fa fa-check" />
                                                    </span>
                                                    :<span className="px-2 pick" onClick={()=>addToCart(value.modalFlower.id)}>
                                                        <i className="fa fa-cart-plus" />
                                                    </span>
                                                }
                                            </h4>
                                            <img src={img} className="img-fluid" alt="flower" />
                                            <h3>{name}</h3>
                                            <h5>price: $ {price}</h5>
                                            {birth ? <h6>birth : {birth}</h6> : null}
                                            <h5>meaning: {meaning}</h5>
                                            <p className="tag">{using.split(',').map((item,i)=>{
                                                return <span key={i}> # {item}</span>;
                                            })}</p>
                                            <Link to="/cart">
                                                <Button onClick={()=>closeModal()}>
                                                    go to cart
                                                </Button>
                                            </Link>
                                            <Link to="/">
                                                <Button onClick={()=>closeModal()}>
                                                    Back
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </FlowerConsumer>
        );
    }
}

const ModalContainer = styled.div`
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    .pick{
        cursor: pointer;
    }
    #modal{
        background: var(--mainWhite);
    }
    .tag{
        font-size: 10px;
    }
`;

const Button = styled.button`
    text-transform:capitalize;
    font-size:1.4rem;
    background:transparent;
    border:0.05rem solid var(--lightRed);
    color: var(--lightRed);
    border-radius:0.5rem;
    padding:0.2rem 0.5rem;
    cursor:pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
    background: var(--lightRed);
    color:var(--mainWhite);
    }
    &:focus{
    outline:none;
    }
`;

export default Modal;