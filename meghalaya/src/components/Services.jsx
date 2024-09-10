import React from 'react';
import { FaBriefcase, FaMap, FaCompass, FaUsers, FaMountain } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-light p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-white">
    <Icon className="text-4xl text-secondary mb-4" />
    <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-dark">{description}</p>
  </div>
);

const OurServices = () => (
  <section className="py-16 bg-light">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={FaMap}
          title="Customized Itineraries"
          description="Tailored travel plans designed to match your interests and preferences."
        />
        <ServiceCard
          icon={FaBriefcase}
          title="Comprehensive Tour Packages"
          description="All-inclusive packages with transparent pricing for a hassle-free experience."
        />
        <ServiceCard
          icon={FaCompass}
          title="Seamless Reservations"
          description="Effortless booking of accommodations and transportation for a smooth journey."
        />
        <ServiceCard
          icon={FaUsers}
          title="Expert Local Guides"
          description="Knowledgeable guides offering insights into Meghalaya's culture and history."
        />
        <ServiceCard
          icon={FaMountain}
          title="Exciting Activities"
          description="Thrilling experiences from trekking to caving for unforgettable adventures."
        />
      </div>
    </div>
  </section>
);

export default OurServices;