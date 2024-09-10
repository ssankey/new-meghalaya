import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Form from "../components/Form";

const Tour = () => {
  const { locationName } = useParams();
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_APP_API_URL
          }/api/locations?populate[0]=image&populate[1]=facts&populate[2]=sublocations&populate[3]=sublocations.image&populate[4]=things_to_dos&populate[5]=things_to_dos.image`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        const foundLocation = data.data.find(
          (location) =>
            location.attributes.name.toLowerCase() ===
            locationName?.toLowerCase()
        );
        setLocationData(foundLocation);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching location data:", error);
        setLoading(false);
      }
    };

    fetchLocationData();
  }, [locationName]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          {/* <ChevronDown size={48} className="text-primary" /> */}
        </motion.div>
      </div>
    );
  }

  if (!locationData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light text-xl font-semibold text-dark">
        Location not found
      </div>
    );
  }

  const {
    attributes: {
      name,
      description,
      image,
      facts,
      sublocations,
      things_to_dos: thingsToDo,
    },
  } = locationData;

  const getImageUrl = (imageData) => {
    if (imageData && imageData.data && imageData.data.attributes) {
      return `${import.meta.env.VITE_APP_API_URL}${
        imageData.data.attributes.url
      }`;
    }
    return null;
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Safely access description text if it's already an object
  const getDescriptionText = () => {
    if (
      description &&
      Array.isArray(description) &&
      description.length > 0 &&
      description[0].children &&
      description[0].children.length > 0
    ) {
      return description[0].children[0].text;
    }
    return "Description not available.";
  };

  return (
    <div className="bg-light min-h-screen">
      <Helmet>
        <title>{name} Tour | Meghalaya Into The Mountains</title>
        <meta
          name="description"
          content={`Explore the beauty of ${name}. Discover places to visit, things to do, and more with Lets See Tour and Travels.`}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={getImageUrl(image)}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <div className="max-w-4xl w-full mt-16 sm:mt-24 md:mt-32">
            {" "}
            {/* Added top margin */}
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              {name}
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-white px-4"
              style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)" }}
            >
              {getDescriptionText()}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-textPrimary">
            Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-xl text-textPrimary">
                  {fact.children[0].children[0].text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Places to Visit Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-dark">
            Places to Visit
          </h2>
          <Slider {...sliderSettings} className="places-slider">
            {sublocations.data.map((subLocation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="px-4"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="overflow-hidden rounded-t-xl">
                    <motion.img
                      src={getImageUrl(subLocation.attributes.image)}
                      alt={subLocation.attributes.name}
                      className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-64">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">
                      {subLocation.attributes.name}
                    </h3>
                    <p className="text-dark text-lg mb-4 line-clamp-3">
                      {subLocation.attributes.description.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                    <button className="mt-auto self-start bg-secondary text-textPrimary py-2 px-4 rounded-full shadow-md hover:bg-accent transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Things to Do Section */}
      {thingsToDo.data.length > 0 && (
        <section className="py-24 bg-primary">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-textPrimary">
              Things to Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {thingsToDo.data.map((todo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={getImageUrl(todo.attributes.image)}
                    alt={todo.attributes.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">
                      {todo.attributes.name}
                    </h3>
                    <p className="text-dark text-lg">
                      {todo.attributes.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Book Your Tour Section */}
      <section className="py-24 bg-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-dark">
            Book Your Tour
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-5 rounded-lg shadow-lg"
          >
            <p className="text-center mb-8 text-dark text-xl">
              Ready to explore {name}? Book your tour now!
            </p>
            <Form />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tour;
