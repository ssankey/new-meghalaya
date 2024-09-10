import React from 'react';
import { Helmet } from 'react-helmet';

// Assume these imports are correct
import BannerImage from '../assets/images/iftekhar-nibir-XKCFg-wJx8M-unsplash.webp';
import CampingImage from '../assets/images/camping.webp';
import SafariImage from '../assets/images/safari.webp';
import TrekkingImage from '../assets/images/hiking.webp';
import SightseeingImage from '../assets/images/iftekhar-nibir-XKCFg-wJx8M-unsplash.webp';
import RaftingImage from '../assets/images/rafting.webp';
import Form from '../components/Form';

const services = [
  {
    title: "Camping",
    image: CampingImage,
    description: "Experience the beauty of nature with our enchanting camping sites.",
  },
  {
    title: "Safari",
    image: SafariImage,
    description: "Discover untouched flora & fauna with our expertly guided safaris.",
  },
  {
    title: "Trekking",
    image: TrekkingImage,
    description: "Embark on soulful adventures with our varied trekking experiences.",
  },
  {
    title: "Sightseeing",
    image: SightseeingImage,
    description: "Treat your eyes to breathtaking views and unforgettable landscapes.",
  },
  {
    title: "Rafting",
    image: RaftingImage,
    description: "Challenge yourself with thrilling white water rafting adventures.",
  },
];

const Services = () => {
  return (
    <div className="bg-light min-h-screen">
      <Helmet>
        <title>Services | Meghalaya - Into The Mountains</title>
        <meta
          name="description"
          content="Explore a variety of adventure services offered by Meghalaya - Into The Mountains. From camping and trekking to safari and rafting, discover thrilling experiences with Lets See Tour and Travels."
        />
      </Helmet>
      
      {/* Banner Section */}
      <section className="relative h-[60vh] flex justify-center items-center mb-16">
        <img
          src={BannerImage}
          alt="Meghalaya Mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark bg-opacity-40"></div>
        <h1 className="relative text-5xl md:text-7xl font-extrabold text-textPrimary z-10 tracking-wide">
          OUR SERVICES
        </h1>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-20 text-center max-w-3xl mx-auto mb-16">
        <p className="text-xl md:text-2xl text-dark leading-relaxed font-light">
          Embark on soul-stirring adventures that go beyond the ordinary. Our services are designed to ignite your spirit, challenge your limits, and create memories that last a lifetime.
        </p>
      </section>

      {/* Services and Form Section */}
      <div className="flex flex-col xl:flex-row justify-between items-start gap-16 px-6 md:px-20 max-w-8xl mx-auto">
        {/* Services Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:w-2/3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-dark text-lg leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Form Section */}
        <div className="xl:w-1/3 w-full bg-white p-6 rounded-xl shadow-lg xl:sticky xl:top-24">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Book Your Adventure</h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Services;