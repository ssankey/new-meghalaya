import React from 'react';
import { Helmet } from 'react-helmet';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import Form from '../components/Form';

// Assume this import is correct
import banner from '../assets/images/arrival.webp';

const ContactUs = () => {
  return (
    <div className="bg-light min-h-screen">
      <Helmet>
        <title>Contact Us | Meghalaya - Into The Mountains</title>
        <meta
          name="description"
          content="Contact us for more information about Meghalaya - Into The Mountains. Find our office address, contact numbers, and contact person details."
        />
      </Helmet>

      {/* Banner Section */}
      <section className="relative h-[60vh] flex justify-center items-center mb-16">
        <img
          src={banner}
          alt="Meghalaya Mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark bg-opacity-60"></div>
        <h1 className="relative text-5xl md:text-7xl font-extrabold text-textPrimary z-10 tracking-wide uppercase">
          Contact Us
        </h1>
      </section>

      {/* Contact Details and Form Section */}
      <div className="flex flex-col xl:flex-row justify-between items-start gap-16 px-6 md:px-20 max-w-8xl mx-auto">
        {/* Contact Details */}
        <div className="xl:w-2/3 w-full space-y-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Office Address</h3>
            <p className="text-dark text-lg">
              <MdLocationOn className="inline-block mr-2 text-primary" />
              Shillong 793008, Meghalaya
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Contact Numbers</h3>
            <p className="text-dark text-lg mb-2">
              <MdPhone className="inline-block mr-2 text-primary" />
              +91 87947 95255
            </p>
            <p className="text-dark text-lg">
              <MdPhone className="inline-block mr-2 text-primary" />
              +91 81198 29466
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Contact Person</h3>
            <p className="text-dark text-lg">
              <strong>Mr. Raynauld Mark Pasi</strong>
              <br />
              Business Director
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Contact Emails</h3>
            <p className="text-dark text-lg mb-2">
              <MdEmail className="inline-block mr-2 text-primary" />
              meghalayaintothemountains@gmail.com
            </p>
            <p className="text-dark text-lg">
              <MdEmail className="inline-block mr-2 text-primary" />
              raynauld1318@gmail.com
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="xl:w-1/3 w-full bg-white p-10 rounded-xl shadow-lg xl:sticky xl:top-24">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Get in Touch</h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;