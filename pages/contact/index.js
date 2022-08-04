import React, { useState, useRef } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const Contact = () => {
  const form = useRef({});
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
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    if (!enteredFirstName)
      return setErrorfirstName('Please fill out first name field.');

    if (!enteredLastName)
      return setErrorLastName('Please fill out last name field.');

    if (!enteredEmail.includes('@'))
      return setErrorEmail('email address is not valid.');

    if (!enteredMessage)
      return setErrorMessage('Please fill out message field.');

    emailjs
      .sendForm(
        'service_25i0rzz',
        'template_5mpiocn',
        form.current,
        'LdTpAW5_pWIRJPbRm'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    return setSubmitted(true);
  };

  return (
    <div className="bg-slate-700">
      <Navbar />
      <div className="text-white container flex flex-wrap justify-center items-center mx-auto px-2 py-10 lg:pt-20">
        {!submitted && (
          <form
            className="w-full max-w-lg"
            method="post"
            onSubmit={handleOnSubmit}
            ref={form}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  name="message"
                  placeholder="your message here..."
                  ref={messageInputRef}
                />

                <p className="text-red-500 text-xs italic">{errorMessage}</p>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleOnSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        )}
        {submitted && (
          <div className="">
            <p className="text-2xl">
              {
                'Thanks for contacting. I will aim to reply in 3 to 5 working days.'
              }
            </p>
            <Link href={'/'}>
              <button
                className="mt-3 p-20 shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="button"
              >
                {'Go Home'}
              </button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
