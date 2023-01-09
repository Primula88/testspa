import React, { Component } from "react";
import ContactForm from "./components/ContactForm.js";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
          <ContactForm />
      </div>
    );
  }
}
 
export default Contact;