import React, { Component } from 'react';
import styled from 'styled-components';

class WrappingFourth extends Component {
    render() {
        const {option4Val} = this.props.value;
        return (
            <WrappingDIY className="col-11 col-md-3 col-lg-3 mt-5 mx-auto">
                <div className="card">
                    <div className="mx-auto text-center">
                        <div>
                            <div className="img-container">
                                <img src="img/test.png" alt="wrap" className="card-img-top" />
                                <textarea placeholder="원하는 디자인을 적어주세요 :)&#13;&#10;아래 요금선에서 직원이 요금 측정 후 추가요금이 부과됩니다." className="card-img-top" onChange={(e)=>option4Val(e.target.value)}/>
                            </div>
                           <p>
                               <span>Pack my way</span>
                           </p>
                           <p>
                                <span>$ 20 ~ $ 40</span><br />
                           </p>
                        </div>
                    </div>
                </div>
            </WrappingDIY>
        );
    }
}

const WrappingDIY = styled.div`
    .img-container{
        position: relative;
    }
    img{
        opacity: 0;
    }
    textarea{
        position: absolute;
        top:0;
        left:0;
        height:100%;
    }
    textarea{
        padding: 10px;
        font-size: 15px;
        resize: none;
    }
    .card{
        &:hover{
            box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.2);
        }
    }
`;

export default WrappingFourth;