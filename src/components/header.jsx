import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { BsFillSuitHeartFill, BsGift, BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { getAuthToken } from "../utils/auth";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [search, setSearch] = useState("");
  const token = getAuthToken();
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    navigate(`/search/${search}`);
  };

  return (
    <header className="pt-8 flex items-center justify-between mb-11 py-8 px-10 w-full fixed z-40 bg-black">
      <div className="flex items-center justify-between">
        <Link className="mr-12">
          <img src={logo} alt="logo of netflix" />
        </Link>
        <nav>
          <ul className="flex  gap-5">
            <li>
              <Link to={`/home`}>Home</Link>
            </li>
            <li>
              <Link to={`/home`}>Action</Link>
            </li>
          </ul>
        </nav>
      </div>
      {isSearchVisible && (
        <div>
          <form onSubmit={searchSubmitHandler} class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
      )}
      <ul className="flex items-center gap-5">
        <li onClick={() => setIsSearchVisible((prev) => !prev)}>
          <Link>
            <BsSearch className="text-2xl" />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Form method="post" action="/logout">
            {token && <button>Logout</button>}
          </Form>
        </li>
        <li>
          <Link>
            <BsGift className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link className="relative">
            <BsFillSuitHeartFill className="text-2xl" />
            <span className="absolute bottom-6 bg-slate-700 left-3 p-1 rounded-full w-6 h-6 flex justify-center items-center">
              0
            </span>
          </Link>
        </li>
        <li>
          <Link>
            <VscAccount className="text-2xl" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
