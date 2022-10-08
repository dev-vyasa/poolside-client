import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useContext } from "react";

import Main from "../components/Main";

import { TransactionContext } from "../context/TransactionContext";

/**
 * Colors Palette:
 * greek-yellow: #FFDC9F
 * greek-red: #EF6325
 * gree-blue: #3CA9AA
 * ------------------------
 * teal: cyan-300
 * blue: #5BC0BE
 * dark-blue1: #3A506B
 * dark-blue2: #1C2541
 * dark-blue3: #0B132B
 * 
 * pink1: #FC77B1
 * pink2: #f24b82 
 * pink3: #D13A64 
 */

const style = {
  wrapper: `fixed bg-black w-screen h-screen max-h-screen h-min-screen min-w-screen text-white select-none flex flex-col justify-between bg-gradient-to-r from-cyan-300 to-[#5BC0BE]`,
};

const darkStyle = {
  wrapper: `fixed w-screen h-screen max-h-screen h-min-screen min-w-screen text-white select-none flex flex-col justify-between bg-gradient-to-r from-[#1C2541] to-[#0B132B]`,
};

const Home = () => {
  const [defaultStyle, setDefaultStyle] = useState(style);
  const {darkTheme } =
    useContext(TransactionContext);

  useEffect(() => {
    if (darkTheme) {
      setDefaultStyle(darkStyle);
    } else {
      setDefaultStyle(style);
    }
  }, [darkTheme]);

  return (
    <div className={defaultStyle.wrapper}>
      <Header />
      <Main />
      <h1></h1>
    </div>
  );
};

export default Home;
