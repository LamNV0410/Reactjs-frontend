import React, { useEffect } from 'react';

function Offer(props) {
    // get offer State

    // get offer from API or dedux store
    useEffect(() => {

    }, [])

    return (
        <div className="offer">
            <div className="small-container">
                <div className="row">
                    <div className="col-2">
                        <img src="images/exclusive.png" className="offer-img" alt="information"/>
                    </div>
                    <div className="col-2">
                        <p>Exclusively Available on RedStore</p>
                        <h1>Smart Band 4</h1>
                        <small>The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                        AMOLED color full-touch display with adjustable brightness,
                        so everything is clear as can be.
                            </small>
                        <a href='/buy-now' className="btn">Buy Now →</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;