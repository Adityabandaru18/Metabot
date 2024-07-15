import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import create from "../assets/school-stationery-isolated-white-background.jpg";
import ai3 from "../assets/bag-full-vegetables.jpg"

import robocry from "../assets/robo cry.png";


const bots = [
  { id: 1, name: "PaperCanvas", description: "Your go-to destination for stylish notebooks, planners, and desk accessories.", image: create },
  { id: 2, name: "Desi Dukan", description: "A one-stop shop for authentic Indian groceries, from masalas to millets, bringing the taste of India to your kitchen.", image: ai3 }]
 

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Managebot = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [selectedBot, setSelectedBot] = useState(null); // To track which bot is being edited or deleted

  const handleEdit = () => {
    // setSelectedBot(bot);
    setShowEditModal(true);
  };

  const handleDelete = () => {
    // setSelectedBot(bot);
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
  };

  return (
    <>
      <Navigation />
      <div className="sm:ml-64 pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 border-b border-gray-700 h-screen">
        {bots.length !== 0 ? (
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold sm:mb-8 text-gray-300 text-center mt-5 mb-6">Manage your bots here</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {bots.map(bot => (
                <motion.div
                  key={bot.id}
                  className="bg-gray-800 rounded-lg shadow-lg flex flex-col items-center"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.8 }}
                >
                  <img src={bot.image} alt={bot.name} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="flex-1 w-full text-left px-2 py-4">
                    <h2 className="text-xl font-bold text-gray-200">{bot.name}</h2>
                    <p className="text-gray-400">{bot.description}</p>
                  </div>
                  <div className="flex justify-end space-x-2 w-full px-2 pb-4">
                    <button onClick={() => handleEdit(bot)} className="bg-blue-500 text-white px-7 py-2 rounded-lg">Edit</button>
                    <button onClick={() => handleDelete(bot)} className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            className="text-center flex flex-col items-center justify-center h-screen relative bottom-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-200">
              You dont have your own Chatbots. <br className="hidden sm:block" />Get one <br className="sm:hidden" />and come back here again.
            </h1>
            <img src={robocry} className="w-44 h-44 block mt-10" alt="robocry" loading="lazy"/>
          </motion.div>
        )}

        {/* Edit Modal */}
        {showEditModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-99 flex items-center justify-center">
            {/* Modal content */}
            <div className="bg-gray-800 rounded-lg p-6 w-full sm:max-w-lg">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">Edit Bot Details</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-200 text-ms font-bold mb-2">Owner Name:</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Owner Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-200 text-ms font-bold mb-2">Company Name:</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Company Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-200 text-ms font-bold mb-2">Contact Number:</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Contact Number" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-200 text-ms font-bold mb-2">Bot Name:</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Bot Name" />
                </div>
                <div className="mb-4">
                <label className="block text-gray-200 text-ms font-bold mb-2">Excel sheet:</label>
                <label className="inline-block bg-pink-700 text-white px-4 py-2 cursor-pointer mt-3 text-center w-full">
                Upload your modified File
                <input type="file" className="hidden" accept=".csv, .xlsx, .xls" />
              </label>
                </div>
                <div className="flex items-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5" type="button">
                    Save
                  </button>
                  <button onClick={closeModal} className="bg-gray-600 text-white px-4 py-2 rounded-lg">Close</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-99 flex items-center justify-center">
            {/* Modal content */}
            <div className="bg-gray-800 rounded-lg p-6 w-full sm:max-w-lg">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">Are you sure you want to delete?</h2>
              {/* Confirmation text and buttons for delete */}
              <div className="flex items-center">
                <button onClick={closeModal} className="bg-gray-600 text-white px-4 py-2 rounded-lg mr-2">Cancel</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Confirm</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Managebot;
