import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";

export default function Search() {
  return (
    <div
      className="w-full h-auto rounded-2xl flex justify-center items-center text-white"
      data-theme="dark"
      style={{ backgroundColor: "black" }}
    >
      <Input
        label="Buscar alumno"
        className=""
        isClearable
        radius="lg"
        classNames={{
          label: "",
          input: [
            "text-black/90 dark:text-white/90",
            "placeholder:text-black dark:placeholder:text-white/90",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-zinc-900",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        // startContent={
        //   <SearchIcon className="text-white mb-0.5 dark:text-white/90 text-black pointer-events-none flex-shrink-0" />
        // }
      />
    </div>
  );
}
