import React from "react";
import {Input} from "@nextui-org/react";

export default function CredencialUID() {
  return (
    <div className="flex w-2/7 flex-wrap md:flex-nowrap gap-4">
      <Input 
        type="text" 
        label="ID de la credencial" 
        color="default"
        bordered
      />
    </div>
  );
}