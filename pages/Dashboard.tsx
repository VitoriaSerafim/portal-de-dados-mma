import Head from "next/head";
import Header from "../components/Header";
import Searchbar from "@/components/SearchBar";
const Dashboard = () => {
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
  <Searchbar/>

        <main className="text-black text-center items-center">
      
        </main>
      </div>
    </>
  );
};

export default Dashboard;
