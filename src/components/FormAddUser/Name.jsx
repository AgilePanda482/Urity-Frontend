import React from "react";
import {Input} from "@nextui-org/react";

export default function Nombre() {
  return (
    <div className="flex w-2/5 flex-wrap md:flex-nowrap gap-4">
      <Input 
        type="text" 
        label="Nombre del estudiante" 
        color="default"
        bordered
      />
    </div>
  );
}