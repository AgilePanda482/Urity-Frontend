import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import NavbarComponent from "../../components/Navbar/Navbar";
import { Button, Spinner, Code } from "@nextui-org/react";

function Verification() {
  const [socket, setSocket] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [responseColor, setResponseColor] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleVerify = () => {
    setShowSpinner(true);
    setDisableButton(true);

    socket.emit("verify", { verify: true });
    console.log("Verificando...");

    socket.on("verifyUIDFromArduino", (data) => {
      console.log(data);
      setShowSpinner(false);

      if (data.error) {
        setResponseText("La credencial no existe");
        setResponseColor("danger");
      } else if (data === "not found") {
        setResponseText("No se encontró la credencial");
        setResponseColor("warning");
      } else {
        setResponseText("La credencial está registrada");
        setResponseColor("success");
      }

      socket.off("verifyUIDFromArduino");

      setShowResponse(true);
      setTimeout(() => {
        setShowResponse(false);
        setDisableButton(false);
      }, 5000);
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
              Presione el botón de verificación y coloque la credencial en el
              lector.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {showResponse && <Code color={responseColor}>{responseText}</Code>}
          </div>

          <div
            className="flex"
            style={{ display: showSpinner ? "flex" : "none" }}
          >
            <Spinner label="Espere..." color="primary" labelColor="primary" />
          </div>

          <div className="flex flex-wrap items-center">
            <Button
              color="primary"
              variant="flat"
              radius="sm"
              onClick={handleVerify}
              disabled={disableButton}
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
