import React from "react";
import LottieAnimation from "../components/LottieAnimation";
import Gift from "../animation/gift.json";

function refer() {
  return (
    <div>
      <div>
        <a className="flex items-center justify-start px-4 gap-4 bg-gray-100 py-2 ">
          <div>
            <p className="text-sm text-gray-500 font-bold">
              Refer and Earn FREE BITCOINS
            </p>
            <p className="text-xs text-gray-500">
              Earn ₹50 worth of free BTC by inviting your friends to join
            </p>
          </div>
          <div>
            <LottieAnimation lotti={Gift} height={80} width={80} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default refer;
