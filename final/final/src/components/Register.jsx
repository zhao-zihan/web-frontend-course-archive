import { useState } from "react";
import "../stylesheets/Register.css";

function Register() {
  function onSubmit(event) {
    console.log("register");
    setIsNameInvalid(!name);
    setIsEmailInvalid(!email);
    setIsConfirmInvalid(!(email && email === confirm));
    event.preventDefault();
  }

  const [name, setName] = useState("");
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [isConfirmInvalid, setIsConfirmInvalid] = useState(false);

  return (
    <div className="wrapper">
      <h2 className="sub-title">Subscribe to Our Newsletters</h2>
      <form onSubmit={onSubmit} className="register">
        <label htmlFor="name" className="register__name-label">
          Name:
        </label>
        <input
          type="text"
          value={name}
          onInput={(event) => {
            setName(event.target.value);
          }}
          name="name"
          id="name"
          className="register__name-input"
        />

        {isNameInvalid && (
          <span className="register__name-error error-message">
            This field is required
          </span>
        )}

        <label htmlFor="email" className="register__email-label">
          Email:
        </label>
        <input
          type="text"
          value={email}
          onInput={(event) => {
            setEmail(event.target.value);
          }}
          name="email"
          id="email"
          className="register__email-input"
        />
        {isEmailInvalid && (
          <span className="register__email-error error-message">
            This field is required
          </span>
        )}

        <label htmlFor="confirm" className="register__confirm-label">
          Confirm Email:
        </label>
        <input
          type="text"
          value={confirm}
          onInput={(event) => {
            setConfirm(event.target.value);
          }}
          name="confirm"
          id="confirm"
          className="register__confirm-input"
        />
        {isConfirmInvalid && (
          <span className="register__confirm-error error-message">
            This field must match the email
          </span>
        )}

        <input
          type="checkbox"
          name="wants-spam"
          id="want"
          className="register__checkbox-input"
        />
        <label htmlFor="want" className="register__checkbox-label">
          <span>Do you want newsletter about other animals?</span>
        </label>

        <label htmlFor="tier" className="register__select-label">
          Tier:
        </label>
        <select name="tier" id="tier" className="register__select-input">
          <option value="">Please select</option>
          <option value="1">Sliver Tier</option>
          <option value="2">Gold Tier</option>
          <option value="3">Platinum Tier</option>
        </select>

        <button className="register__submit" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
