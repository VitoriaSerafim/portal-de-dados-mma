import { useState } from "react";
const Dashboard = () => {
  const [data, setdata] = useState<any[]>([]);
  const [coluna1, setColuna1] = useState<string>();
  const [coluna2, setColuna2] = useState<string>();
  const [coluna3, setColuna3] = useState<string>();

  function verify() {
    let element1 = document.getElementById(
      "familias-checkbox"
    ) as HTMLInputElement;
    let element2 = document.getElementById(
      "tipos-checkbox"
    ) as HTMLInputElement;
    let element3 = document.getElementById(
      "biomas-checkbox"
    ) as HTMLInputElement;
    let element4 = document.getElementById(
      "nativa-checkbox"
    ) as HTMLInputElement;
    let element5 = document.getElementById(
      "especies-checkbox"
    ) as HTMLInputElement;
    let element6 = document.getElementById(
      "ameaca-checkbox"
    ) as HTMLInputElement;

    if (element1.checked) {
      setColuna1("Nome Família")
      setColuna2("Quantidade de Especies")
      fetch("/qtd-especie-por-familia")
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
        });
    }
    else if (element2.checked) {
      setColuna1("Nome taxonômico")
      setColuna2("Total por Espécie")
      fetch("/tipos-taxonomicos")
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
        });
    }
    else if (element3.checked) {
      setColuna1("Nome do Bioma")
      setColuna2("Quantidade de Unidades de Conservação")
      fetch("/qtd-unidades-por-bioma")
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
        });
    }
    else if (element4.checked) {
      setColuna1("Estado")
      setColuna2("Quantidade de Especies Nativas")
      fetch("/qtd_especie_nativa")
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
        });
    }
    else if (element5.checked) {
      setColuna1("Situação")
      setColuna2("Quantidade de Especies")
      fetch("/qtd-animais-em-risco")
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
        });
    }
    else if (element6.checked) {
      setColuna1("Grupo Taxonômico")
      setColuna2("Categoria de Ameaça")
      setColuna3("Quantidade")
      fetch("/risco-grupo-taxonomico")
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
        });
    }
  }

  return (
    <>
      <div
        className=" min-h-screen flex items-center justify-center p-24 "
        style={{
          backgroundColor: "#ffffff",
          flexDirection: "column",
        }}
      >
        <main className="text-black text-center items-center" style={{width:'100vw'}}>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-green-200 rounded-lg lg:flex dark:bg-lime-700 dark:border-green-600 dark:text-white gap-2"
          style={{marginLeft:'30px',width:'95vw'}}>
            <li className="w-full border-b border-green-200 sm:border-b-0 sm:border-r dark:border-green-600">
              <div className="flex items-center pl-3">
                <input
                  id="tipos-checkbox"
                  type="radio"
                  name="Radio"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-lime-300 border-green-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-lime-300 dark:border-green-500"
                  onClick={()=> verify()}
                />
                <label
                  typeof="vue-checkbox-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Grupos Taxonômicos
                </label>
              </div>
            </li>
            <li className="w-full border-b border-green-200 sm:border-b-0 sm:border-r dark:border-green-600">
              <div className="flex items-center pl-3">
                <input
                  id="biomas-checkbox"
                  type="radio"
                  name="Radio"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-lime-100 border-green-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-lime-300 dark:border-green-500"
                  onClick={()=> verify()}                
                />
                <label
                  typeof="react-checkbox-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                 Unidades por bioma
                </label>
              </div>
            </li>
            <li className="w-full border-b border-green-200 sm:border-b-0 sm:border-r dark:border-green-600">
              <div className="flex items-center pl-3">
                <input
                  id="nativa-checkbox"
                  type="radio"
                  name="Radio"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-lime-100 border-green-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-lime-300 dark:border-green-500"
                  onClick={()=> verify()}     
                />
                <label
                  typeof="angular-checkbox-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                 Quantidade de Especies Nativas
                </label>
              </div>
            </li>
            <li className="w-full border-b border-green-200 sm:border-b-0 sm:border-r dark:border-green-600">
              <div className="flex items-center pl-3">
                <input
                  id="familias-checkbox"
                  type="radio"
                  name="Radio"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-lime-100 border-green-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-lime-300 dark:border-green-500"
                  onClick={()=> verify()}
                />
                <label
                  typeof="laravel-checkbox-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Familias
                </label>
              </div>
            </li>
            <li className="w-full border-b border-green-200 sm:border-b-0 sm:border-r dark:border-green-600">
              <div className="flex items-center pl-3">
                <input
                  id="especies-checkbox"
                  type="radio"
                  name="Radio"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-lime-100 border-green-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-lime-300 dark:border-green-500"
                  onClick={()=> verify()}
                />
                <label
                  typeof="laravel-checkbox-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Quantidade de especies em risco
                </label>
              </div>
            </li>
            <li className="w-full dark:border-green-600">
              <div className="flex items-center pl-3">
                <input
                  id="ameaca-checkbox"
                  type="radio"
                  name="Radio"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-lime-100 border-green-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-lime-300 dark:border-green-500"
                  onClick={()=> verify()}
                />
                <label
                  typeof="laravel-checkbox-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Ameça por grupo Taxonômico
                </label>
              </div>
            </li>
          </ul>

        {/* Tabela com dados */}
          <table className="table-auto bg-gray-300 accent-pink-500 w-2/4 ml-96 mt-12 rounded-md m-12" >
          <>
            <thead>
            <tr>
              <th>{coluna1}</th>
              <th>{coluna2}</th>
              {coluna1 === "Grupo Taxonômico" ?
               <th>{coluna3}</th>
               : ''
            }
            </tr>
          </thead>
          {data.map((tipo, index) => (
          <tbody>
            <tr>
            {coluna1 === "Nome Família" ? 
              <><td>{tipo.nome_familia}</td>
              <td>{tipo.quantidade_especies}</td>
              </>
           : 
           <>
           </>
           }
           
            {coluna1 === "Nome do Bioma" ? 
              <><td>{tipo.nome_bioma}</td>
              <td>{tipo.quantidade}</td>
              </>
           : 
           <>
           </>
           }
             {coluna1 === "Nome taxonômico" ? 
            <><td>{tipo.nome_taxonomico}</td>
            <td>{tipo.total_especies}</td>
            </>
         : 
         <>
         </>
         }
          {coluna1 === "Estado" ? 
            <><td>{tipo.sigla}</td>
            <td>{tipo.tot_especie_estado}</td>
            </>
         : 
         <>
         </>
         }
         {coluna1 === "Situação" ? 
            <><td>{tipo.situacao}</td>
            <td>{tipo.total}</td>
            </>
         : 
         <>
         </>
         }
          {coluna1 === "Grupo Taxonômico" ? 
            <><td>{tipo.nome_taxonomico}</td>
            <td>{tipo.categoria_de_ameaça}</td>
            <td>{tipo.quantidade}</td>
            </>
         : 
         <>
         </>
         }
            </tr>
          </tbody>
            ))}
          </>
          
          </table>
          {coluna1 === "Situação" ? 
            <p style={{marginLeft:'20vw',textAlign:'left'}}> Legenda: <br/>
            Em Perigo (EN) <br/>  
            Vulnerável (VU)<br/>
            Criticamente em Perigo - provavelmente extinto (CR)(PEX)<br/> 
            Extinta (EX)<br/>
            Criticamente Em Perigo (CR)<br/> 
            Extinta na Natureza (EW)<br/>
            Regionalmente Extinta (RE)<br/> 
            Subespécie que sai da Lista
             </p>
         : 
         <>
         </>
         }
        </main>
      </div>
    </>
  );
};

export default Dashboard;
