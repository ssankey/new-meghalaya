import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sarah from '../assets/images/Sarah-Todd.webp';
import Sarah1 from '../assets/images/IMG-20230502-WA0034.webp';
import sarah2 from '../assets/images/sarah2.webp';
import sarah3 from '../assets/images/sarah3.webp';

const PremiumCustomer = () => {
  const slideImages = [Sarah, Sarah1, sarah2, sarah3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="bg-light py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Elevating Excellence in Every Journey
          </h2>
          <p className="text-xl text-dark">
            Quality isn't just a goal—it's our unwavering commitment.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h3 className="text-3xl font-semibold text-secondary mb-4">
                Proudly Presenting
              </h3>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Sarah Todd in Meghalaya
              </h2>
              <Slider {...settings} className="mb-8">
                {slideImages.map((image, index) => (
                  <div key={index} className="outline-none">
                  <img 
                    src={image} 
                    alt={`Sarah Todd ${index + 1}`} 
                    className="w-full h-96  object-cover object-center rounded-lg"
                  />
                </div>
                
                ))}
              </Slider>
            </div>
            <div className="md:w-1/2 bg-primary p-8 text-textPrimary">
              <h4 className="text-2xl font-semibold mb-4">About Sarah Todd</h4>
              <p className="mb-4">
                Sarah Todd, an acclaimed Australian chef, entrepreneur, and television personality, 
                graced Meghalaya with her presence. A finalist in MasterChef Australia's sixth season, 
                Sarah's culinary journey has taken her from Sydney's Quay to California's The French Laundry.
              </p>
              <p className="mb-4">
                Her entrepreneurial spirit shines through her two successful restaurants in Goa, India: 
                The Wine Rack and Antares. Sarah's commitment to healthy eating is evident in her cookbook, 
                "The Healthy Model Cookbook."
              </p>
              <p>
                Sarah's visit to Meghalaya is a testament to our commitment to providing world-class 
                experiences. Her journey with us showcases the unique beauty and flavors of our region 
                through the eyes of a global culinary icon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCustomer;