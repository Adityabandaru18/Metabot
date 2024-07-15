import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { motion } from 'framer-motion';
import profile from "../assets/profileAI.jpeg";
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Rooms = () => {
  const location = useLocation();
  const { state } = location;
  const { company_name} = state;
  const uuid = useSelector((state)=>state.uid.text);
  const { id } = useParams();
  console.log(id);

  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", type: "bot" }
  ]);
  const [inputText, setInputText] = useState("");
  const [userId, setUserId] = useState(null);
  const [render,setrender] = useState(true);
  const handleSendMessage = () => {
   

    const fetchBotData1 = async () => {
      try {

       const formData = new FormData();
       const u1 = uuid;
       formData.append('uuid', u1);
       formData.append('body', inputText);
        const response = await axios.post(`http://127.0.0.1:8000/api/bot/${id}/`,formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        let acc = new Array();
        acc.push({ text: response.data[0].body, type: "user" });
        acc.push({ text: response.data[0].sender, type: "bot" });
        setMessages(acc);
        setrender(!render);
        console.log("Bot data fetched:", response.data);
        processBotData(response.data);
      } catch (error) {
        console.error('Error while fetching bot data:', error);
      }
    };

    const processBotData = (botData) => {
      if (userId) {
        const formattedMessages = botData.reduce((acc, data) => {
          if (data.user === userId) {
            acc.push({ text: data.body, type: "user" });
            acc.push({ text: data.sender, type: "bot" });
            return acc;
          }
      
        }, []);
        setMessages(formattedMessages);
      }
    };

    fetchBotData1();


  };

  useEffect(() => {
    const fetchUserId = async () => {
      const formData = new FormData();
      const u1 = uuid;
      formData.append('uuid', u1);

      try {
        const response = await axios.post("http://127.0.0.1:8000/api/getuser/", formData);
        setUserId(response.data.id);
        console.log("User ID fetched:", response.data.id);
      } catch (error) {
        console.error('Error while fetching user ID:', error);
      }
    };

    const fetchBotData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/bot/${id}/`);
        console.log("Bot data fetched:", response.data);
        processBotData(response.data);
      } catch (error) {
        console.error('Error while fetching bot data:', error);
      }
    };

    const processBotData = (botData) => {
      if (userId) {
        const formattedMessages = botData.reduce((acc, data) => {
          if (data.user === userId) {
            acc.push({ text: data.body, type: "user" });
            acc.push({ text: data.sender, type: "bot" });
          }
          return acc;
        }, []);
        setMessages(formattedMessages);
      }
    };

    fetchUserId();
    fetchBotData();
  }, [id, userId,render,uuid]);

  return (
    <>
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col h-screen bg-gray-900 sm:ml-64 pt-20 px-4 sm:px-6 lg:px-8 border-b border-gray-700"
      >
        {/* Header with bot name and image */}
        <div className="flex justify-between items-center py-3 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center"
          >
            <img
              className="rounded-full h-12 w-12 mr-2"
              src={profile}
              alt="Bot Avatar"
            />
            <span className="text-white text-ms">{company_name}</span>
          </motion.div>
          {/* You can add any additional header content here */}
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto px-4 py-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} mb-2`}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className={`max-w-sm px-3 py-2 rounded-lg ${message.type === "user" ? "bg-blue-500 text-white" : "bg-gray-700 text-white"}`}
              >
                {message.text}
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center py-2 sticky bottom-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-2 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Send
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Rooms;
