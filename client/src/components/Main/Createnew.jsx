import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from "./Navigation";
import ProfileAI from "../assets/creatnew.webp";
import Demo from "../assets/Demo.png";
import axios from 'axios';

const Createnew = () => {
  const [showModal, setShowModal] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileConfirmed, setFileConfirmed] = useState(false);
  const [profileImage, setProfileImage] = useState(ProfileAI);
  const [errorMessage, setErrorMessage] = useState('');

  //Bot details

  const [owner,setowner] = useState("");
   const [company,setcompany] = useState("");
   const [bot,setbot] = useState("");
   const [description,setdescription] = useState("");
   const [excel,setexcel] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setErrorMessage('');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.size <= 2 * 1024 * 1024) { // 2MB in bytes
        setUploadedFile(file);
        setFileConfirmed(false);
      } else {
        setErrorMessage('File size exceeds 2MB. Please upload a smaller file.');
        openModal();
      }
    }
  };

  const handleRadioChange = () => {
    setFileConfirmed(!fileConfirmed);
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {!showModal && <Navigation />}

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20 px-4 sm:px-6 lg:px-8 text-white bg-gray-900 border-b border-gray-700 min-h-screen sm:ml-20"
      >
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-md p-6"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Create your custom bot</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-xl text-white mb-2">Owner name:</label>
              <input
                placeholder="Enter your username here"
                className="w-full px-4 py-2 text-black rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl text-white mb-2">Company name:</label>
              <input
                placeholder="Adidas"
                className="w-full px-4 py-2 text-black rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl text-white mb-2">Bot name:</label>
              <input
                placeholder="Adidas Bot..."
                className="w-full px-4 py-2 text-black rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl text-white mb-2">Contact number:</label>
              <input
                placeholder="Enter your contact number"
                className="w-full px-4 py-2 text-black rounded-lg"
              />
            </div>
            <div className="flex flex-col sm:col-span-2">
              <label className="text-xl text-white mb-2">Description:</label>
              <textarea
                placeholder="Enter the description of your Bot"
                className="w-full px-4 py-2 text-black rounded-lg"
              ></textarea>
            </div>
            <div className="flex flex-col sm:col-span-2">
              <label className="text-xl text-white mb-2">Excel sheet / Google sheet:</label>
              <p className="text-sm mt-1 font-normal text-gray-400">
                *Remember to add all the details of the products / services available in the store<br />
                *Also note that the size of the file must be under 2MB
              </p>
              <button className="rounded-[5px] px-3 py-1 text-sm mt-3 bg-green-700 text-white" onClick={openModal}>See demo</button>
              <label className="inline-block bg-pink-700 text-white px-4 py-2 cursor-pointer mt-3 text-center">
                Upload File
                <input type="file" className="hidden" accept=".csv, .xlsx, .xls" onChange={handleFileChange} />
              </label>
              {uploadedFile && (
                <div className="mt-3">
                  <p className="text-white">Uploaded file: {uploadedFile.name}</p>
                  <div className="flex items-center mt-2">
                    <input 
                      type="radio" 
                      id="confirmFile" 
                      name="confirmFile" 
                      checked={fileConfirmed} 
                      onChange={handleRadioChange} 
                    />
                    <label htmlFor="confirmFile" className="text-white ml-2">Confirm file</label>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col sm:col-span-2">
              <label className="text-xl text-white mb-2">Bot Profile:</label>
              <div className="flex items-center space-x-4">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full"
                  loading="lazy"
                />
                <label className="rounded-full bg-white text-black px-4 py-2 font-outfit cursor-pointer">
                  Upload profile
                  <input type="file" className="hidden" accept="image/*" onChange={handleProfileImageChange}/>
                </label>
              </div>
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
              Create bot
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
          {errorMessage ? (
            <motion.div 
              initial={{ scale: 0.3 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-4 text-black"
            >
              <h2 className="text-xl font-bold mb-4">Error</h2>
              <p>{errorMessage}</p>
              <button 
                className="mt-4 px-4 py-2 bg-pink-700 text-white rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </motion.div>
          ) : (
            <motion.img 
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              src={Demo}
              alt="Demo Image"
              loading="lazy"
              className="max-w-[60%] max-h-[60%] rounded-lg"
            />
          )}
        </motion.div>
      )}
    </>
  );
}

export default Createnew;
