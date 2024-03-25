import React from "react";
import { Input } from "@nextui-org/react";

export default function CredencialUID({ field, form: { touched, errors }, ...props }) {
  return (
    <div className="flex w-2/3 flex-wrap md:flex-nowrap gap-4">
      <Input
        type="text"
        label="ID de la credencial"
        color="default"
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
