import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MostSellingPackage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/selling-packages?populate=*`, {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`
          }
        });
        const data = await response.json();
        setPackages(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching packages:', error);
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const getDescriptionText = (description) => {
    if (!description || !Array.isArray(description) || description.length === 0) {
      return 'No description available.';
    }

    const firstParagraph = description[0];
    if (firstParagraph.type === 'paragraph' && Array.isArray(firstParagraph.children)) {
      const textContent = firstParagraph.children
        .filter(child => child.type === 'text')
        .map(child => child.text)
        .join(' ');

      return textContent.length > 100 ? `${textContent.substring(0, 100)}...` : textContent;
    }

    return 'No description available.';
  };

  return (
    <div className="w-full mx-auto px-4 py-6">
      {loading ? (
        <p className="text-center text-xl">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <img
                loading="lazy"
                src={`${import.meta.env.VITE_APP_API_URL}${pkg.attributes.image?.data?.attributes?.url || '/api/placeholder/400/320'}`}
                alt={pkg.attributes.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {pkg.attributes.name}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {getDescriptionText(pkg.attributes.description)}
                </p>
                <Link
                  to={`/tour-package/${encodeURIComponent(pkg.attributes.name)}`}
                  className="inline-block bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300 text-center mt-auto"
                >
                  Explore Package Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MostSellingPackage;