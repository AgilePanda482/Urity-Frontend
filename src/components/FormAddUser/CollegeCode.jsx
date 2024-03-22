import React from "react";
import { Input } from "@nextui-org/react";

export default function Codigo() {
  return (
    <div className="flex w-6/12 flex-wrap md:flex-nowrap gap-4">
      <Input type="number" label="Código" color="default" bordered />
    </div>
  );
}
