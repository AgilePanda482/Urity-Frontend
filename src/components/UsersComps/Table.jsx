import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import EditPopUp from "./EditPopUp"; // Import your modal component
import { DeleteIcon } from "./DeleteIcon";
import { columns } from "./data";
import { getAll } from "../../services/users";
import { deleteUser } from "../../services/users";
import { io } from "socket.io-client";
import { transform } from "framer-motion";

const socket = io("http://localhost:3000");

const statusColorMap = {
  Dentro: "success",
  Fuera: "danger",
  Desconocido: "warning",
};

const scrollbarStyle = {
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "thin",
  scrollbarColor: "#27272a #18181b",
};

export default function UsersTable() {
  const [userData, setUserData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State variable to track modal open/close
  const [selectedUserId, setSelectedUserId] = useState(null); // State variable to track selected user ID

  useEffect(() => {
    socket.on("changeStatusFront", (data) => {
      try {
        setUserData(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    });
    // Función de limpieza para remover el listener
    return () => {
      socket.off("changeStatusFront");
    };
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const { data } = await getAll();
        // console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    loadUsers();
  }, []);

  const deleteUserFunction = async (id) => {
    try {
      const updatedUserData = userData.filter((user) => user.codigo !== id);
      setUserData(updatedUserData);

      await deleteUser(id);
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (userId) => {
    setSelectedUserId(userId);
    console.log(userId);
    setIsModalOpen(true); // Open modal when EditIcon is clicked
  };

  // const updateUser = (user) => {
  //   console.log(user);
  // };

  const avatarPicture = () => {
    const num = Math.floor(Math.random() * 300);
    return `https://rickandmortyapi.com/api/character/avatar/${num}.jpeg`;
  };

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      //Nombre - Name
      case "nombres":
        return (
          <User
            avatarProps={{ radius: "full", src: avatarPicture() }}
            name={cellValue}
          ></User>
        );
      //Carrera - Role
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">Alumno</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.carrera}
            </p>
          </div>
        );
      //localizacionAlumno - Status
      case "localizacionAlumno":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.localizacionAlumno]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      //Edición - Actions
      case "actions":
        return (
          <div className="relative flex items-center gap-3">
            <Tooltip content="Editar datos" color="default">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => handleEdit(user.codigo)}
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar alumno">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon
                  onClick={() => {
                    deleteUserFunction(user.codigo);
                  }}
                />
              </span>
            </Tooltip>
          </div>
        );
      default:
      return cellValue;
    }
  };

  return (
    <>
      <div
        className="w-full h-5/6 overflow-y-scroll bg-zinc-900 rounded-2xl overflow-hidden"
        data-theme="dark"
        style={scrollbarStyle}
      >
        <Table aria-label="Example table with custom cells">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
                className="bg-zinc-800"
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={userData}>
            {(item) => (
              <TableRow
                key={item.codigo}
                className="hover:bg-gradient-to-r from-zinc-800 to-zinc-900 cursor-pointer"
              >
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <EditPopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} userId={selectedUserId} />
      {/* Render modal component */}
    </>
  );
}
