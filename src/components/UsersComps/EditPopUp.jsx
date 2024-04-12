import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
// import Nombre from "../FormAddUser/Name";

const ModalComponent = ({ isOpen, onClose, userId }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      backdrop="blur"
      data-theme="dark"
    >
      <ModalContent className="p-5">
        <ModalBody className="flex flex-col gap-2">
          <div className="">
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="sm"
              placeholder={userId}
              className="text-sm"
            />
          </div>
          <div className="flex gap-2">
            <Input
              bordered
              fullWidth
              color="default"
              size="sm"
              placeholder={userId}
              className="w-5/12 text-sm"
              isClearable
              value={userId}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="sm"
              placeholder="Grado"
              className="w-4/12 text-sm"
            />
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="sm"
              placeholder="Grupo"
              className="w-3/12 text-sm"
            />
          </div>
          <div className="flex gap-2">
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="sm"
              placeholder="Carrera"
              className="w-8/12 text-sm"
            />
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="sm"
              placeholder="Turno"
              className="w-4/12 text-sm"
            />
          </div>
          
          <div className="flex gap-2">
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="sm"
              placeholder="Estado Institucional"
              className="w-6/12 text-sm"
            />
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="sm"
              placeholder="Ubicación del Alumno"
              className="w-6/12 text-sm"
            />
          </div>
          <div className="flex gap-2">
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="sm"
              placeholder="ID de la credencial"
              className="w-7/12 text-sm"
            />
            <Input
              clearable
              bordered
              fullWidth
              size="sm"
              label="Master Key"
              className="w-5/12 text-sm"
              color="primary"
            />
          </div>
        </ModalBody>
        <ModalFooter className="flex justify-between">
          <Button
            color="danger"
            variant="flat"
            type="submit"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            color="primary"
            variant="bordered"
            type="submit"
            onClick={() => console.log("Editando...")}
          >
            Editar Datos
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
