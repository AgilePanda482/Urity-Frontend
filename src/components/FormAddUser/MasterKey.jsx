import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../Login/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../Login/EyeSlashFilledIcon";

export default function LlaveMaestra() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex w-1/3 flex-wrap md:flex-nowrap gap-4">
      <Input
        label="Master Key"
        bordered
        color="primary"
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
        className="w-full"
      />
    </div>
  );
}
