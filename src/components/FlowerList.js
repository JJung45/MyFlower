import React, { Component } from 'react';
import Flower from './Flowers';
import Title from './Title';
import {FlowerConsumer} from '../context';

class flowerList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title title="Pick a flower" />
                        <div className="row">
                            <FlowerConsumer>
                                {value=>{
                                    return value.flowers.map(flower =>{
                                        return <Flower key={flower.id} flower ={flower}/>;
                                    })
                                }}
                            </FlowerConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default flowerList;