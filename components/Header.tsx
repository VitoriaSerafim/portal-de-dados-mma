import React from "react";
import { ListFormat } from "typescript";

const Header: React.FC = () => {
  return (
    <header className="mb-0 mt-3" style={{ top:'0', position:'fixed',}}>
      <nav
        className="flex items-center justify-between p-4 text-black "
        style={{top:'0'}}
      >
        <div className="flex items-center">
          <div className="flex items-center justify-center mb-12">
            <button
              type="submit"
              className="flex w-50 justify-center rounded-md bg-lime-900 px-4 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-110"
          
            >
             Dashboard de Dados
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
