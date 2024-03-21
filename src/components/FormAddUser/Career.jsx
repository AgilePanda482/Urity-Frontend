import React from "react";
import {Input} from "@nextui-org/react";

export default function Carrera() {
  return (
    <div className="flex w-2/7 flex-wrap md:flex-nowrap gap-4">
      <Input 
        type="text" 
        label="Carrera" 
        color="default"
        bordered
      />
    </div>
  );
}