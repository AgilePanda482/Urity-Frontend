import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../Login/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../Login/EyeSlashFilledIcon";

export default function LlaveMaestra({ field, form: { touched, errors }, ...props }) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex w-1/3 flex-wrap md:flex-nowrap gap-4">
      <Input
        label="Master Key"
        bordered
        color="primary"
        {...field} // Pass field props to Input component
        {...props}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-xl pointer-events-none text-blue-600" />
            ) : (
              <EyeFilledIcon className="text-xl pointer-events-none text-blue-600" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className="w-full"s
      />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
}
