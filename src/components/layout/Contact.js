import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.fromTo(
      "#contact",
      {
        y: 800,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.8,
        opacity: 1,
        scrollTrigger: {
          trigger: "#contact-section",
        },
      }
    );
  }, []);

  return (
    <section id="contact-section" className={classes.contact}>
      <div id="contact">
        <h1 className={classes.contact_title}>Contact</h1>
        <p className={classes.contact_text}>
          Hi, do you have any questions? Sen me a message and I will reply to
          you as soon as possible!
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
