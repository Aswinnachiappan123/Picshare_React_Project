import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_va236wr",
        "template_vmh4uhp",
        form.current,
        "AakyZo1NuuJlrZ49V"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="to_name" />
        <label>Email</label>
        <input type="email" name="from_name" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left:450px;
    margin-top:100px;
    width: 100%;
    font-size: 16px;
    font-weight:1000;
    input {
      margin-top: 1rem;
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 25px;
      border: 1.75px solid rgb(10, 10, 10);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      margin-top: 1rem;
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(22, 22, 22);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 4rem;
      cursor: pointer;
      background:red;
      color: white;
      border-radius: 25px;
      font-weight:1000;
    }
  }
`;