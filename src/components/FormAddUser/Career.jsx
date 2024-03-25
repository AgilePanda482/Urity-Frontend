import React, { useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useFilter } from "@react-aria/i18n";
import { options } from "../FormAddUser/Career/data";

export default function Career({ field, form: { touched, errors }, ...props }) {
  const { startsWith } = useFilter({ sensitivity: "base" });
  const [inputValue, setInputValue] = useState(field.value);
  const [items, setItems] = useState(options);

  const handleChange = (value) => {
    field.onChange({ target: { name: field.name, value } });
    setInputValue(value);
    setItems(
      options.filter((item) =>
        startsWith(item.label.toLowerCase(), value.toLowerCase())
      )
    );
  };

  const onInputChange = (value) => {
    field.onChange({ target: { name: field.name, value } });
    setInputValue(value);
    setItems(
      options.filter((item) =>
        startsWith(item.label.toLowerCase(), value.toLowerCase())
      )
    );
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  
  return (
    <div className="flex w-6/12 md:w-4/12 ">
      <Autocomplete
        label="Carrera"
        data-theme="dark"
        inputValue={inputValue}
        items={items}
        selectedKey={field.value}
        onInputChange={onInputChange}
        onSelectionChange={handleChange}
        onKeyDown={stopPropagation} // Stop propagation for key events
        onClick={stopPropagation} // Stop propagation for click events
        {...props}
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
}


