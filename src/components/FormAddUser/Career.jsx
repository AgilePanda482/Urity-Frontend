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
    <div className="flex w-8/12 md:w-8/12">
      <Autocomplete
        label="Carrera"
        data-theme="dark"
        size="sm"
        isRequired
        inputValue={inputValue}
        items={items}
        selectedKey={field.value}
        onInputChange={onInputChange}
        onSelectionChange={handleChange}
        onKeyDown={stopPropagation} 
        onClick={stopPropagation}
        {...props}
      >
          {(item) => (
            <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
          )}
      </Autocomplete>
    </div>
  );
}
