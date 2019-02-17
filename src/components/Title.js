import React from 'react';

export default function Title({title}){
    return (
        <React.Fragment>
            <div className="row mt-5 text-title text-left px-3" style={{marginRight: 0}}>
                    <h1 className="col-5">
                        {title}
                    </h1>
                    <div className="col-7 my-auto"><p className="line"></p></div>
            </div>
        </React.Fragment>
    )
}