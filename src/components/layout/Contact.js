import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact-section" className={classes.contact}>
      <h1 className={classes.contact_title}>Contact</h1>
      <ContactForm />
    </section>
  );
};

export default Contact;
