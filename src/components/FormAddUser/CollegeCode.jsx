import React from "react";
import {Input} from "@nextui-org/react";

export default function Codigo() {
  return (
    <div className="flex w-2/7 flex-wrap md:flex-nowrap gap-4">
      <Input 
        type="number" 
        label="Código de estudiante" 
        color="default"
        bordered
      />
    </div>
  );
}