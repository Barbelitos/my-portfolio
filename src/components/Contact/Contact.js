import ContactForm from "./ContactForm";
import SectionTitle from "../Other components/SectionTitle";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact-section" className={classes.contact}>
      <SectionTitle
        id="contact"
        title="Contact"
        subtitle="Hi, do you have any questions? Send me a message and I will reply to
          you as soon as possible!"
      />
      <ContactForm />
    </section>
  );
};

export default Contact;
