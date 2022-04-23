import { useForm } from "@formspree/react";
import { useState } from "react";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzbokpwz");
  const [messageSent, setMessageSent] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageName, setMessageName] = useState("");

  const displayMessage = () => {
    if (name !== "" && email !== "" && message !== "") {
      setMessageSent(true);
    }
    setMessageName(name);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 800);
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
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
        {/* <label htmlFor="name">Name</label> */}
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          onChange={nameChangeHandler}
          value={name}
          required
        />
      </div>
      <div className={classes.form_group}>
        {/* <label htmlFor="email">Email</label> */}
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          onChange={emailChangeHandler}
          value={email}
          required
        />
      </div>
      <div className={classes.form_group}>
        {/* <label htmlFor="message">Message</label> */}
        <textarea
          id="message"
          type="text"
          name="message"
          placeholder="Your message"
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
      <br />
      <p className={classes.feedback_message}>
        {messageSent
          ? `Hi ${messageName}, thank you for your message! I'll get back to you as soon as possible.`
          : ""}
      </p>
    </form>
  );
};

export default ContactForm;
