import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Atropos from "atropos/react";
import { NavLink } from "react-router-dom";
import {
    GoogleLoginButton,
  } from "react-social-login-buttons";
  
function Login() {
  // Refs
  const nameRef = useRef("");
  const mailRef = useRef("");
  const passwordRef = useRef("");

  // States
  const [setName, setNameHandler] = useState("");
  const [setmail, setmailHandler] = useState("");
  const [setPassword, setPasswordHandler] = useState("");

  const [isName, setIsName] = useState(false);
  const [ismail, setIsmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  useEffect(() => {
    setIsName(!setName.match("^[a-zA-Z_ .]*$"));
  }, [setName]);

  useEffect(() => {
    setIsmail(!setmail.match("^[a-zA-Z_ .]*$"));
  }, [setmail]);

  useEffect(() => {
    setIsPassword(passwordRef.current.value.length < 0);
  }, [setPassword]);

  const submitHandler = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  const list = {
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: {
      opacity: 1,
      transition: {},
    },
    hidden: { opacity: 0 },
  };

  const rocket = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        duration: 2,
        delay: 1.5,
      },
    },
    hidden: { opacity: 0, x: -500, y: 500, rotate: -30 },
  };

  return (
    <motion.div
      className="font-Mono bg-grad w-full  flex justify-center items-center py-20 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.form
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        onSubmit={submitHandler}
        className="bg-white shadow-2xl  w-full rounded-xl text-black max-w-xl relative border-none"
      >
        <motion.div
          className="px-6 pt-4 z-100 sixTen:pt-4 sixTen:px-16"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <motion.div
            className="absolute -top-5 right-0 sixTen:right-8 z-50"
            initial="hidden"
            animate="visible"
            variants={rocket}
          >
            <svg
              width="120"
              height="80"
              viewBox="0 0 120 80"
              fill="none"
              xmlns="https://m.media-amazon.com/images/I/61m0SZMyRzL.jpg"
            >
              <path
                d="M29.3881 33.1579L99.9995 0L41.4437 39.4736L75.8883 59.9999L99.9995 0L0 18.9473L29.3881 33.1579Z"
                fill="#7383BF"
              />
              <path
                d="M41.4437 39.4736L34.6638 59.9999L29.3881 33.1579L99.9995 0L41.4437 39.4736Z"
                fill="#556080"
              />
              <path
                d="M41.4437 39.4736L34.5547 60L54.9596 47.5279L41.4437 39.4736Z"
                fill="#464F66"
              />
            </svg>
          </motion.div>

          <div className="text-2xl h-10 my-11 sixTen:my-9 font-bold text-[#013A63] transition-all ease-in-out duration-300">
            <span className="smooth">Create your free account!</span>
          </div>

          <motion.div className="relative mb-4" variants={item}>
            <input
              autoFocus
              ref={nameRef}
              value={setName}
              type="text"
              onChange={() => setNameHandler(nameRef.current.value)}
              placeholder="Username"
              required
              className={`bg-transparent relative font-medium outline-none focus:outline-none w-full mb-6 rounded-2xl bg-gray-50 p-3 ring-2 ${
                isName ? "ring-red-500" : "ring-gray-200"
              } border-2 border-transparent`}
            />
            {isName && (
              <span className="text-red-500 font-medium absolute right-2 top-[3.8rem] ">
                Invalid Name
              </span>
            )}
          </motion.div>

          <motion.div className="relative mb-4" variants={item}>
            <input
              ref={mailRef}
              value={setmail}
              type="text"
              onChange={() => setmailHandler(mailRef.current.value)}
              placeholder="Email"
              required
              className={`bg-transparent relative font-medium outline-none focus:outline-none w-full mb-6 rounded-2xl bg-gray-50 p-3 ring-2 ${
                ismail ? "ring-red-500" : "ring-gray-200"
              } border-2 border-transparent`}
            />
            {ismail && (
              <span className="text-red-500 font-medium absolute right-2 top-[3.8rem] ">
                Invalid Mail
              </span>
            )}
          </motion.div>

          <motion.div className="relative mb-4" variants={item}>
            <input
              ref={passwordRef}
              value={setPassword}
              type="password"
              onChange={() => setPasswordHandler(passwordRef.current.value)}
              placeholder="Password"
              required
              className={`bg-transparent relative font-medium outline-none focus:outline-none w-full mb-6 rounded-2xl bg-gray-50 p-3 ring-2 ${
                isPassword ? "ring-red-500" : "ring-gray-200"
              } border-2 border-transparent`}
            />
            {isPassword && (
              <span className="text-red-500 font-medium absolute right-2 top-[3.8rem] ">
                Password must be at least 6 characters
              </span>
            )}
          </motion.div>

          {/* <NavLink to="/login">
            <p className="m-auto mb-5 ml-36 text-sm">
              Already have an account?{" "}
              <p className="text-blue-600 inline-block">LogIn</p>
            </p>
          </NavLink> */}
          <Atropos
            className="my-atropos"
            activeOffset={40}
            shadowScale={0}
            rotateTouch={true}
          >
            <motion.button
              disabled={isName || ismail || isPassword}
              className="w-full border-transparent rounded-2xl bg-[#176698] py-3 font-bold text-white hover:border-[#176698] border-2 hover:bg-white hover:text-[#176698] transition-colors"
              whileTap={{ scale: 0.95 }}
              type="submit"
            >
              Submit
            </motion.button>
          </Atropos>
        </motion.div>
        <NavLink to="/login">
            <p className="m-auto mt-8 mb-5 ml-40 text-sm hidden sm:block">
            Already have an account?{" "}
              <p className="text-blue-600 inline-block">LogIn</p>
            </p>
          </NavLink>

          <GoogleLoginButton className="max-w-64 relative left-32 hidden lg:block"/>

        <div className="w-full z-10 text-sm -mt-5 relative -bottom-1 rounded-md">
          <svg
            className="rounded-b-md"
            viewBox="0 0 670 195"
            fill="none"
            xmlns="https://m.media-amazon.com/images/I/61m0SZMyRzL.jpg"
          >
            <motion.path
              d="M676 73.1658C555.600 127 111 200 -1 2V196H676V73.1658Z"
              animate={{
                d: [
                  "M676 73.1658C555.600 150 123.5 110 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 100 100 100 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 10 100 200 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 70 120 250 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 100 120.5 200 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 150 101.5 200 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 145 108 200 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 135 139 200 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 200 140 100 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 100 120.5 200 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 150 101.5 200 -1 2V196H676V73.1658Z",
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 20,
                times: [
                  0,
                  0.1,
                  0.2,
                  0.3,
                  0.4,
                  0.5,
                  0.6,
                  0.7,
                  0.8,
                  0.9,
                  1,
                ],
                type: "tween",
                ease: "easeInOut",
              }}
              fill="#176698"
              stroke="#176698"
            />
          </svg>
        </div>
      </motion.form>
    </motion.div>
  );
}

export default Login;
