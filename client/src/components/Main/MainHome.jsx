import { useState, useEffect } from 'react';
import Navigation from "./Navigation";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import rob from "../assets/15.png";
import PropTypes from 'prop-types';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import images from './images';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      repeat: Infinity,
      repeatType: 'loop',
      delayChildren: 0.5,
    },
  },
};

const child = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedText = (props) => {
  return (
    <motion.div
      className="text-xl md:text-xl lg:text-4xl font-semibold text-gray-300 mt-6 text-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {props.text.split('').map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
};

const Card = ({ bot, navigate,i }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleCardClick = () => {
    const { uuid, bot_name, company_name } = bot;
    navigate(`/main/${bot.id}`, { state: { uuid, bot_name, company_name } });
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.01 }} // Scale up slightly on hover
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-800 dark:bg-gray-800"
      onClick={handleCardClick}
    >
     <img
  className="object-cover w-full md:w-44 md:h-44 rounded-lg"
  src={images[i]}
  alt="Profile AI"
  loading="lazy"
/>

      <div className="flex flex-col justify-between p-4 leading-normal">
        <h4 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {bot.company_name || 'Unknown'}
        </h4>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {bot.desc || 'No description available'}
        </p>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  bot: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

const MainHome = () => {
  const navigate = useNavigate();
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/bots/");
        console.log(response);
        setBots(response.data);
      } catch (error) {
        console.error("Error fetching bots data", error);
      }
    };

    fetchBots();
  }, []);

  return (
    <div className="h-full">
      <Navigation />
      <main className="sm:ml-64 pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 border-b border-gray-700 h-full">
        <img src={rob} className='w-96 h-60 m-auto hidden sm:block' loading="lazy" />
        <AnimatedText text="EXPLORE OUR ENDLESS CUSTOM BOTS HERE :)" />
        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 shadow-lg">
          {bots.map((bot, index) => (
            <Card key={index} bot={bot} navigate={navigate} i={index}/>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainHome;
