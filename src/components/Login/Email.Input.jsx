import React from "react";
import { Input } from "@nextui-org/react";

export default function EmailInput({
  field,
  form: { touched, errors },
  ...props
}) {
  const [value, setValue] = React.useState("");

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <Input
      value={value}
      type="email"
      label="Email"
      size="sm"
      errorMessage={isInvalid && "Please enter a valid email"}
      onValueChange={setValue}
      className="max-w-xs"
      {...field} // Pass field props to Input component
      {...props} // Pass other props
      helperText={touched[field.name] && errors[field.name]}
    />
  );
}
