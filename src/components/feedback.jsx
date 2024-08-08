import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Footer } from './footer';
import Logo from '../images/Logo.jpg';
import ContactImage from '../images/Contact.png'; // Import the example image

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
        window.alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        window.alert('There was an error sending the email. Please try again.');
      });
  }

  return (
    <div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{ backgroundColor: "black", height: "60px" }}>
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a style={{ color: "white", paddingTop: "5px" }} className="navbar-brand page-scroll" href="#page-top">
              <img src={Logo} alt="logo" style={{ height: "50px", marginTop: "-15px" }} />
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a style={{ color: "bisque" }} href="/#header" className="page-scroll">
                  Home
                </a>
              </li>
              <li>
                <a style={{ color: "bisque" }} href="/#ab" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a style={{ color: "bisque" }} href="/#gallery" className="page-scroll">
                  Game Gallery
                </a>
              </li>
              <li>
                <a style={{ color: "bisque" }} href="/#feedback" className="page-scroll">
                  Contact US
                </a>
              </li>
              <li>
                <a style={{ color: "bisque" }} href="/login" className="page-scroll">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="contact" style={{ padding: '50px 0', width: '100%', boxSizing: 'border-box', background: '#CEF8FC' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="row">
            <div className="col-md-8">
              <div className="section-title" style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
                <h2 style={{ color: '#231EA0' }}>Contact Us</h2>
                <p style={{ color: 'black' }}>
                  We value your feedback and inquiries. Please share your thoughts on the student's performance, including strengths and areas for improvement, or contact us with any questions or concerns. Your input helps us enhance the learning experience and address any issues promptly.
                </p>
              </div>
              <form onSubmit={handleSubmit} className='emailForm' style={{ width: '100%' }}>
                <div className='form-group' style={{ marginBottom: '15px' }}>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Your Name Here'
                    className='form-control'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                  />
                </div>
                <div className='form-group' style={{ marginBottom: '15px' }}>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Your Email Here'
                    className='form-control'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                  />
                </div>
                <div className='form-group' style={{ marginBottom: '15px' }}>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='10'
                    value={message}
                    placeholder='Type your Message'
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                  ></textarea>
                </div>
                <button type='submit' className='btn btn-custom btn-lg' style={{ width: '100%', padding: '10px', backgroundColor: '#291F7B', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  Send
                </button>
              </form>
            </div>
            <div className="col-md-4" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', padding: '0 20px' }}>
              <img src={ContactImage} alt="Contact Us" style={{ width: '100%', height: 'auto', borderRadius: '10px', objectFit: 'cover',marginTop:'80px',marginLeft:'20px' }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Feedback;
