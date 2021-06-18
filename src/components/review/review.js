import React from 'react';
import './review.css';

const Review = () => {
    return(
        <div className="card">
            <h2>Review details of your transfer</h2>
            <hr/>
            <div className="info">
                <p>You send</p>
                <p></p>
            </div>
            <div className="info">
                <p>Total fees(included)</p>
                <p></p>
            </div>
            <div className="info">
                <p>Amount we'll convert</p>
                <p></p>
            </div>
            <div className="info">
                <p>Guaranteed Rate</p>
                <p></p>
            </div>
            <div className="info">
                <p>Johnny gets</p>
                <p></p>
            </div>
            <hr />
            <div className="info">
                <p>Name</p>
                <p></p>
            </div>
            <div className="info">
                <p>Email address</p>
                <p></p>
            </div>
            <div className="info">
                <p>IBAN/Account Number</p>
                <p></p>
            </div>
        </div>
    )
}

export default Review;