import { CurrencyDollarIcon } from "@heroicons/react/outline";
import React from "react";

function Buttons() {
  const buttons = [
    {
      primaryBtn: "BUY BITCOIN",
      seacondaryBtn: "DEPOSITE INR",
    },
  ];
  return (
    <div className="flex justify-evenly py-2 bg-gray-100">
      {buttons.map((val, id) => {
        return (
          <>
            <button className="p-1 px-5 rounded-md flex items-center gap-2 bg-blue-800 text-white">
              <CurrencyDollarIcon className="w-5 bg-yellow-600 rounded-full" />
              <p>{val.primaryBtn}</p>
            </button>
            <button className="p-1 border-2 border-blue-800 px-5 rounded-md text-blue-800">
              {val.seacondaryBtn}
            </button>
          </>
        );
      })}
    </div>
  );
}

export default Buttons;
