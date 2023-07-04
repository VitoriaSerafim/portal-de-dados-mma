import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="mb-0 mt-3" style={{ top: "0", position: "absolute" }}>
      <nav
        className="flex items-center justify-between p-4 text-black "
        style={{ top: "0" }}
      >
        <div className="flex items-center">
          <div className="flex items-center justify-center mb-12">
            <a
              href="/Dashboard"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-lime-900  hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-700"
            >
              Dashboard de Dados
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex items-center justify-center mb-12">
            <a
              href="/Mapa"
              className="inline-flex justify-center items-center ml-5 py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-lime-900  hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-700"
            >
             Mapa
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
