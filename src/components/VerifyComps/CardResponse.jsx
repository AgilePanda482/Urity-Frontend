import React from "react";
import {Code} from "@nextui-org/react";

export default function CardResponse() {
  return (
    <div className="flex">
      <Code color="success">La credencial está verificada</Code>
      {/* <Code color="danger">La credencial no está verificada</Code>
      <Code color="warning">No se encontró la credencial</Code> */}
    </div> 
  );
}
