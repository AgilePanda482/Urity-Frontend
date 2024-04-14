import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { getUserById, updateUser } from "../../services/users";

const ModalComponent = ({ isOpen, onClose, userId }) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [collegeCode, setCode] = useState("");
  const [career, setCareer] = useState("");
  const [cardUID, setUIDCredential] = useState("");
  const [status, setStatus] = useState("");
  const [grade, setGrade] = useState("");
  const [group, setGroup] = useState("");
  const [shift, setShift] = useState("");
  const [location, setLocation] = useState("");

  // Add state variables for other user attributes
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(userId);
        setUser(response.data);
        console.log(response.data);
        // Populate input fields with user data
        setName(response.data.nombres || "");
        setCode(response.data.codigo || "");
        setGrade(response.data.grado || "");
        setGroup(response.data.grupo || "");
        setCareer(response.data.carrera || "");
        setShift(response.data.turno || "");
        setStatus(response.data.estadoInstitucional || "");
        setUIDCredential(response.data.UIDTarjeta || "");
        setLocation(response.data.localizacionAlumno || "");
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [userId]);

  //Handle Inputs
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleUpdateUser = async () => {
    try {
      // Check if code value is not null or empty
      const updatedUserData = {
        name,
        collegeCode,
        career,
        cardUID,
        status,
        shift,
        location,
        grade,
        group,
      };

      await updateUser(userId, updatedUserData);
      console.log(`El alumno ${name} fue actualizado exitosamente`);

      onClose();
      //recargar pagina
      window.location.reload();
    } catch (error) {
      console.error("Hola");
      console.error("Error updating user data:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      backdrop="blur"
      data-theme="dark"
    >
      <ModalContent className="p-5">
        <ModalBody className="flex flex-col w-full gap-1">
          <div className="flex w-full">
            <Input
              bordered
              fullWidth
              color="default"
              size="sm"
              label="Nombre completo"
              className="w-full text-sm"
              value={name}
              onChange={(e) => handleInputChange(e, setName)}
            />
          </div>

          <div className="flex gap-1">
            <Input
              bordered
              fullWidth
              color="default"
              size="sm"
              label="Código de estudiante"
              className="w-5/12 text-sm"
              value={collegeCode}
              onChange={(e) => handleInputChange(e, setCode)}
            />

            <Input
              bordered
              fullWidth
              color="default"
              size="sm"
              label="Carrera (BGC, BTI, BTW, BGA)"
              className="w-7/12 text-sm"
              value={career}
              onChange={(e) => handleInputChange(e, setCareer)}
            />
          </div>

          <div className="flex gap-1">
            <Input
              bordered
              fullWidth
              color="default"
              size="sm"
              label="ID de credencial"
              className="w-6/12 text-sm"
              value={cardUID}
              onChange={(e) => handleInputChange(e, setUIDCredential)}
            />
            <Input
              bordered
              fullWidth
              color="default"
              size="sm"
              label="Estado Academico"
              className="w-6/12 text-sm"
              value={status}
              onChange={(e) => handleInputChange(e, setStatus)}
            />
          </div>

          <div className="flex gap-1">
            <Input
              bordered
              fullWidth
              color="default"
              size="sm"
              label="Grado"
              className="w-2/12 text-sm"
              value={grade}
              onChange={(e) => handleInputChange(e, setGrade)}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="sm"
              label="Grupo"
              className="w-2/12 text-sm"
              value={group}
              onChange={(e) => handleInputChange(e, setGroup)}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="sm"
              label="Turno"
              className="w-4/12 text-sm"
              value={shift}
              onChange={(e) => handleInputChange(e, setShift)}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="sm"
              label="Ubicación de alumno"
              className="w-4/12 text-sm"
              value={location}
              onChange={(e) => handleInputChange(e, setLocation)}
            />
          </div>
        </ModalBody>
        <ModalFooter className="flex justify-between">
          <Button color="danger" variant="flat" type="submit" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            color="primary"
            variant="bordered"
            type="submit"
            onClick={handleUpdateUser}
          >
            Editar Datos
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
