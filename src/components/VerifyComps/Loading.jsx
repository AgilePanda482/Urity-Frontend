import React from "react";
import {Spinner} from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex gap-4">
      <Spinner label="Leyendo..." color="primary" labelColor="primary"/>
    </div> 
  );
}
