import React from 'react';
import { useForm } from 'react-hook-form';
import './amount.css';

const Amount = () => {
    const {handleSubmit, handleChange, register} = useForm([]);
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    return(
        <div className="card">
            <h2>One-time Payment</h2>
            <p className="sub">Send money interntionally</p>
            <form onSubmit={handleSubmit()} className="form">
                <div className="input">
                    <input type="text" placeholder="You send" className="currency-input" onChange={handleChange} {...register("send", {required: true})}/>
                    <p className="currency">USD</p>
                </div>
                <div className="input">
                    <input type="text" placeholder="Recipient gets" className="currency-input" onChange={handleChange} {...register("recipient", {required: true})}/>
                    <p className="currency">EUR</p>
                </div>
                <div className="buttons">
                    <button className="white">Compare Rates</button>
                    <button className="purple" onClick={handleNext}>Continue</button>
                </div>
            </form>
        </div> 
    )
}

export default Amount;