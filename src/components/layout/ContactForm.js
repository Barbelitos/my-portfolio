import { useForm } from "@formspree/react";
import { useState } from "react";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzbokpwz");
  const [messageSent, setMessageSent] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const displayMessage = (event) => {
    setMessageSent(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setMessageSent(false);
    }, 800);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} id="myForm" className={classes.contact_form}>
      <div className={classes.form_group}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={nameChangeHandler}
          value={name}
          required
        />
      </div>
      <div className={classes.form_group}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={emailChangeHandler}
          value={email}
          required
        />
      </div>
      <div className={classes.form_group}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          type="text"
          name="message"
          onChange={messageChangeHandler}
          value={message}
          required
        />
      </div>
      <button
        onClick={displayMessage}
        type="submit"
        disabled={state.submitting}
      >
        Send message
      </button>
      <br></br>
      <p>{messageSent ? "Thank you for your message!" : ""}</p>
    </form>
  );
};

export default ContactForm;
