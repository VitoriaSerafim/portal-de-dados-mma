import Head from "next/head";
import Header from "../components/Header";
const HomePage = () => {
  return (
    <>
      <div
        className=" min-h-screen flex items-center justify-center "
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
          <h1 className="text-5xl font-bold mb-6 mt-12 font-black">
            Bem-vindo ao Portal de Dados AnimalCrossing
          </h1>
          <p className="text-2xl mb-10 text-zinc-500 ">
            Um portal para fácil acesso dos dados fornecidos palo Ministerio do
            Meio Ambiente do Brasil
          </p>
          <div className="flex items-center justify-center"></div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
