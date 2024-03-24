import React from "react";
import {Input} from "@nextui-org/react";

export default function LlaveMaestra() {
  return (
    <div className="flex w-1/2 flex-wrap md:flex-nowrap gap-4">
      <Input 
        type="text" 
        label="Master Key" 
        color="primary"
        bordered
        required
      />
    </div>
  );
}