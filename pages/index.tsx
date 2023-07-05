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

        </main>
      </div>
    </>
  );
};

export default HomePage;
