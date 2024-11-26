import React from 'react';
import './about.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to Tasty Food! We are passionate about delivering the most
        delicious meals straight to your table. Founded in [Year], our goal has
        always been to provide our customers with an exceptional dining experience.
      </p>
      <p>
        At Tasty Food, we believe that good food brings people together. Our
        menu features a wide variety of dishes from around the world, made with
        the freshest ingredients and authentic recipes. Whether you're in the mood
        for spicy Szechuan noodles or comforting Italian pasta, we have
        something for everyone!
      </p>
      <p>
        Our dedicated team of chefs and staff work tirelessly to ensure that
        every meal is prepared with care and attention. We prioritize quality and
        customer satisfaction above all else.
      </p>
      <p>
        Thank you for choosing Tasty Food. We look forward to serving you and
        being a part of your culinary journey!
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Quality: We use only the best ingredients.</li>
        <li>Freshness: Our meals are made to order.</li>
        <li>Sustainability: We support local suppliers.</li>
        <li>Community: We give back to our local community.</li>
      </ul>
    </div>
  );
};

export default AboutUs;
