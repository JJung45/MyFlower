import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Menu from './Menu';

class Navbar extends Component {

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
        return (
            <NavWrapper className="navbar navbar-exapand-sm navbar-dark">
                <Link to="/" className="font-weight-bold">
                    <span style={{fontFamily: "'Dancing Script',cursive",fontSize: 17+"px"}}>My Flower</span>
                    <img src="img/icon.png" alt="titleIcon" style={{width:30+"px"}}/>
                </Link>
                <Menu />
            </NavWrapper>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
    z-index: 888;
    width: 100%;
    background: var(--lightGrey);
    position: fixed;
    top:0;
    left:0;
    a{
        font-size: 20px;
        text-decoration: none;
    }
`;