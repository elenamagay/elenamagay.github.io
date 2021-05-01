import React from "react";
import Container from "../components/Container/container";
import Contact from "../components/Contact/contact";
// import "./contact.css";


function ContactMe() {
document.title = "Contact Me";

  return (
    <Container>
      <section>
        <h1 className="section-header">Contact Me</h1>
        <hr />
        <Contact />
      </section>
    </Container>
  );
  };

export default ContactMe;