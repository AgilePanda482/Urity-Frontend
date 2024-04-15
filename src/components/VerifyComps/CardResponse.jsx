import React from "react";
import {Code} from "@nextui-org/react";

export default function CardResponse() {
  return (
    <div className="flex flex-col gap-4">
      <Code color="success" className="font-sans">La credencial está registrada</Code>
      <Code color="danger" className="font-sans">La credencial no existe</Code>
      <Code color="warning" className="font-sans">No se encontró la credencial</Code>
    </div> 
  );
}
