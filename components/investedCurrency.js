import { CurrencyDollarIcon } from "@heroicons/react/outline";
import React from "react";

function investedCurrency() {
  const invested = [
    {
      icon: (
        <CurrencyDollarIcon className="w-7 bg-yellow-600 rounded-full text-white" />
      ),
      currency: "Bitcoin",
      shot: "BTC",
      value: "₹47,55,647.48",
      up: "10%",
    },
  ];
  return (
    <div className="flex justify-between py-2 px-2 bg-gray-100">
      {invested.map((val, id) => {
        return (
          <>
            <div className="flex items-center gap-2">
              {val.icon}
              <div>
                <p> {val.currency}</p>
                <p> {val.shot}</p>
              </div>
            </div>
            <div>
              <p> {val.value}</p>
              <p className="text-green-400 text-right">{val.up}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default investedCurrency;
