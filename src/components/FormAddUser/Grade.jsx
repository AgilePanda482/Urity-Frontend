import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { options } from "../FormAddUser/Grade/data";

export default function Grado() {
  return (
    <div className="flex w-3/12 flex-wrap md:flex-nowrap gap-4">
      <Autocomplete label="Grado" className="max-w-xs" data-theme="dark">
        {options.map((grados) => (
          <AutocompleteItem key={grados.value} value={grados.value}>
            {grados.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
