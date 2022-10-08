import { useEffect, useState } from "react";
import { useContext } from "react";

import Image from "next/image";

import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";

import { TransactionContext } from "../context/TransactionContext";

import vmtreeLogoWhite from "../assets/vmt_logo_white.svg";
import uniswapLogo from "../assets/uniswap.png";
import ethCurrency from "../assets/eth-currency.png";
import ethLogo from "../assets/eth-logo.png";

/**
 * Colors Palette:
 * greek-yellow: #FFDC9F
 * greek-red: #EF6325
 * gree-blue: #3CA9AA
 * ------------------------
 * teal: cyan-300
 * cyan: #80E6D9
 * blue: #5BC0BE
 * dark-blue1: #3A506B
 * dark-blue2: #1C2541
 * dark-blue3: #0B132B
 *
 * pink1: #FC77B1
 * pink2: #f24b82
 * pink3: #D13A64
 */

//styles
const style = {
  wrapper: `p-4 w-screen flex justify-between items-center`,
  headerLogo: `flex w-1/4 items-center justify-start text-black text-xl font-mono font-bold text-[#D13A64]`,
  nav: `flex-1 flex justify-center items-center invisible md:visible`,
  navContainer: `flex rounded-3xl bg-[white] text-slate-900`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `text-white bg-gradient-to-b from-[#FC77B1] to-[#D13A64] via-[#f24b82] hover:transition duration-150`,
  walletSection: `flex w-1/4 justify-end items-center`,
  button: `flex items-center justify-center bg-[#EDF2F7] rounded-3xl mx-2 text-[0.9rem] font-semibold cursor-pointer text-slate-900 hover:text-slate-600`,
  iconButton: `rounded-3xl hover:bg-[#000000] hover:text-white min-h-[3rem] min-w-[3rem] items-center justify-center`,
  buttonIconContainer: `flex items-center justify-center min-h-[3rem] min-w-[3rem] hover:transition duration-150 rounded-3xl hover:bg-black hover:text-white`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonAccent: `hover:text-white h-full rounded-3xl flex items-center justify-center min-w-[9rem] min-h-[3rem] hover:bg-gradient-to-b from-[#FC77B1] to-[#D13A64] via-[#f24b82] hover:transition duration-150`,
  userName: `text-xs h-full rounded-3xl flex items-center justify-center min-w-[9rem] min-h-[3rem] text-slate-600`,
};

const darkStyle = {
  wrapper: `p-4 w-screen flex justify-between items-center`,
  headerLogo: `flex w-1/4 items-center justify-start text-black text-xl font-mono font-bold text-[#80E6D9]`,
  nav: `flex-1 flex justify-center invisible md:visible`,
  navContainer: `flex rounded-3xl bg-black text-gray-200 border-2 border-gray-800`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `text-black bg-gradient-to-b from-[#80E6D9] to-[#3CA9AA] hover:transition duration-150`,
  walletSection: `flex w-1/4 justify-end items-center`,
  button: `flex items-center justify-center bg-black text-gray-200 border border-1 border-gray-800 rounded-3xl mx-2 text-[0.9rem] font-semibold cursor-pointer hover:text-white`,
  iconButton: `rounded-3xl hover:bg-[#000000] hover:text-white min-h-[3rem] min-w-[3rem] items-center justify-center`,
  buttonIconContainer: `flex items-center justify-center min-h-[3rem] min-w-[3rem] hover:transition duration-150 rounded-3xl hover:bg-gray-200 hover:text-black`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonAccent: `hover:text-white h-full rounded-3xl flex items-center justify-center min-w-[9rem] min-h-[3rem] hover:bg-gradient-to-b from-[#80E6D9] to-[#3CA9AA] hover:transition duration-150`,
  userName: `text-xs h-full rounded-3xl flex items-center justify-center min-w-[9rem] min-h-[3rem] text-gray-200`,
};

const Header = () => {
  const [selectedNav, setSelectedNav] = useState("swap");
  const [defaultStyle, setDefaultStyle] = useState(style);
  const [userName, setUserName] = useState();
  const { connectWallet, currentAccount, toggleTheme, darkTheme } =
    useContext(TransactionContext);

  useEffect(() => {
    if (darkTheme) {
      setDefaultStyle(darkStyle);
    } else {
      setDefaultStyle(style);
    }
  }, [darkTheme]);

  useEffect(() => {
    if (currentAccount) {
      setUserName(
        `${currentAccount.slice(0, 7)}...${currentAccount.slice(35)}`
      );
    }
  }, [currentAccount]);

  return (
    <div className={defaultStyle.wrapper}>
      <div className={defaultStyle.headerLogo}>
        {/* <Image src={vmtreeLogoWhite} alt="uniswap" height={60} width={60} />    //TODO: insert new logo here */}
        <h1>
          <u>/PoolSide</u>
        </h1>
      </div>

      {/*======================== navbar section ==================================== */}
      <div className={defaultStyle.nav}>
        <div className={defaultStyle.navContainer}>
          <div
            className={`${defaultStyle.navItem} ${
              selectedNav === "swap" && defaultStyle.activeNavItem
            }`}
            onClick={() => setSelectedNav("swap")}
          >
            Deposit
          </div>
          <div
            className={`${defaultStyle.navItem} ${
              selectedNav === "pool" && defaultStyle.activeNavItem
            }`}
            onClick={() => setSelectedNav("pool")}
          >
            Withdraw
          </div>
          <div
            className={`${defaultStyle.navItem} ${
              selectedNav === "nft-gallery" && defaultStyle.activeNavItem
            }`}
            onClick={() => setSelectedNav("nft-gallery")}
          >
            NFT Gallery
          </div>
        </div>
      </div>

      {/*======================== wallet section ==================================== */}
      <div className={defaultStyle.walletSection}>
        {currentAccount ? (
          <div className={`${defaultStyle.button}`}>
            <div className={defaultStyle.userName}>{userName}</div>
          </div>
        ) : (
          <div
            onClick={() => connectWallet()}
            className={`${defaultStyle.button}`}
          >
            <div className={defaultStyle.buttonAccent}>Connect Wallet</div>
          </div>
        )}

        <div className={`${defaultStyle.button}`}>
          <div className={`${defaultStyle.buttonIconContainer} stroke-1`}>
            {darkTheme ? (
                          <MdOutlineLightMode size={25} onClick={toggleTheme}/>
            ) : (
              <MdOutlineDarkMode size={25} onClick={toggleTheme} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
