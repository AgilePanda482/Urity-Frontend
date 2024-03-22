import React from "react";
import { Input } from "@nextui-org/react";

export default function Grupo() {
  return (
    <div className="flex w-3/12 flex-wrap md:flex-nowrap gap-4">
      <Input type="text" label="Grupo" color="default" bordered />
    </div>
  );
}
