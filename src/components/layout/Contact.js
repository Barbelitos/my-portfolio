import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact-section" className={classes.contact}>
      <h1 className={classes.contact_title}>Contact</h1>
      <p className={classes.contact_text}>
        Hi, do you have any questions? Sen me a message and I will reply to you
        as soon as possible!
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;
