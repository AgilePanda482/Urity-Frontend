import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { options } from "../FormAddUser/Shift/data";

export default function Shift() {
  return (
    <div className="flex w-5/12 md:w-5/12 lg:w-5/12 xl:w-5/12 flex-wrap md:flex-nowrap">
      <Autocomplete label="Turno" className="max-w-xs" data-theme="dark">
        {options.map((shift) => (
          <AutocompleteItem key={shift.value} value={shift.value}>
            {shift.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
