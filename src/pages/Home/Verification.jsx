import React, { useState } from "react";
import io from "socket.io-client";

import NavbarComponent from "../../components/Navbar/Navbar";
import CardResponse from "../../components/VerifyComps/CardResponse";
// import Loading from "../../components/VerifyComps/Loading";
// import ButtonVerify from "../../components/VerifyComps/ButtonVerify";

import { Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";

function Verification() {
  const socket = io("http://localhost:3000");
  const [showSpinner, setShowSpinner] = useState(false);


  const handleVerify = () => {
    setShowSpinner(true);

    socket.emit('verify', { verify: true });
    console.log("Verificando...");

    socket.on('verifyUIDFromArduino', (data) => {
      console.log(data);
    });   
  };

  return (
    <div className="flex flex-col justify-start items-center bg-black h-screen w-full">
      <NavbarComponent />

      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col justify-between items-center h-5/6 w-11/12 my-10 p-5 md:w-8/12 xl:w-6/12 2xl:w-5/12 2xl:h-4/6 3xl:w-4/12 3xl:bg-slate-500">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl text-white font-bold">
              Verificación de credencial
            </h1>
            <p className="text-md text-gray-500 mt-2">
              Presione el boton de verificación y coloque la credencial en el
              lector.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <CardResponse />
          </div>

          <div
            className="flex hidden"
            style={{ display: showSpinner ? "block" : "none" }}
          >
            <Spinner
              label="Espere..."
              color="primary"
              labelColor="primary"
            />
          </div>

          <div className="flex flex-wrap items-center">
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
    </div>
  );
}

export default Verification;
