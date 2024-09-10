import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tour from "../pages/Tour";
import TourDetails from "../pages/TourDetails";
import ThankYou from "../pages/ThankYou";
import Review from "../pages/Review";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/:locationName" element={<Tour />} />
      <Route path="/tour-package/:packageDetails" element={<TourDetails />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/write-review" element={<Review />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default Router;