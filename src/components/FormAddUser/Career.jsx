import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { options } from "../FormAddUser/Career/data";

export default function Career() {
  return (
    <div className="flex w-8/12 md:w-7/12 lg:w-8/12 xl:w-8/12 flex-wrap md:flex-nowrap gap-4">
      <Autocomplete label="Carrera" className="max-w-xs" data-theme="dark">
        {options.map((career) => (
          <AutocompleteItem key={career.value} value={career.value}>
            {career.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
