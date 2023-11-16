"use client";

import Link from "next/link";

import { AppDispatch, RootState } from "@/src/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  currentUser,
  reset,
  signOut,
} from "@/src/redux-store/feature/user/authSlice";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import authService from "../redux-store/feature/user/authService";
import ThemeSwitcher from "./ThemeSwitcher";
import storeService from "../redux-store/feature/store/storeService";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [user, setUser] = useState([]);
  const { userData, errorMsg, isLoading, isSuccess, isErro }: any = useSelector(
    (state: RootState) => state.auth,
  );
  const [theme, settheme]: any[] = useState([]);
  const themeData = async () => {
    const response = await storeService.listTheme();
    settheme(response);
  };
  useEffect(() => {
    themeData();
    loggedUser();
    if (isShow) {
      router.replace("/login");
      dispatch(reset());
    }
  }, [isSuccess]);

  const loggedUser = async () => {
    dispatch(currentUser());
  };
  const logOut = () => {
    dispatch(signOut(null));
  };
  const [isShow, setIsShow] = useState(false);
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-black dark:text-white">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button className="p-2 text-gray-600 rounded cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100">
              <svg
                id="toggleSidebarMobileHamburger"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <Link href="/" className="flex ml-2 md:mr-24">
              <img
                src={theme[0]?.logoUrl ? theme[0]?.logoUrl : ""}
                className="h-9 md:h-10 mr-3"
              />
            </Link>
          </div>

          <div className="flex items-center">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="p-2 text-gray-500 rounded-lg dark:text-white lg:hidden hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Search</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 text-gray-500 rounded-lg dark:text-white hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">View notifications</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
            </button>

            <button
              type="button"
              data-dropdown-toggle="apps-dropdown"
              className="hidden p-2 text-gray-500 dark:text-white rounded-lg sm:flex hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">View notifications</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </button>
            <ThemeSwitcher />

            <div className="flex items-center ml-3">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                id="user-menu-button-2"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-2"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={userData?.attributes?.picture}
                  alt="user photo"
                />
              </button>

              <button
                id="theme-toggle"
                data-tooltip-target="tooltip-toggle"
                type="button"
                onClick={() => setIsShow(!isShow)}
                className="text-gray-500 hover:text-red-200 dark:text-white focus:outline-none focus:ring-0 rounded-lg text-sm p-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22Zm7-6v-3h-8v-2h8V8l5 4l-5 4Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          isShow
            ? "block min-h-[200px] border right-0 bg-white dark:bg-black rounded-lg min-w-[200px] absolute"
            : "hidden"
        }
      >
        <div className="flex">
          <button
            onClick={(e) => {
              e.preventDefault();
              logOut();
            }}
            className="m-auto border px-4 py-1 mt-4 rounded-md"
          >
            {isLoading ? "Logging out ..." : "logout"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
