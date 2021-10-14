import { UserIcon } from "@heroicons/react/solid";
import React from "react";
import {
  UserCircleIcon,
  LibraryIcon,
  RefreshIcon,
  ShoppingBagIcon,
  FingerPrintIcon,
  InformationCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/solid";

function Profile() {
  const profileData = [
    {
      icon: <UserCircleIcon className="font-bold h-8" />,
      title: "User Verification",
      desc: "Complete Your KYC to but sell and withdraw",
    },
    {
      icon: <LibraryIcon className="font-bold h-8" />,
      title: "Bank Details",
      desc: "This account is used to facilitate all your deposits and withdrawls",
    },
    {
      icon: <RefreshIcon className="font-bold h-8" />,
      title: "History",
      desc: "All your transactions on AN-SWITCH",
    },
    {
      icon: <ShoppingBagIcon className="font-bold h-8" />,
      title: "Redeem Gift Voucher",
      desc: "Got a voucher redeem it here",
    },
    {
      icon: <FingerPrintIcon className="font-bold h-8" />,
      title: "Biometric Login",
      desc: "",
    },
    {
      icon: <InformationCircleIcon className="font-bold h-8" />,
      title: "Help & Support",
      desc: "Create a ticket and we will contact you",
    },
    {
      icon: <StarIcon className="font-bold h-8" />,
      title: "Rate Us",
      desc: "Tell Us what you think",
    },
    {
      icon: <CurrencyDollarIcon className="font-bold h-8" />,
      title: "About AN-SWITCH",
      desc: "v0.0.1",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex items-center justify-center flex-col pt-2">
        <div>
          <UserIcon className="h-14 border-2 bg-blue-200 rounded-full  text-blue-500" />
        </div>
        <p className="text-sm text-gray-500">KYC Verified </p>
      </div>
      <div className="flex items-center justify-center flex-col pt-3">
        <p className="font-bold text-xl ">Ankit Verma</p>
        <p className="text-gray-500 text-sm pt-1">9999999999</p>
      </div>
      {/* details */}
      <div className="py-3 flex  flex-col gap-2">
        {profileData.map((val, id) => {
          return (
            <div
              className="flex items-center justify-start px-4 gap-4 bg-gray-100 py-2 "
              key={id}
            >
              {val.icon}
              <div>
                <p className="text-base text-gray-500">{val.title}</p>
                <p className="text-sm text-gray-500">{val.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
