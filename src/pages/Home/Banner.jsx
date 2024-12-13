import React from 'react';
import { motion } from "framer-motion";
import image from '../../assets/images/1.jpg'

const Banner = () => {
 return (
  <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <motion.h2 
      animate={{ x: 100 }}
      transition={{ duration: 0.3, delay: 1, ease: "linear" }}
      className="text-5xl font-bold">Box Office News!
      </motion.h2>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
 );
};

export default Banner;