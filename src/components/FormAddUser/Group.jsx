import React from "react";
import { Input } from "@nextui-org/react";

export default function Grupo({ field, form: { touched, errors }, ...props }) {
  return (
    <div className="flex w-3/12 flex-wrap md:flex-nowrap gap-4">
      <Input
        type="text"
        label="Grupo"
        color="default"
        size="sm"
        isRequired
        bordered
        {...field} // Pass field props to Input component
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
}
