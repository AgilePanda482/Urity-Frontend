import React from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import ButtonVerify from "../../components/VerifyComps/ButtonVerify";
import CardResponse from "../../components/VerifyComps/CardResponse";
import Loading from "../../components/VerifyComps/Loading";

import { Button } from "@nextui-org/react";

function Verification() {

  const handleVerify = () => {
    console.log("Verificando...");
  };

  return (
    <div className="flex flex-col justify-start items-center bg-black h-screen w-full">
      <NavbarComponent />
      <div className="flex flex-col justify-between items-center h-2/3 w-5/12 mt-20 p-10">
        {/* Resto del contenido... */}
        <div className="flex flex-col justify-center items-center">
          <h1></h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <CardResponse />

        </div>

        <div className="flex flex-col justify-center items-center">
          <Loading />
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <Button
            color="primary"
            variant="flat"
            radius="sm"
            onClick={handleVerify}
          >
            Verificar Credencial
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Verification;
