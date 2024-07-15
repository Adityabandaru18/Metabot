import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from "./Navigation";
import ProfileAI from "../assets/creatnew.webp";
import Demo from "../assets/Demo.png";
import axios from 'axios';
import { useSelector } from "react-redux";

const Createnew = () => {
  const [showModal, setShowModal] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileConfirmed, setFileConfirmed] = useState(false);
  const [profileImage, setProfileImage] = useState(ProfileAI);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const uuid = useSelector((state) => state.uid.text);

  // Bot details
  const [owner, setOwner] = useState("");
  const [company, setCompany] = useState("");
  const [bot, setBot] = useState("");
  const [description, setDescription] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [excelFileName, setExcelFileName] = useState(""); // Added state for Excel file name

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
      if (file.size <= 2 * 1024 * 1024) {
        setUploadedFile(file);
        setExcelFileName(file.name); // Set the file name
        console.log(file.name);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!uuid) {
      setErrorMessage('Please log in first.');
      openModal();
      return;
    }
    if (!fileConfirmed) {
      setErrorMessage('Please confirm the file before submitting.');
      openModal();
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append('uuid', uuid);
    formData.append('owner_name', owner);
    formData.append('company_name', company);
    formData.append('category', bot);
    formData.append('description', description);
    formData.append('contact_number', contactNumber);
    formData.append('profile', profileImage);
    formData.append('excel_sheet', excelFileName); // Send only the file name
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/createbot/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form', error);
      setErrorMessage('There was an error submitting the form. Please try again.');
      openModal();
    } finally {
      setLoading(false);
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
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Form fields */}
            <div className="flex flex-col">
              <label className="text-xl text-white mb-2">Owner name:</label>
              <input
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                placeholder="Enter your username here"
                className="w-full px-4 py-2 text-black rounded-lg"
                disabled={!uuid}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl text-white mb-2">Company name:</label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Adidas"
                className="w-full px-4 py-2 text-black rounded-lg"
                disabled={!uuid}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl text-white mb-2">Bot name:</label>
              <input
                value={bot}
                onChange={(e) => setBot(e.target.value)}
                placeholder="Adidas Bot..."
                className="w-full px-4 py-2 text-black rounded-lg"
                disabled={!uuid}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl text-white mb-2">Contact number:</label>
              <input
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Enter your contact number"
                className="w-full px-4 py-2 text-black rounded-lg"
                disabled={!uuid}
                required
              />
            </div>
            <div className="flex flex-col sm:col-span-2">
              <label className="text-xl text-white mb-2">Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter the description of your Bot"
                className="w-full px-4 py-2 text-black rounded-lg"
                disabled={!uuid}
                required
              ></textarea>
            </div>
            <div className="flex flex-col sm:col-span-2">
              <label className="text-xl text-white mb-2">Excel sheet / Google sheet:</label>
              <p className="text-sm mt-1 font-normal text-gray-400">
                *Remember to add all the details of the products / services available in the store<br />
                *Also note that the size of the file must be under 2MB
              </p>
              <button type="button" className="rounded-[5px] px-3 py-1 text-sm mt-3 bg-green-700 text-white" onClick={openModal} disabled={!uuid}>See demo</button>
              <label className="inline-block bg-pink-700 text-white px-4 py-2 cursor-pointer mt-3 text-center">
                Upload File
                <input type="file" className="hidden" accept=".csv, .xlsx, .xls" onChange={handleFileChange} disabled={!uuid}/>
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
                      disabled={!uuid}
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
                  <input type="file" className="hidden" accept="image/*" onChange={handleProfileImageChange} disabled={!uuid}/>
                </label>
              </div>
            </div>
            <div className="flex justify-center mt-8 sm:col-span-2 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                type="button"
                className="rounded-full bg-white text-black px-6 py-2"
                disabled={!uuid}
              >
                Discard changes
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                type="submit"
                className="rounded-full bg-pink-700 text-white px-6 py-2"
                disabled={!uuid}
              >
                {loading ? 'Creating...' : 'Create bot'}
              </motion.button>
            </div>
          </form>
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
};

export default Createnew;
