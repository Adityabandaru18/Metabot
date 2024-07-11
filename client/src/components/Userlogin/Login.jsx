import  { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "atropos/css";
import Atropos from "atropos/react";
import { init } from "ityped";
import { NavLink } from "react-router-dom";
function Login() {
  //Refs
  const nameRef = useRef("");
  const mailRef = useRef("");

  const typeRef = useRef("");

  // States
  const [setName, setNameHandler] = useState("");
  const [setmail, setmailHandler] = useState("");


  const [sumbit, setSumbit] = useState(false);

  const [isName, setIsName] = useState(false);
  const [ismail, setIsmail] = useState(false);


  useEffect(() => {
    init(typeRef.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 2000,
      strings: ["Login Form"],
    });
  }, []);

  useEffect(() => {
    if (!setName.match("^[a-zA-Z_ .]*$")) {
      setIsName(true);
    } else {
      setIsName(false);
    }
  }, [setName]);
  useEffect(() => {
    if (!setmail.match("^[a-zA-Z_ .]*$")) {
      setIsmail(true);
    } else {
      setIsmail(false);
    }
  }, [setmail]);


  // Submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    setSumbit(true);
    // console.log(setName, setRollno, setPhoneno, setDepartment, setInterest);
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
      {sumbit ? (
        <motion.div
          id="modal"
          className="container mx-auto flex justify-center items-center px-4 md:px-10 py-20 h-[72vh]"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="rounded-md shadow-2xl bg-[#176698] flex flex-col justify-center items-center px-4 md:px-10 py-20">
            <div role="img" aria-label="CC Lab Logo.">
              <svg
                width="175"
                height="39"
                viewBox="0 0 175 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // xlink="http://www.w3.org/1999/xlink"
              >
                <g filter="url(#filter0_d_472_63)">
                  <motion.path
                    d="M68.056 27.8982C66.28 27.8982 64.68 27.5302 63.256 26.7942C61.832 26.0422 60.712 25.0022 59.896 23.6742C59.096 22.3302 58.696 20.8102 58.696 19.1142C58.696 17.4182 59.096 15.9062 59.896 14.5782C60.712 13.2342 61.832 12.1942 63.256 11.4582C64.68 10.7062 66.28 10.3302 68.056 10.3302C69.688 10.3302 71.144 10.6182 72.424 11.1942C73.704 11.7702 74.76 12.6022 75.592 13.6902L72.016 16.8822C70.976 15.5702 69.752 14.9142 68.344 14.9142C67.16 14.9142 66.208 15.2982 65.488 16.0662C64.768 16.8182 64.408 17.8342 64.408 19.1142C64.408 20.3942 64.768 21.4182 65.488 22.1862C66.208 22.9382 67.16 23.3142 68.344 23.3142C69.752 23.3142 70.976 22.6582 72.016 21.3462L75.592 24.5382C74.76 25.6262 73.704 26.4582 72.424 27.0342C71.144 27.6102 69.688 27.8982 68.056 27.8982ZM85.5638 27.8982C83.7878 27.8982 82.1878 27.5302 80.7638 26.7942C79.3398 26.0422 78.2198 25.0022 77.4038 23.6742C76.6038 22.3302 76.2038 20.8102 76.2038 19.1142C76.2038 17.4182 76.6038 15.9062 77.4038 14.5782C78.2198 13.2342 79.3398 12.1942 80.7638 11.4582C82.1878 10.7062 83.7878 10.3302 85.5638 10.3302C87.1958 10.3302 88.6518 10.6182 89.9318 11.1942C91.2118 11.7702 92.2678 12.6022 93.0998 13.6902L89.5238 16.8822C88.4838 15.5702 87.2598 14.9142 85.8518 14.9142C84.6678 14.9142 83.7158 15.2982 82.9958 16.0662C82.2758 16.8182 81.9158 17.8342 81.9158 19.1142C81.9158 20.3942 82.2758 21.4182 82.9958 22.1862C83.7158 22.9382 84.6678 23.3142 85.8518 23.3142C87.2598 23.3142 88.4838 22.6582 89.5238 21.3462L93.0998 24.5382C92.2678 25.6262 91.2118 26.4582 89.9318 27.0342C88.6518 27.6102 87.1958 27.8982 85.5638 27.8982ZM101.931 10.7142H107.595V23.1222H115.179V27.5142H101.931V10.7142ZM122.689 14.1462C124.993 14.1462 126.753 14.6662 127.969 15.7062C129.185 16.7302 129.793 18.3142 129.793 20.4582V27.5142H124.753V25.7862C124.129 27.0982 122.889 27.7542 121.033 27.7542C119.993 27.7542 119.105 27.5782 118.369 27.2262C117.649 26.8582 117.097 26.3702 116.713 25.7622C116.345 25.1382 116.161 24.4422 116.161 23.6742C116.161 22.3782 116.657 21.3942 117.649 20.7222C118.641 20.0502 120.145 19.7142 122.161 19.7142H124.345C124.169 18.6902 123.345 18.1782 121.873 18.1782C121.281 18.1782 120.681 18.2742 120.073 18.4662C119.465 18.6422 118.945 18.8902 118.513 19.2102L116.785 15.6342C117.537 15.1702 118.441 14.8102 119.497 14.5542C120.569 14.2822 121.633 14.1462 122.689 14.1462ZM122.665 24.4902C123.049 24.4902 123.393 24.3862 123.697 24.1782C124.001 23.9702 124.225 23.6582 124.369 23.2422V22.3302H123.025C121.921 22.3302 121.369 22.6982 121.369 23.4342C121.369 23.7382 121.481 23.9942 121.705 24.2022C121.945 24.3942 122.265 24.4902 122.665 24.4902ZM140.898 14.1462C142.05 14.1462 143.106 14.4262 144.066 14.9862C145.042 15.5302 145.81 16.3222 146.37 17.3622C146.946 18.3862 147.234 19.5782 147.234 20.9382C147.234 22.2982 146.946 23.4982 146.37 24.5382C145.81 25.5782 145.042 26.3782 144.066 26.9382C143.106 27.4822 142.05 27.7542 140.898 27.7542C139.282 27.7542 138.082 27.3142 137.298 26.4342V27.5142H132.138V9.70616H137.562V15.2742C138.33 14.5222 139.442 14.1462 140.898 14.1462ZM139.602 23.5302C140.226 23.5302 140.738 23.3062 141.138 22.8582C141.538 22.3942 141.738 21.7542 141.738 20.9382C141.738 20.1222 141.538 19.4902 141.138 19.0422C140.738 18.5942 140.226 18.3702 139.602 18.3702C138.978 18.3702 138.466 18.5942 138.066 19.0422C137.666 19.4902 137.466 20.1222 137.466 20.9382C137.466 21.7542 137.666 22.3942 138.066 22.8582C138.466 23.3062 138.978 23.5302 139.602 23.5302ZM154.078 27.7542C152.958 27.7542 151.854 27.6342 150.766 27.3942C149.678 27.1542 148.798 26.8422 148.126 26.4582L149.614 22.8822C150.222 23.2502 150.942 23.5382 151.774 23.7462C152.606 23.9542 153.414 24.0582 154.198 24.0582C154.822 24.0582 155.254 24.0102 155.494 23.9142C155.75 23.8022 155.878 23.6422 155.878 23.4342C155.878 23.2262 155.718 23.0822 155.398 23.0022C155.094 22.9222 154.59 22.8422 153.886 22.7622C152.814 22.6342 151.902 22.4742 151.15 22.2822C150.398 22.0742 149.734 21.6822 149.158 21.1062C148.598 20.5302 148.318 19.7062 148.318 18.6342C148.318 17.7862 148.574 17.0262 149.086 16.3542C149.598 15.6822 150.358 15.1462 151.366 14.7462C152.39 14.3462 153.614 14.1462 155.038 14.1462C156.03 14.1462 156.998 14.2422 157.942 14.4342C158.902 14.6102 159.718 14.8742 160.39 15.2262L158.902 18.8022C157.75 18.1622 156.486 17.8422 155.11 17.8422C153.926 17.8422 153.334 18.0502 153.334 18.4662C153.334 18.6742 153.494 18.8262 153.814 18.9222C154.134 19.0022 154.638 19.0822 155.326 19.1622C156.398 19.2902 157.302 19.4582 158.038 19.6662C158.79 19.8742 159.446 20.2662 160.006 20.8422C160.582 21.4182 160.87 22.2422 160.87 23.3142C160.87 24.1302 160.614 24.8742 160.102 25.5462C159.59 26.2182 158.822 26.7542 157.798 27.1542C156.774 27.5542 155.534 27.7542 154.078 27.7542Z"
                    fill="white"
                    stroke="#fff"
                    strokeWidth="0.4"
                    initial={{ fillOpacity: 0, pathLength: 0 }}
                    animate={{ fillOpacity: 1, pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  <motion.rect
                    y="0.140137"
                    width="42"
                    height="30.6168"
                    fill="url(#pattern0)"
                    initial={{ fillOpacity: 0, pathLength: 0 }}
                    animate={{ fillOpacity: 1, pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_472_63"
                    x="0"
                    y="0.140137"
                    width="164.871"
                    height="38.6167"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_472_63"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_472_63"
                      result="shape"
                    />
                  </filter>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      href="#image0_472_63"
                      transform="translate(0 -0.185897) scale(0.0111111 0.0152422)"
                    />
                  </pattern>
                  <image
                    id="image0_472_63"
                    width="90"
                    height="90"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACzklEQVR4nO3bTWoUQRjG8aeCGBOTC4g3EHTpGQQ3bgNuzS10KbgRjEJmIWIEcRcQ/LiCy4BH0OBCVJgk4sI8LrpWw0zqna6uN13l89tkMd3VNX861dPzAYiIiIiIiIiItCMsszHJSwC2AWwBuAbgcolJjdgxgM8AXgOYhBD+WHc0hyZ5FcA7ANeXnl6bDgDcDiF8sWxsCh3P5E9Q5FkHAG5azuwV44DbUOR5bgC4Z9nQGnqr/1yaZ2pjXTqmADayptOuoxDCZmoja2jmz6ddIYRkR+vSIZkU2olCO1FoJwrtRKGdKLQThXZyIWdnywv1luTcuOmMdqLQThTaiUI7UWgnCu1EoZ0otBOFdqLQThTaSfHQJNdITkgek/xO8hHJ1dLHrRIXMO47mbPr+xpj53QoegCSgeR0we7Vxc4JXXTpCCEQwKKJ3AKwX1vsvjwuhs/PeOy/ip2U8y9DcjUuE2epYhnJ6eByAJIXSb5NxP7I7uvBozX60HGM6mNXETqOU3XsakLHsapds6sKHcezxH442BMYSHWh45ipZeTbUPMfSk6HMb+p9Pe8JzCkrC/Q9MVu/d1Hd8OyyEun6YzHkEsHdTEsfwDq5V35A9QeGaggdAuRgZGH5kBrMsl1ks9I/kqMtYyfJJ+SXCvdwSTnACR3Ek/WdOEjudunpNFu6Q5ZP+hMfT+a5AqAKYD1BZt8AHAn9aP1OM4RANOZ18MJgM0QwmliHr06AD43LIuOYYrcitIfZZ0CeDPnoaUix3H2hpzbjL3U2ewiZ20iuUHyBcnf7D6ofcweNyPsvraww+4CNpQfJJ/Q4WJYdI2eGSPED2urldPB7U2l2iPnGvO7d01RaCcK7UShnSi0E4V2otBOsj4ztN4Vic5oNwrtxBr6sOgs6vbVspE19KuMibTO1MZ6Mbwf/94FcKXXdNpziC7yg/OeiIiIiIiIiIiIt3/Lie76bdy0ZQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>
            <h1 className="mt-8 px-10 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-white text-center md:w-9/12 lg:w-7/1">
              Thanks for submitting the form!
            </h1>
            <p className="mt-10 text-base leading-normal text-center text-white md:w-9/12 lg:w-7/12  tracking-wider">
              A CC Labs intiative!
            </p>
          </div>
        </motion.div>
      ) : (
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
                xmlns="http://www.w3.org/2000/svg"
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
              <span ref={typeRef} className="smooth"></span>
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

            {/* Mail */}

            <motion.div className="relative mb-4" variants={item}>
              <input
                autoFocus
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

            <NavLink to="/signup">  <p className="m-auto mb-5 ml-20">Do not have an account? Please signIn</p>   </NavLink>
            <Atropos
              className="my-atropos"
              activeOffset={40}
              shadowScale={0}
              rotateTouch={true}
            >
              <motion.button
                disabled={isName}
                className="w-full border-transparent rounded-2xl bg-[#176698] py-3 font-bold text-white hover:border-[#176698] border-2 hover:bg-white hover:text-[#176698] transition-colors"
                whileTap={{ scale: 0.95 }}
                type="submit"
              >
                Submit
              </motion.button>
            </Atropos>
          </motion.div>

          <div className="w-full z-10 text-sm -mt-5 relative -bottom-1 rounded-md">
            <svg
              className="rounded-b-md"

              viewBox="0 0 670 195"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                  type: "tween",
                  ease: "easeInOut",
                }}
                fill="#176698"
                stroke="#176698"
              />
            </svg>
          </div>
        </motion.form>
      )}
    </motion.div>
  );
}

export default Login;