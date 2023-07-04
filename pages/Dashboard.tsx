import { useState } from "react";
const Dashboard = () => {
  const [data, setdata] = useState<any[]>([]);

  function verify() {
    let element1 = document.getElementById(
      "familias-checkbox"
    ) as HTMLInputElement;
    let element2 = document.getElementById(
      "tipos-checkbox"
    ) as HTMLInputElement;
    if (element1.checked) {
      fetch("/qtd-especie-por-familia")
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
        });
    }
    if (element2.checked) {
      fetch("/qtd-unidades-por-estado")
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
        });
    }
  }

  console.log(data);
  return (
    <>
      <div
        className=" min-h-screen flex items-center justify-center p-24 "
        style={{
          backgroundColor: "#ffffff",
          flexDirection: "column",
        }}
      >
        <main className="text-black text-center items-center">
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-green-200 rounded-lg lg:flex dark:bg-lime-700 dark:border-green-600 dark:text-white">
          <li className="w-full border-b border-green-200 sm:border-b-0 sm:border-r dark:border-green-600">
            <div className="flex items-center pl-3">
              <input
                id="tipos-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-lime-300 border-green-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-lime-300 dark:border-green-500"
              />
              <label
                typeof="vue-checkbox-list"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tipos Taxonimicos
              </label>
            </div>
          </li>
          <li className="w-full border-b border-green-200 sm:border-b-0 sm:border-r dark:border-green-600">
            <div className="flex items-center pl-3">
              <input
                id="react-checkbox-list"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-lime-100 border-green-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-lime-300 dark:border-green-500"
              />
              <label
                typeof="react-checkbox-list"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
              Situação de Risco
              </label>
            </div>
          </li>
          <li className="w-full border-b border-green-200 sm:border-b-0 sm:border-r dark:border-green-600">
            <div className="flex items-center pl-3">
              <input
                id="angular-checkbox-list"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-lime-100 border-green-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-lime-300 dark:border-green-500"
              />
              <label
                typeof="angular-checkbox-list"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
              Unidades de Conservação
              </label>
            </div>
          </li>
          <li className="w-full dark:border-green-600">
            <div className="flex items-center pl-3">
              <input
                id="familias-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-lime-100 border-green-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-lime-300 dark:border-green-500"
             />
              <label
                typeof="laravel-checkbox-list"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
               Familias
              </label>
            </div>
          </li>
        </ul>
          {data.map((tipo, index) => (
            <div>
              <input
                style={{
                  backgroundColor: "lightgray",
                  paddingRight: "15px",
                  width: "250px",
                }}
                value={tipo.nome_estado}
              />
              <input
                style={{ backgroundColor: "lightgray", paddingLeft: "5px" }}
                value={tipo.quantidade}
              />
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
