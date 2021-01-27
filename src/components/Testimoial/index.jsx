import React, { useEffect } from 'react';

function Testimoial(props) {
    // get Testimoial State

    // get Testimoial from API or dedux store
    useEffect(() => {

    }, [])
    return (
        <div className="testimonial">
            <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <i className="fa fa-quote-left" />
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Praesentium illum accusantium sapiente hic est aliquid enim
                            laudantium exercitationem quia quas ex officia laboriosam ea
                            numquam tempore itaque earum, doloremque cupiditate.
                            </p>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                        </div>
                        <img src="images/user-1.png" alt='infomation' />
                        <h3>Sean Parker</h3>
                    </div>
                    <div className="col-3">
                        <i className="fa fa-quote-left" />
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Praesentium illum accusantium sapiente hic est aliquid enim
                            laudantium exercitationem quia quas ex officia laboriosam ea
                            numquam tempore itaque earum, doloremque cupiditate.
                            </p>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                        </div>
                        <img src="images/user-2.png" alt='infomation' />
                        <h3>Joshep Lam</h3>
                    </div>
                    <div className="col-3">
                        <i className="fa fa-quote-left" />
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Praesentium illum accusantium sapiente hic est aliquid enim
                            laudantium exercitationem quia quas ex officia laboriosam ea
                            numquam tempore itaque earum, doloremque cupiditate.
                        </p>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                        </div>
                        <img src="images/user-3.png" alt='infomation' />
                        <h3>Sean Parker</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimoial;