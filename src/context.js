import React, { Component } from 'react';
import {aboutflowers, options} from './data';

const FlowerContext = React.createContext();// need provider consumer

//provier
class FlowerProvider extends Component {
    state = {
        flowers: [],
        detailFlowers: aboutflowers,
        options: options,
        selectoption: 1,
        cart: [],
        modalOpen: false,
        modalFlower: aboutflowers,
        cartSubtotal:0,
        cartTax:0,
        cartTotal:0,
        subPrice: 0,
        lastTotal:0,
        option_4: ""
    };

    componentDidMount(){
        this.setFlowers();
    }

    setFlowers = () =>{
        let temFlowers = [];
        aboutflowers.forEach(item=>{
            const singleItem = {...item};
            temFlowers = [...temFlowers, singleItem];
        })
        this.setState(()=>{
            return {flowers:temFlowers}
        })
    }

    getItem = (id) =>{
        const flower = this.state.flowers.find(item=>item.id === id);
        return flower;
    }

    addToCart = (id) => {
        let tempFlower = [...this.state.flowers];
        const idx = tempFlower.indexOf(this.getItem(id));
        const flower = tempFlower[idx];
        if(flower.inCart===true){
            flower.inCart = false;
            flower.count = 0;
            //cart에서 뺴고 price뺴기
        }else{
            flower.inCart = true;
            flower.count =1;
            const price = flower.price;
            flower.total = price;
            this.setState(()=>{
                return {flowers: tempFlower, cart:[...this.state.cart, flower]};
            },()=>{
                this.addTotals();
            });
        }        
    }
    
    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map(item=>{subTotal += item.total});
        const tempTax = subTotal*0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal+tax;
        this.setState(()=>{
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    openModal = (id) => {
        const flower = this.getItem(id);
        this.setState(()=>{
            return {modalFlower: flower, modalOpen: true}
        })
    }

    closeModal = (id) =>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }

    increment = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedFlower = tempCart.find(item=>item.id === id);
        const idx = tempCart.indexOf(selectedFlower);
        const flower = tempCart[idx];
        flower.count++;
        flower.total = flower.count*flower.price;
        this.setState(()=>{
            return {
                cart: [...tempCart]
            }
        },()=>{this.addTotals();})   
    }

    decrement = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedFlower = tempCart.find(item=>item.id === id);
        const idx = tempCart.indexOf(selectedFlower);
        const flower = tempCart[idx];
        flower.count--;
        if(flower.count===0){
            this.removeItem(id);
        }else{
            flower.total = flower.count*flower.price;
        }
        this.setState(()=>{
            return {
                cart: [...tempCart]
            }
        },()=>{this.addTotals();})   
    }

    removeItem = (id) =>{
        let tempFlower = [...this.state.flowers];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item=>item.id!==id);
        const idx = tempFlower.indexOf(this.getItem(id));
        let removedFlower = tempFlower[idx];
        removedFlower.inCart=false;
        removedFlower.count=0;
        removedFlower.total=0;
        this.setState(()=>{
            return {
                cart: [...tempCart],
                flowers: [...tempFlower]
            }
        },()=>{
            this.addTotals();
        })
    }

    clearCart = () =>{
        this.setState(()=>{
            return{cart:[]};
        },()=>{
            this.setFlowers();
            this.addTotals();
        })
    }

    getWrapping = (id) =>{
        const option = this.state.options.find(item=>item.id === id);
        return option;
    }

    getWrapPrice = (id) =>{
        const tempOptions = [...this.state.options];
        const idx = tempOptions.indexOf(this.getWrapping(id));
        const tempPrice = tempOptions[idx].price;

        return tempPrice;
    }

    pickwrapping = (id) =>{
        this.setState(()=>{
            return {selectoption:id}
        },()=>{
            this.endTotal(id);
        })
    }

    endTotal = (id) =>{
        const Subtotal = this.state.cartTotal;
        const tempPrice = this.getWrapPrice(id);
        const Total = Subtotal+tempPrice;

        this.setState(()=>{
            return {subPrice: tempPrice,lastTotal: Total}
        })
    }

    option4Val = (val) =>{
        this.setState(()=>{
            return {option_4: val, selectoption: 4}
        })
    }

    render() {
        return (
            <FlowerContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                pickwrapping: this.pickwrapping,
                getWrapping: this.getWrapping,
                option4Val: this.option4Val
            }}>
                {this.props.children}
            </FlowerContext.Provider>
        );
    }
}

//consumber
const FlowerConsumer = FlowerContext.Consumer;

export {FlowerProvider, FlowerConsumer};