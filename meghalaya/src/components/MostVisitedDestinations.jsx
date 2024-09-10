import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import shillong from '../assets/images/iftekhar-nibir-XKCFg-wJx8M-unsplash.webp';
import sohra from '../assets/images/image15.webp';
import dawki from '../assets/images/image38.webp';
import Shnongpdeng from '../assets/images/image31.webp';
import jainitia from '../assets/images/shillongImage.webp';
import assam from '../assets/images/ashwina-kumar-MZS-QFeeVPc-unsplash.webp';
import Mawlyngbna from '../assets/images/image29.webp';
import Mawsynram from '../assets/images/mawsy2.webp';
import garo from '../assets/images/garo-hills.webp';

const MostVisitedDestinations = () => {
  const destinations = [
    { name: 'Jaintia Hills', imgSrc: shillong, to: '/Jaintia%20hills' },
    { name: 'Sohra', imgSrc: sohra, to: '/Sohra' },
    { name: 'Dawki (Umngot River)', imgSrc: dawki, to: '/Jaintia%20hills' },
    { name: 'Shnongpdeng', imgSrc: Shnongpdeng, to: '/Jaintia%20hills' },
    { name: 'Shillong', imgSrc: jainitia, to: '/Shillong' },
    { name: 'Assam', imgSrc: assam, to: '/Assam' },
    { name: 'Mawlyngbna', imgSrc: Mawlyngbna, to: '/Shillong' },
    { name: 'Mawsynram', imgSrc: Mawsynram, to: '/South%20West%20Khasi%20Hills' },
    { name: 'Garo Hills', imgSrc: garo, to: '/Garo%20Hills' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="most-visited-destinations">
      <Slider {...settings}>
        {destinations.map((destination, index) => (
          <div key={index} className="px-2">
            <Link to={destination.to} className="block">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <img 
                  src={destination.imgSrc} 
                  alt={destination.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{destination.name}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MostVisitedDestinations;