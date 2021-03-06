/* eslint-disable @next/next/link-passhref */
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import {
  HomeIcon,
  FolderIcon,
  GiftIcon,
  TrendingUpIcon,
  UserIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
import { useFirebase } from "../lib/firebase";

function MyApp({ Component, pageProps }) {
  const { isLoggedIn } = useFirebase();
  const [title, setTitle] = useState(false);
  const navData = [
    {
      icons: <HomeIcon className="h-10 rounded-full p-2" />,
      title: "Home",
      path: "/",
    },
    {
      icons: <FolderIcon className="h-10 rounded-full p-2" />,
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      icons: (
        <GiftIcon className="h-10 bg-blue-700 text-white rounded-full p-2" />
      ),
      title: "",
      path: "/gift",
    },
    {
      icons: <TrendingUpIcon className="h-10 rounded-full p-2" />,
      title: "Market",
      path: "/market",
    },
    {
      icons: <UserIcon className="h-10 rounded-full p-2" />,
      title: "Profile",
      path: "/profile",
    },
  ];
  const defaultNavData = [
    {
      icons: <HomeIcon className="h-10 rounded-full p-2" />,
      title: "Home",
      path: "/",
    },
    {
      icons: <FolderIcon className="h-10 rounded-full p-2" />,
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      icons: (
        <GiftIcon className="h-10 bg-blue-700 text-white rounded-full p-2" />
      ),
      title: "",
      path: "/gift",
    },
    {
      icons: <TrendingUpIcon className="h-10 rounded-full p-2" />,
      title: "Market",
      path: "/market",
    },
    {
      icons: <LoginIcon className="h-10 rounded-full p-2" />,
      title: "Login",
      path: "/login",
    },
  ];
  return (
    <div className="h-full relative">
      <Component {...pageProps} />
      <div className="bg-blue-50 fixed bottom-0 w-full">
        <div className="flex justify-evenly  w-full py-1 items-center bg-blue-100">
          {isLoggedIn() ? (
            <>
              {navData.map((val, id) => {
                return (
                  <Link href={`${val.path}`} key={id}>
                    <div
                      className={`flex flex-col items-center ${
                        title === val.title ? `text-blue-800` : ""
                      }`}
                      onClick={() => setTitle(val.title)}
                    >
                      <span>{val.icons}</span>
                      <p className="text-xs relative bottom-2">{val.title}</p>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : (
            <>
              {defaultNavData.map((val, id) => {
                return (
                  <Link href={`${val.path}`} key={id}>
                    <div
                      className={`flex flex-col items-center ${
                        title === val.title ? `text-blue-800` : ""
                      }`}
                      onClick={() => setTitle(val.title)}
                    >
                      <span>{val.icons}</span>
                      <p className="text-xs relative bottom-2">{val.title}</p>
                    </div>
                  </Link>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyApp;
