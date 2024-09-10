import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heroImage from '../assets/images/hero.webp';
import awardImage1 from '../assets/images/award1.webp';
import awardImage2 from '../assets/images/award2.webp';
import { FaChevronRight } from 'react-icons/fa';


const FounderAndAwardsSection = () => {
  return (
    <>
      {/* Founder Section */}
      <section className="py-24 bg-gradient-to-b from-light to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Raynauld Mark Pasi" 
                  className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-primary opacity-20 rounded-lg"></div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-16">
              <h2 className="text-4xl font-bold text-primary mb-6 font-serif">Meet Our Visionary</h2>
              <h3 className="text-2xl font-semibold text-secondary mb-6">Mr. Raynauld Mark Pasi</h3>
              <p className="text-dark mb-6 leading-relaxed">
                Known affectionately as Bonn, Raynauld is the visionary behind Meghalaya - Into the Mountains. With a background in engineering and a heart full of passion for nature, he established this premier tour company 15 years ago.
              </p>
              <p className="text-dark mb-8 leading-relaxed">
                Bonn's decision to follow his love for Meghalaya's beauty has led to a fulfilling career where he shares his enthusiasm and knowledge with discerning travelers from around the world.
              </p>
              <button className="bg-secondary hover:bg-accent text-textPrimary font-bold py-3 px-6 rounded-full transition duration-300 flex items-center group">
                Discover Bonn's Journey
                <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-gradient-to-b from-primary to-secondary text-textPrimary">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">Our Esteemed Accolades</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-16">
              <h3 className="text-3xl font-bold text-accent mb-6">Recognition for Excellence</h3>
              <p className="mb-6 leading-relaxed">
                Meghalaya - Into the Mountains was honored by Chief Minister Shri Conrad Sangma for our outstanding contribution to promoting high-end tourism in the region.
              </p>
              <p className="mb-8 leading-relaxed">
                This prestigious award recognizes our unwavering commitment to enhancing the luxury tourism experience through substantial investment in top-quality vehicles and unparalleled services.
              </p>
              <button className="bg-accent hover:bg-light hover:text-dark text-textPrimary font-bold py-3 px-6 rounded-full transition duration-300 flex items-center group">
                Explore Our Achievements
                <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Carousel 
                  showThumbs={false} 
                  infiniteLoop 
                  autoPlay 
                  interval={5000}
                  showStatus={false}
                  className="bg-dark"
                >
                  <div>
                    <img src={awardImage1} alt="Award Ceremony" className="w-full h-auto" />
                  </div>
                  <div>
                    <img src={awardImage2} alt="Award Certificate" className="w-full h-auto" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FounderAndAwardsSection;