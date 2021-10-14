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

export const profileData = [
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
