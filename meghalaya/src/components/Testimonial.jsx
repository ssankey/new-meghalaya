import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('https://meghalaya-tourism.onrender.com/api/reviews');
      setTestimonials(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching reviews', error.message);
      setIsLoading(false);
    }
  };

  const takeToReview = () => {
    navigate('/write-review');
  };

  const StarRating = ({ rating }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-green-900 sm:text-4xl text-center mb-12">
          What Our Customers Say
        </h2>
        
        {isLoading ? (
          <div className="text-center text-green-700">Loading testimonials...</div>
        ) : testimonials.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <p className="text-green-800 mb-4 h-32 overflow-y-auto">"{testimonial.message}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-green-900">{testimonial.name}</h3>
                      <StarRating rating={testimonial.rating} />
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-bold text-xl">{testimonial.name.charAt(0)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-green-700">No testimonials available at the moment.</div>
        )}
        
        <div className="text-center mt-12">
          <button
            onClick={takeToReview}
            className="bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition-colors duration-300"
          >
            Share Your Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;