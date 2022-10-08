import { useEffect, useState, Fragment, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const style = {
  content: `w-full h-min flex justify-between items-center bg-[#3A506B] hover:bg-[#1f8280] rounded-2xl text-md font-medium cursor-pointer p-2`,
};

const darkStyle = {
  content: `w-full h-min flex justify-between items-center bg-[#3A506B] hover:bg-[#1f8280] rounded-2xl text-md font-medium cursor-pointer p-2`,
};

const DropdownList = ({ list }) => {
  const [defaultStyle, setDefaultStyle] = useState(style);
  const { darkTheme } = useContext(TransactionContext);

  useEffect(() => {
    if (darkTheme) {
      setDefaultStyle(darkStyle);
    } else {
      setDefaultStyle(style);
    }
  }, [darkTheme]);

  return (
    <div>
      <select class={defaultStyle.content}>
        {list.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
