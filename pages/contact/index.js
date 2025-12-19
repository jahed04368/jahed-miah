import React, { useState, useRef } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const Contact = () => {
  const form = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [errorfirstName, setErrorfirstName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrorfirstName('');
    setErrorLastName('');
    setErrorEmail('');
    setErrorMessage('');

    const enteredFirstName = firstNameInputRef.current.value.trim();
    const enteredLastName = lastNameInputRef.current.value.trim();
    const enteredEmail = emailInputRef.current.value.trim();
    const enteredMessage = messageInputRef.current.value.trim();

    // Validation
    let hasError = false;

    if (!enteredFirstName) {
      setErrorfirstName('Please fill out first name field.');
      hasError = true;
    }

    if (!enteredLastName) {
      setErrorLastName('Please fill out last name field.');
      hasError = true;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!enteredEmail) {
      setErrorEmail('Please fill out email field.');
      hasError = true;
    } else if (!emailRegex.test(enteredEmail)) {
      setErrorEmail('Please enter a valid email address.');
      hasError = true;
    }

    if (!enteredMessage) {
      setErrorMessage('Please fill out message field.');
      hasError = true;
    } else if (enteredMessage.length < 10) {
      setErrorMessage('Message must be at least 10 characters long.');
      hasError = true;
    }

    if (hasError) return;

    try {
      console.log('Sending email with:', {
        service: process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        template: process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY ? 'Set' : 'Not set'
      });

      // Prepare template parameters
      const templateParams = {
        to_email: 'jahed04368@gmail.com',
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
        message: enteredMessage
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      );
      console.log('Email sent successfully:', result.text);
      setSubmitted(true);
      
      // Clear form fields
      firstNameInputRef.current.value = '';
      lastNameInputRef.current.value = '';
      emailInputRef.current.value = '';
      messageInputRef.current.value = '';
    } catch (error) {
      console.error('Email send failed:', error);
      setErrorMessage(`Failed to send message: ${error.text || error.message || 'Please try again later.'}`);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Navbar />
      <div className="text-white container flex flex-wrap justify-center items-center mx-auto px-4 md:px-6 py-10 lg:pt-20">
        {!submitted && (
          <form
            className="w-full max-w-2xl bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl"
            method="post"
            onSubmit={handleOnSubmit}
            ref={form}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 mb-8 text-center">
              Get In Touch
            </h2>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-slate-700 text-white border border-slate-600 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  name="firstName"
                  ref={firstNameInputRef}
                  required
                />
                <p className="text-red-500 text-xs italic">{errorfirstName}</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-slate-700 text-white border border-slate-600 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  name="lastName"
                  ref={lastNameInputRef}
                />
                <p className="text-red-500 text-xs italic">{errorLastName}</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-slate-700 text-white border border-slate-600 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  ref={emailInputRef}
                  required
                />
                <p className="text-red-500 text-xs italic">{errorEmail}</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="no-resize appearance-none block w-full bg-slate-700 text-white border border-slate-600 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 h-48 resize-none"
                  id="message"
                  name="message"
                  placeholder="your message here..."
                  ref={messageInputRef}
                />
                <p className="text-red-500 text-xs italic">{errorMessage}</p>
              </div>
            </div>
            <div className="md:flex md:items-center justify-center mt-8">
              <button
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:scale-105"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
        {submitted && (
          <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 border border-slate-700 shadow-2xl max-w-2xl">
            <div className="text-6xl mb-6">✉️</div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
              Message Sent!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Thanks for reaching out. I&apos;ll get back to you within 3-5 business days.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              ← Go Home
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
