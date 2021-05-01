import { useState } from "react"
import { useForm } from "react-hook-form"
import validator from "email-validator"
import API from "../../utils/API"
import "./contact.css"

function Contact() {
  const [buttonState, setButtonState] = useState({
    text: "Submit",
    disabled: false
  });
  const [statusText, setStatusText] = useState("");
  const { register, formState: { errors }, handleSubmit } = useForm();
    //On form submit, set button and status text, then update when POST responds
  const onSubmit = (data, e) => {
    setStatusText("");
    setButtonState({ text: "Sending...", disabled: true });

    API.submitForm(data)
      .then(() => {
        setStatusText("Message sent!");
        e.target.reset();
      })
      .catch(() => setStatusText("Error in sending"))
      .finally(() => setButtonState({ text: "Submit", disabled: false }));

  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-3">
        <label id="name-field">Name</label>{<span className="ml-5 error">{errors.name?.message}</span>}
        <input id="name-input" name="name" type="text" className="form-control" placeholder="Name" aria-label="Name"
          aria-describedby="name-field"
          {...register("name", { required: "Required" })} />
      </div>
      <div className="mb-3">
        <label id="email-field">Email</label>{<span className="ml-5 error">{errors.email?.message}</span>}
        <input id="email-input" name="email" type="email" className="form-control" placeholder="Email" aria-label="Email"
          aria-describedby="email-field"
          {...register("email",
            {
              required: "Required",
              validate: email => validator.validate(email) ? true : "Invalid Address"
            })
          }
        />
      </div>
      <div>
        <label id="message-field">Message</label>{<span className="ml-5 error">{errors.message?.message}</span>}
        <textarea id="message-input" name="message" rows={5} className="form-control"
          placeholder="Message of at least 5 characters" aria-label="Message" aria-describedby="message-field"
          {...register("message",
            {
              required: "Required",
              minLength: { value: 5, message: "5 character minimum" }
            })
          }
        />
      </div>
      <button id="contact-submit" className="btn contact-submit" type="submit" disabled={buttonState.disabled}>{buttonState.text}</button>
      <span id="contact-status" className="ml-3">{statusText}</span>
    </form >
  );
}

export default Contact;