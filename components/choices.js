import { CurrencyDollarIcon } from "@heroicons/react/outline";
import React from "react";

function choices() {
  const choiceData = [
    {
      theme: "Most Watched",
      icon: (
        <CurrencyDollarIcon className="w-7 bg-yellow-600 rounded-full text-white" />
      ),
      currency: "Bitcoin",
      short: "BTC",
      value: "₹47,55,647.48",
      up: "10%",
    },
    {
      theme: "Most Bought",
      icon: (
        <CurrencyDollarIcon className="w-7 bg-yellow-600 rounded-full text-white" />
      ),
      currency: "Etherium",
      short: "ETH",
      value: "₹2,99,647.48",
      up: "10%",
    },
  ];
  return (
    <div className="flex gap-2 overflow-scroll justify-center bg-gray-100">
      <div className="flex gap-6">
        {choiceData.map((v, i) => {
          return (
            <div className="w-40 h-40 border-2 border-gray-200" key={i}>
              <p className="text-blue-800 bg-blue-300 w-20 m-1 text-xs whitespace-nowrap">
                {v.theme}
              </p>
              <div className="flex flex-col items-center mt-5">
                {v.icon}
                <p className="mt-2">{v.short}</p>
                <p>{v.currency}</p>
                <p className="text-green-400">{v.up}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default choices;
