import React from 'react';
import { useForm } from 'react-hook-form';
import './recipient.css';

const Recipient = () => {
    const {handleSubmit, handleChange, register} = useForm([]);
    return(
        <div className="card">
            <h2>Your Recipient</h2>
            <p className="sub">Who are you sending money to?</p>
            <hr/>
            <form onSubmit={handleSubmit()}>
                <label>Their label(optional)</label>
                <input type="text" onChange={handleChange}/>
                <label>Full name of the account holder</label>
                <input type="text" onChange={handleChange} {...register("accounHolder",{required: "Required"})}/>
            </form>
            <h3>Bank details</h3>
            <hr />
            <button className="continue">Continue</button>
        </div>
    )
}

export default Recipient;