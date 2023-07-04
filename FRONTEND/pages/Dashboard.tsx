import Head from "next/head";
import Header from "../components/Header";
import Searchbar from "@/components/SearchBar";
import BrazilMap from "@/components/BrazilMap";
const Dashboard = () => {
  return (
    <>
      <div
        className=" min-h-screen flex items-center justify-center p-24 "
        style={{
          backgroundColor: "#ffffff",
          flexDirection: "column",
        }}
      >
  <Searchbar/>

        <main className="text-black text-center items-center">
            <BrazilMap/>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
