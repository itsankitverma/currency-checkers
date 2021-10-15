import { LockClosedIcon } from "@heroicons/react/outline";
import React from "react";

function rewards() {
  const rewards = [
    {
      title: "Reward on your first referrel",
    },
    {
      title: "Reward on your second referrel",
    },
  ];
  return (
    <div className="px-4 flex gap-2 justify-center">
      {rewards.map((v, i) => {
        return (
          <div
            className="w-40 h-40 border-2 border-gray-200 bg-blue-400 flex items-center justify-center relative"
            key={i}
          >
            <LockClosedIcon className="h-10 text-white" />
            <div className="flex flex-col items-center justify-center mt-5 absolute w-full bg-blue-700 h-8 bottom-0">
              <p className="text-white px-3 text-xs text-center ">{v.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default rewards;
