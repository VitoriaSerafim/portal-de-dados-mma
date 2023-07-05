import Head from "next/head";
import Header from "../components/Header";
const HomePage = () => {
  return (
    <>
      <div
        className=" min-h-screen flex items-center justify-center p-24 "
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: "url(/bg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          flexDirection: "column",
        }}
      >
        
        <Header />
        <Head>
          <title>Portal de Dados - Ministério do Meio Ambiente</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="text-black text-center items-center">
          <h1 className="text-5xl font-bold mb-6 mt-12 font-black"></h1>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">
            {" "}
            Bem-vindo ao Portal de Dados AnimalCrossing
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
            {" "}
            Um portal para fácil acesso dos dados fornecidos palo Ministerio do
            Meio Ambiente do Brasil
          </p>

          <div className="flex items-center justify-center">
            <img src="/header-animal.svg"></img>
          </div>
          <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-yellow-400 ">
            {" "}
            Quem somos?
          </h2>
          <br/>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-justify">
            {" "}
            Somos um grupo de estudantes de computação da Universidade Federal
            do Rio de Janeiro (UFRJ), apaixonados pela preservação do meio
            ambiente e comprometidos em aumentar a conscientização sobre a crise
            da extinção animal no Brasil. Nessa página, buscamos compartilhar
            informações valiosas e atualizadas sobre medidas de conservação e
            características das espécies ameaçadas de extinção no nosso país,
            destacando a importância de proteger a rica biodiversidade
            brasileira.
          </p>
          <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-yellow-400 ">
            {" "}
          
            Objetivos
          </h2>
          <br/>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-justify">
            {" "}
            Nosso objetivo é destacar as iniciativas de preservação em andamento
            relacionadas à proteção animal e os esforços de pesquisa científica
            para a conservação. Acreditamos que a tecnologia desempenha um papel
            fundamental na divulgação e conscientização. Por isso, unimos nossa
            paixão pela computação com nosso compromisso com a preservação
            ambiental.
          </p>
          
          <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-yellow-400 ">
             Datasets utilizados
          </h2>
          <br/>
          
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-justify">
            {" "}
            Através dos dados da fauna coletados análises, estudos de caso e
            notícias, pretendemos despertar o interesse do público e incentivar
            ações em prol da conservação da fauna. Referencia para os datasets
            utilizados:<br/><br/>
            <br/> 
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-green-600 " >
            {" "}
              Dados.gov:
            </h2>
            <br/>
            
            <a href ="https://dados.gov.br/dados/conjuntos-dados/especies-da-fauna-em-unidades-de-conservacao" target ="_blank">Especies da Fauna em Unidades de Conservação Federais</a>
            
            <br/>
            <br/>
            <a href = "https://dados.gov.br/dados/organizacoes/visualizar/instituto-chico-mendes-de-conservacao-da-biodiversidade-icmbio" target="_blank">Instituto Chico Mendes de Conservação da Biodiversidade - ICMBio </a>
            <br/>
            <br/> 
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-green-600 ">
            {" "}
              Portal de Dados Abertos:
            </h2>
            <br/>
            <a href = "https://dados.mma.gov.br/dataset/especies-ameacadas/resource/544f9312-d4c6-4d12-b6ac-51bf3039bbb7" target="_blank">Especies Ameaçadas</a>
            <br/>
            <br/>
            
            <a href = "https://dados.mma.gov.br/organization/ministerio-do-meio-ambiente" target="_blank">Ministério do Meio Ambiente</a>
          </p>
          <p style={{fontSize:'32px', color:'lime'}}> Equipe do Animal Crossing</p>
          
        </main>
      </div>
    </>
  );
};

export default HomePage;
