import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images
import image1 from "../assets/images/image23.webp";
import image2 from "../assets/images/chirayu-sharma-KAXnXl_S6K4-unsplash.webp";
import image3 from "../assets/images/umiam-lake.webp";
import image4 from "../assets/images/Mawlynnong-The-cleanest-city-in-Asia-soulveda.webp";
import image5 from "../assets/images/Laitlum_Canyons.webp";
import MostSellingPackage from "../components/MostSellingPackages";
import MostVisitedDestinations from "../components/MOstVisitedDestinations";
import OurServices from "../components/Services";
import FounderAndAwardsSection from "../components/FounderAndAwardsSection";
import PremiumCustomer from "../components/PremiumCustomer";
import TestimonialsSlider from "../components/Testimonial";

const locations = [
  { main_heading: "Shillong", main_link: "/Shillong" },
  { main_heading: "Sohra", main_link: "/Sohra" },
  { main_heading: "Jaintia Hills", main_link: "/Jaintia Hills" },
  {
    main_heading: "South West Khasi Hills",
    main_link: "/South West Khasi Hills",
  },
  { main_heading: "Garo Hills", main_link: "/Garo Hills" },
  { main_heading: "Assam", main_link: "/Assam" },
];

const bannerImages = [
  { image: image1, title: "Double Decker Living Root Bridge" },
  { image: image2, title: "Nohkalikai Waterfalls" },
  { image: image3, title: "Umiam Lake" },
  { image: image4, title: "Mawlynnong Village" },
  { image: image5, title: "Laitlum Canyon" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section with Carousel */}
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
        className="banner-carousel"
      >
        {bannerImages.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-dark bg-opacity-40">
              <h2 className="text-4xl font-bold text-textPrimary">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>

      {/* About Us Section */}
      <section className="bg-light py-16">
        <h1 className="text-primary text-4xl sm:text-5xl text-center font-extrabold mb-12">
          About Us
        </h1>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Column */}
            <div className="md:w-1/2 w-full mb-8 md:mb-0">
              <div className="relative rounded-lg overflow-hidden">
                {/* SVG content remains the same */}
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={580}
                  height={500}
                  fill="none"
                  viewBox="0 0 580 448"
                >
                  <rect
                    width={180}
                    height={311}
                    x={400}
                    fill="url('#a')"
                    rx={90}
                  />
                  <rect
                    width={180}
                    height={311}
                    x={400}
                    fill="#051721"
                    fillOpacity={0.2}
                    rx={90}
                  />
                  <path
                    fill="url('#b')"
                    fillRule="evenodd"
                    d="M390 116.932a90.77 90.77 0 0 0-13-.932h-20c-49.706 0-90 40.294-90 90v152c0 49.706 40.294 90 90 90h20c49.706 0 90-40.294 90-90v-34.703c-43.86-8.412-77-46.984-77-93.297V116.932Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="url('#c')"
                    fillRule="evenodd"
                    d="M95 0C42.533 0 0 42.533 0 95v258c0 52.467 42.533 95 95 95h84c36.248 0 67.755-20.302 83.77-50.155-5.628-12.137-8.77-25.663-8.77-39.922V221.031c0-21.982 7.466-42.22 20-58.317V95c0-52.467-42.533-95-95-95H95Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="#051721"
                    fillOpacity={0.3}
                    fillRule="evenodd"
                    d="M95 0C42.533 0 0 42.533 0 95v258c0 52.467 42.533 95 95 95h84c36.248 0 67.755-20.302 83.77-50.155-5.628-12.137-8.77-25.663-8.77-39.922V221.031c0-21.982 7.466-42.22 20-58.317V95c0-52.467-42.533-95-95-95H95Z"
                    clipRule="evenodd"
                  />
                  <defs>
                    <pattern
                      id="a"
                      width={1}
                      height={1}
                      patternContentUnits="objectBoundingBox"
                    >
                      <use
                        xlinkHref="#d"
                        transform="matrix(.00259 0 0 .0015 -.795 0)"
                      />
                    </pattern>
                    <pattern
                      id="b"
                      width={1}
                      height={1}
                      patternContentUnits="objectBoundingBox"
                    >
                      <use
                        xlinkHref="#e"
                        transform="matrix(.0049 0 0 .00295 -.746 0)"
                      />
                    </pattern>
                    <pattern
                      id="c"
                      width={1}
                      height={1}
                      patternContentUnits="objectBoundingBox"
                    >
                      <use
                        xlinkHref="#f"
                        transform="matrix(.0006 0 0 .00037 -.728 0)"
                      />
                    </pattern>
                    <image id="d" width={1000} height={667} href={image1} />
                    <image id="e" width={509} height={339} href={image2} />
                    <image id="f" width={4096} height={2726} href={image3} />
                  </defs>
                </svg>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold mb-4 text-secondary">
                Plan Your Trip
              </h2>
              <p className="mb-4 text-dark">
                Meghalaya - Into the Mountains is a travel company that offers
                various tour packages to the beautiful state of Meghalaya. This
                Northeastern state is known for its breathtaking landscapes,
                cascading waterfalls, and vibrant culture.
              </p>
              <p className="text-dark">
                The company provides personalized itineraries to suit the needs
                and preferences of its customers, ensuring a memorable trip.
                Additionally, the company also offers adventure activities like
                trekking and caving, providing an exciting and unique
                experience. With Meghalaya - Into the Mountain Services,
                travelers can discover the hidden gems of Meghalaya and immerse
                themselves in its natural beauty and rich heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Most Selling Packages */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-textPrimary">
            Most Selling Packages
          </h2>
          <MostSellingPackage />
        </div>
      </section>

      {/* Most Visited Destinations */}
      <section className="bg-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Most Visited Destinations
          </h2>
          <div className="">
            <MostVisitedDestinations />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-textPrimary">
            Our Services
          </h2>
          <OurServices />
        </div>
      </section>

      {/* Testimonials */}
      <FounderAndAwardsSection/>

      <PremiumCustomer/>

      <TestimonialsSlider/>
    </div>
  );
};

export default Home;
