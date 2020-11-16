import React, {useState} from 'react';

import Modal from "../modal/modal";
import "./form.scss"

const initialState = {
        cardNum: "",
        cvv: "",
        expDate: "",
        cardNumErr: "",
        cvvErr: "",
        expDateErr: ""
}


const Form = () => {

    const [state, setState] = useState({
        cardNum: "",
        cvv: "",
        expDate: "",
        cardNumErr: "",
        cvvErr: "",
        expDateErr : "",
    })

    const [modalState, setModalState] = useState(false);



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(
          {...state,
              [event.target.name]: event.target.value}
        );
      };


  const validate = () => {
        let cardNumErr = "";
        let cvvErr = "";
        let expDateErr = "";

        const cardNumRegex = /^([0-9]{4}[\s-]?){3}([0-9]{4})$/;
        const cvvRegex = /^[0-9]{3}$/;
        const expDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

        if (!cardNumRegex.test(state.cardNum)) {
          cardNumErr = "Invalid card number";
        }
    
        if (!cvvRegex.test(state.cvv)) {
          cvvErr = "Invalid cvv number";
        }

        if (!expDateRegex.test(state.expDate)) {
            expDateErr = "Invalid expiration date";
          }


    
        if (cardNumErr || cvvErr || expDateErr) {
          setState({...state,
            cardNumErr, 
            cvvErr,
            expDateErr });
          return false;
        }
        
        return true;
      };



 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();

        const isValid = validate();
        if (isValid) {
          console.log(state);
          setState(initialState);
          setModalState(true);
        }
      };

    return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="card-num-container">
                        <label>Card Number</label>
                        <input
                        type="number"
                        className="card-num"
                        name="cardNum"
                        placeholder="Your card number..."
                        value={state.cardNum}
                        onChange={handleChange}
                        maxLength={12}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {state.cardNumErr}
                    </div>
                </div>
            <div className="lower-input-section">
            <div className="lower-input">
                <label>CVV</label>
                <input
                    name="cvv"
                    placeholder="***"
                    value={state.cvv}
                    onChange={handleChange}
                    maxLength={3}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                    {state.cvvErr}
                </div>
            </div>
            <div className="lower-input">
                <label>Expiration Date</label>
                <input
                    name="expDate"
                    placeholder="**/**"
                    value={state.expDate}
                    onChange={handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                    {state.expDateErr}
                </div>
                </div>
            </div>
                </div>
        <button type="submit">Submit</button>
      </form>
      <Modal show={modalState} handleClose={() => setModalState(false)}/>
    </>
)
        
}

export default Form;