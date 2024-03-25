import React from "react";
import { Input } from "@nextui-org/react";

export default function Codigo({ field, form: { touched, errors }, ...props }) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input 
        type="number" 
        label="Código" 
        color="default"
        bordered
        {...field} // Pass field props to Input component
        {...props} // Pass other props
      />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
}
