import React, { useState } from "react";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.elements;
    const data = {};
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    // Integrate with Simple Email Service platform
    // Replace with your actual email service integration code
    sendEmail(data);

    setSubmitted(true);
  };

  // Replace with your actual email sending function
  const sendEmail = (data) => {
    console.log("Sending email with data:", data);
    // Implement your email sending logic here
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
 
    <div className="pt-20 container flex">
      <div className="w-1/2 pr-4">
        <img
          style={{ 'width': '75%', 'height': '75%' }}
          src="https://herotofu.com/images/question.min.svg"
          alt="Contact"
          className="w-full h-full"
        />
      </div>
      <div className="w-1/2 pl-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p>
            <span className="inline-flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1200px-Flag_of_Australia.svg.png"
                alt="Australia Flag"
                className="w-7 h-5 mr-1"
              />
              Phone: +64 578575788
            </span>
          </p>
          <p>My email: phattantran123@gmail.com</p>
        </div>
        <form onSubmit={handleSubmit} method="POST">
          <div className="pt-0 mb-3">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>
          <div className="pt-0 mb-3">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>
          <div className="pt-0 mb-3">
            <textarea
              placeholder="Your message"
              name="message"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>
          <div className="pt-0 mb-3">
            <button
              className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
              type="submit"
            >
              Send a message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;