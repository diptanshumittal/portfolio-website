import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container id="contact">
        <h2 className="heading">Get in Touch</h2>
        <div id="contact-form">
            <form method="POST" action="https://formspree.io/f/xjvjvvkq">
                <input type="hidden" name="_subject" value="Contact request from personal website" />
                <input type="email" name="_replyto" placeholder="Your email" required />
                <textarea name="message" placeholder="Your message" required></textarea>
                <button type="submit" className="btn btn-outline-dark btn-lg">Send</button>
            </form>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
