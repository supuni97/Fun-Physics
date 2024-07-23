import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Feedback = () => {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_pb4czlg';
    const templateId = 'template_y1ufcte';
    const publicKey = 'RHunRDnNQKkmoCFS9';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Fun Physics Admin',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending en=email:', error);
      });
  }

  return (
    <div id="contact">
<div className="col-md-8">
<div className="row">
<div className="section-title">
<h2>Enter Your Feedback</h2>
                <p>
                Please provide constructive feedback on the student's performance, highlighting strengths and areas for improvement. Your insights will help guide the student's learning journey and contribute to their overall academic development.
                </p>
</div>
 <form onSubmit={handleSubmit} className='emailForm'>
      <input
        type='text'
        placeholder='Your Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        placeholder='Your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}>
      </textarea>
      <button type='submit'>Send Email</button> 

      
    </form>
</div>
</div>
      </div>
   
  )
}

export default Feedback