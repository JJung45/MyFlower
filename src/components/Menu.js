import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }

    handleClick(){
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        let show = this.state.open?"block":"none";
        return (
            <div>
                <i className="fas fa-ellipsis-v fa-lg" onClick={()=>this.handleClick()} style={{cursor:"pointer"}}/>
                <InMenu style={{display: show}}>
                    <div>
                        <Link to="/">All Flower</Link>
                    </div>
                    <div>
                        <Link to="/cart">My Cart</Link>
                    </div>
                </InMenu>
            </div>
        );
    }
}

const InMenu = styled.div`
    position: absolute;
    right: 10px;
    top: 48px;
`;

export default Menu;