import React, { useState } from "react";
import {Spinner} from "@nextui-org/react";

export default function Loading() {
    const [showSpinner, setShowSpinner] = useState(false);

  return (
    <div className="flex gap-4 hidden" style={{ display: showSpinner ? 'block' : 'none' }}>
      <Spinner label="Coloque la credencial en el lector" color="primary" labelColor="primary"/>
    </div> 
  );
}
