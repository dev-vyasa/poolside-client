import Image from "next/image";
import ethLogo from "../assets/eth-logo.png";
import { useEffect, useState, Fragment, useContext } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

import { RiSettings3Fill } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { Listbox } from "@headlessui/react";

import DropdownList from "../components/DropdownList";
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
  wrapper: `w-screen flex items-center justify-center drop-shadow-2xl`,
  content: `bg-[#FFFFFF] w-[30rem] rounded-3xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl text-slate-500`,
  transferPropContainer: `bg-[#EDF2F7] my-3 rounded-2xl p-2 text-xs  flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none m-2 w-full text-xl text-slate-800 font-mono`,
  currencySelector: `flex w-1/4 items-center`,
  currencySelectorContent: `w-full h-min flex justify-center items-center bg-transparent rounded-2xl text-md font-medium cursor-pointer`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `text-[#D13A64] border border-[#D13A64] border-2 my-2 rounded-2xl py-4 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer hover:bg-gradient-to-b from-[#FC77B1] to-[#D13A64] via-[#f24b82] hover:text-white hover:-translate-y-[0.1rem] hover:transition duration-150`,
  listItem: `text-black bg-slate-600`,
};

const darkStyle = {
  wrapper: `w-screen flex items-center justify-center drop-shadow-3xl`,
  content: `bg-[#000000] w-[30rem] rounded-3xl p-4 border-2 border-gray-800`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl text-gray-300`,
  transferPropContainer: `bg-[#02262d] my-3 rounded-2xl p-2 text-xs  flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none m-2 w-full text-xl text-gray-200 font-mono`,
  currencySelector: `flex w-1/4 items-center`,
  currencySelectorContent: `w-full h-min flex justify-center items-center bg-transparent rounded-2xl text-md font-medium cursor-pointer`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `text-[#5BC0BE] border border-[#5BC0BE] border-2 my-2 rounded-2xl py-4 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer hover:bg-gradient-to-b from-[#80E6D9] to-[#3CA9AA] hover:text-black hover:-translate-y-[0.1rem] hover:border-none hover:transition duration-150`,
  listItem: ``,
};


const Main = () => {
  const [defaultStyle, setDefaultStyle] = useState(style);
  const {
    pageType,
    formData,
    handleChange,
    sendTransaction,
    toggleTheme,
    darkTheme,
  } = useContext(TransactionContext);


  const handleSubmit = async (e) => {
    const { addressTo, amount } = formData;
    e.preventDefault();

    if (!addressTo || !amount) return;

    sendTransaction();
  };

  useEffect(() => {
    if (darkTheme) {
      setDefaultStyle(darkStyle);
    } else {
      setDefaultStyle(style);
    }
  }, [darkTheme]);

  return (
    <div className={defaultStyle.wrapper}>
      <div className={defaultStyle.content}>
        {pageType === "deposit" ? ( // ====================== deposite page
          <div>
            <div className={defaultStyle.formHeader}>
              <div>Deposit</div>
            </div>
            <div className={defaultStyle.transferPropContainer}>
              <input
                type="text"
                className={defaultStyle.transferPropInput}
                placeholder="0.0"
                pattern="^[0-9]*[.,]?[0-9]*$"
                onChange={(e) => handleChange(e, "amount")}
              />
              <div className={defaultStyle.currencySelector}>
                <div className={defaultStyle.currencySelectorContent}>
                  <DropdownList list={['ETH', 'LINK']} />
                  {/* <div className={defaultStyle.currencySelectorIcon}>
                    <Image
                      src={ethLogo}
                      alt="eth logo"
                      height={20}
                      width={20}
                    />
                  </div> */}
                  {/* <div className={defaultStyle.currencySelectorTicker}>ETH</div> */}
                  {/* <AiOutlineDown
                    className={defaultStyle.currencySelectorArrow}
                  /> */}
                </div>
              </div>
            </div>
            <div
              onClick={(e) => handleSubmit(e)}
              className={defaultStyle.confirmButton}
            >
              Confirm
            </div>
          </div>
        ) : pageType === "withdraw" ? ( // ====================== withdraw page
          <div>
            <div className={defaultStyle.formHeader}>
              <div>Withdraw</div>
            </div>
            <div className={defaultStyle.transferPropContainer}>
              <input
                type="text"
                className={defaultStyle.transferPropInput}
                placeholder="Recipient"
                pattern="^[0-9]*[.,]?[0-9]*$"
                onChange={(e) => handleChange(e, "amount")}
              />
            </div>
            <div className={defaultStyle.transferPropContainer}>
              <input
                type="text"
                className={defaultStyle.transferPropInput}
                placeholder="Note"
                onChange={(e) => handleChange(e, "addressTo")}
              />
              <div className={defaultStyle.currencySelector}></div>
            </div>
            <div
              onClick={(e) => handleSubmit(e)}
              className={defaultStyle.confirmButton}
            >
              Confirm
            </div>
          </div>
        ) : (
          <div>
            <div className={`${defaultStyle.formHeader}`}>
              <div>
                🚧 NFT Gallery coming up! 🚧
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
