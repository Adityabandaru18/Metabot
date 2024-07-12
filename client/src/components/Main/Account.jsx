import { motion } from "framer-motion";
import Navigation from "./Navigation";
import ProfileAI from "../assets/profileAI.jpeg";

const Account = () => {
  return (
    <>
      <Navigation />

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 30 }}
        className="sm:ml-64 pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 border-b border-gray-700 h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-md p-6 sm:mt-32"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-8">Account Settings</h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Update Profile Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-xl text-white font-outfit">Update Profile</div>
              <motion.img
                src={ProfileAI}
                alt="Profile"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="rounded-full bg-white text-black px-4 py-2"
              >
                Change Picture
              </motion.button>
            </div>

            {/* Contact Information Section */}
            <div className="flex flex-col space-y-6">
              <div>
                <label className="block text-xl text-white mb-2 font-outfit">
                  Change Username:
                </label>
                <motion.input
                  whileFocus={{ scale: 1.05 }}
                  placeholder="Change your username here"
                  className="block w-full px-4 py-2 text-black rounded-lg"
                />
              </div>

              <div>
                <label className="block text-xl text-white mb-2 font-outfit">Change Email:</label>
                <motion.input
                  whileFocus={{ scale: 1.05 }}
                  placeholder="Metabot@gmail.com"
                  className="block w-full px-4 py-2 text-black rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ stiffness: 50, delay: 0.6 }}
            className="flex justify-center mt-8 space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-white text-black w-36"
            >
              Discard
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-pink-700 text-white px-3 py-2 sm:px-6 sm:py-2"
            >
              Apply Changes
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Account;
