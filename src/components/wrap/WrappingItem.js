import React, { Component } from 'react';
import styled from 'styled-components';

class WrappingItem extends Component {
    render(){
        const {id,img,title,price} = this.props.option;
        const {pickwrapping} = this.props.value;
            return (
                <React.Fragment>                            
                    <div className="col-11 col-md-3 col-lg-3 mt-5 mx-auto">
                        <Card className="card" onClick={()=>pickwrapping(id)}>
                            <div className="mx-auto text-center">
                                <div className="img-container">
                                    <img src={img} alt="wrap" className="card-img-top"/>
                                </div>
                                <p>
                                    {title}
                                </p>
                                <p>
                                    $ {price}
                                </p>
                            </div>
                        </Card>
                    </div>
                </React.Fragment>
            );
        }
}

const Card = styled.div`
    &:hover{
        box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.2);
    }
`;

export default WrappingItem;