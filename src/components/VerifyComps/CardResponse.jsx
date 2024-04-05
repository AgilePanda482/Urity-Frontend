import React from "react";
import {Code} from "@nextui-org/react";

export default function CardResponse() {
  return (
    <div className="flex flex-col gap-4">
      <Code color="success">La credencial está registrada</Code>
      <Code color="danger">La credencial no existe</Code>
      <Code color="warning">No se encontró la credencial</Code>
    </div> 
  );
}
