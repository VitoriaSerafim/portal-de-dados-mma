import BrazilMap from "@/components/BrazilMap";
import { useState } from "react";
const Mapa = () => {

  return (
    <div className=" min-h-screen flex items-center justify-center p-24 "
        style={{
          backgroundColor: "#ffffff",
          flexDirection: "column",
        }}>
      <BrazilMap/>
    </div>
  );
};

export default Mapa;
