import React from "react";
import {Button} from "@nextui-org/react";
import {UserIcon} from '../FormAddUser/Submit/UserIcon.jsx';

export default function Registrar() {
  return (
    <div className="flex gap-4 items-center">
      <Button color="primary" variant="bordered" startContent={<UserIcon/>}>
        Añadir Alumno
      </Button>
    </div>
  );
}
