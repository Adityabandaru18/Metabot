import { useState, useEffect } from 'react';
import Navigation from "./Navigation";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProfileAI from "../assets/profileAI.jpeg";
import rob from "../assets/15.png";
import PropTypes from 'prop-types';
import axios from "axios";

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

const Card = ({ bot }) => {
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

  return (
    <motion.a
      ref={ref}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.01 }} // Scale up slightly on hover
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-800 dark:bg-gray-800"
    >
      <img
        className="object-cover w-full rounded-t-lg h-48 md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
        src={ProfileAI}
        alt="Profile AI"
        loading="lazy"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Bot name: {bot.bot_name || 'Unknown'}
        </h5>
        <h4 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Company name: {bot.company_name || 'Unknown'}
        </h4>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Bot description: {bot.desc || 'No description available'}
        </p>
      </div>
    </motion.a>
  );
};

Card.propTypes = {
  bot: PropTypes.object.isRequired,
};

const MainHome = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/bots/");
        setBots(response.data);
      } catch (error) {
        console.error("Error fetching bots data", error);
      }
    };

    fetchBots();
  }, []);

  return (
    <div className="h-screen">
      <Navigation />
      <main className="sm:ml-64 pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 border-b border-gray-700 h-full">
        {/* Animated Text */}
        <img src={rob} className='w-96 h-60 m-auto hidden sm:block' loading="lazy" />
        <AnimatedText text="EXPLORE OUR ENDLESS CUSTOM BOTS HERE :)" />

        {/* Card Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 shadow-lg">
          {bots.map((bot, index) => (
            <Card key={index} bot={bot} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainHome;
