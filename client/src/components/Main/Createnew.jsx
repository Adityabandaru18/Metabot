import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from "./Navigation";
import ProfileAI from "../assets/creatnew.webp";
import Demo from "../assets/Demo.png";

const Createnew = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {!showModal && <Navigation />}

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sm:ml-64 pt-20 px-4 sm:px-6 lg:px-8 text-white bg-gray-900 border-b border-gray-700 h-[150vh]"
      >
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-md p-6 sm:mt-3"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">Create your custom bot</h1>
          <div className="flex flex-col space-y-6">
            <div>
              <label className="inline-block text-xl text-white mb-2 font-outfit">Owner name:</label>
              <input
                placeholder="Enter your username here"
                className="inline-block w-64 px-4 py-2 text-black rounded-lg sm:ml-48"
              />
            </div>
            <div>
              <label className="inline-block text-xl text-white mb-2 font-outfit">Company name:</label>
              <input
                placeholder="Adidas"
                className="inline-block w-64 px-4 py-2 text-black rounded-lg sm:ml-[165px]"
              />
            </div>
            <div>
              <label className="inline-block text-xl text-white mb-2 font-outfit">Bot name:</label>
              <input
                placeholder="Adidas Bot..."
                className="inline-block w-64 px-4 py-2 text-black rounded-lg sm:ml-[217px]"
              />
            </div>
            <div>
              <label className="inline-block text-xl text-white mb-2 font-outfit">Contact number:</label>
              <input
                placeholder="Enter your contact number"
                className="inline-block w-64 px-4 py-2 text-black rounded-lg sm:ml-[157px]"
              />
            </div>
            <div>
              <label className="inline-block text-xl text-white mb-2 font-outfit">Address:</label>
              <input
                placeholder="Enter your contact number"
                className="inline-block w-64 px-4 py-2 text-black rounded-lg sm:ml-[227px]"
              />
            </div>
            <div>
              <label className="inline-block text-xl text-white mb-2 font-outfit">
                Excel sheet / Google sheet:
                <p className="text-sm mt-3 font-normal">
                  *Remember to add All the details of the<br /> products / services available in the store
                </p>
                <button className="rounded-[5px] px-3 py-1 text-sm mt-3 bg-green-700 text-white ml-10 hidden sm:block" onClick={openModal}>See demo</button>
              </label>
              <label className="inline-block bg-pink-700 text-white px-4 py-2 cursor-pointer sm:ml-16 relative sm:bottom-10 ml-12 mt-3">
                Upload File
                <input type="file" className="hidden" />
              </label>
            </div>
            <div className="flex justify-between">
              <div className="text-xl text-white font-outfit">Bot Profile:</div>
              <div>
                <img
                  src={ProfileAI}
                  alt="Profile"
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <button className="rounded-full bg-white text-black px-4 py-2 w-40 h-10 font-outfit">
                Upload profile
              </button>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-white text-black px-6 py-2"
            >
              Discard changes
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-pink-700 text-white px-6 py-2"
            >
              Save Changes
            </motion.button>
          </div>
        </motion.div>
      </motion.main>
      {showModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-99 bg-black"
          onClick={closeModal}
        >
          <motion.img 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            src={Demo}
            alt="Demo Image"
            className="max-w-[60%] max-h-[60%] rounded-lg"
          />
        </motion.div>
      )}
    </>
  );
}

export default Createnew;
