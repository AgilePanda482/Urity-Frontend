import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import NavbarComponent from "../../components/Navbar/Navbar";
import { Button, Spinner, Code } from "@nextui-org/react";
import VerifyCard from "../../components/VerifyComps/VerifyCard";
import { socketlink } from "../../services/socket";

function Verification() {
  const [socket, setSocket] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [responseColor, setResponseColor] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [verifyData, setVerifyData] = useState({});

  useEffect(() => {
    const newSocket = io(socketlink);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleVerify = () => {
    setShowSpinner(true);
    setDisableButton(true);
  
    // Start a 10-second timeout
    const cardTimeout = setTimeout(() => {
      // This code will execute after 10 seconds if no card is detected
      setShowSpinner(false);
      setResponseText("No se encontró la credencial");
      setResponseColor("warning");
      setShowResponse(true);
  
      // Set a timeout to hide the message and re-enable the button after 5 seconds
      setTimeout(() => {
        setShowResponse(false);
        setDisableButton(false);
      }, 5000);
    }, 10000);
  
    socket.emit("verifyCard", { verify: true });
    console.log("Esperando una credencial...");
  
    socket.on("UIDFromArduino", (data) => {
      // Clear the 10-second timeout once you receive the response from the socket
      clearTimeout(cardTimeout);
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
        setShowCard(true);
        setVerifyData(data);
      }

      socket.off("UIDFromArduino");
      // socket.off("verifyCard");
  
      setShowResponse(true);
      setTimeout(() => {
        setShowResponse(false);
        setShowCard(false);
        setDisableButton(false);
      }, 10000);
    });
  };
  

  return (
    <div className="flex flex-col justify-start items-center bg-black h-screen w-full">
      <NavbarComponent />

      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col justify-between items-center h-4/6 w-11/12 my-10 p-5 md:w-8/12 xl:w-6/12 2xl:w-5/12 2xl:h-4/6 3xl:w-4/12">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl text-white font-bold">
              Verificación de credencial
            </h1>
            <p className="text-md text-gray-500 mt-2">
              Presione el botón de verificación y coloque la credencial en el
              lector.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-auto gap-4">
            {showResponse && <Code color={responseColor}>{responseText}</Code>}
            <div className="flex w-full justify-center items-center bg-black">
              {showCard && (
                <VerifyCard
                  showCard={showCard}
                  userName={verifyData.nombres}
                  code={verifyData.codigo}
                  career={verifyData.carrera}
                  grade={verifyData.grado}
                  group={verifyData.grupo}
                  shift={verifyData.turno}
                  location={verifyData.localizacionAlumno}
                />
              )}
            </div>
          </div>
          <div
            className="flex"
            style={{ display: showSpinner ? "flex" : "none" }}
          >
            <Spinner label="Espere..." color="primary" labelColor="primary" />
          </div>

          <div className="flex">
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
