import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { homeAccess } from "../../services/users";

import NavbarComponent from "../../components/Navbar/Navbar";
import AccessCard from "../../components/Access/AccessCard";
import { socketlink } from "../../services/socket";

const socket = io(socketlink);

const scrollbarStyle = {
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "thin",
  scrollbarColor: "#121212 #040404",
};

function Home() {
  // Define el estado para almacenar el objeto
  const [theObject, setTheObject] = useState([]);

  useEffect(() => {
    // Añade la función 'receiveData' como escucha del evento 'UID'
    socket.on("UID", (data) => {
      try {
        setTheObject(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    });
    // Limpia la escucha del evento 'UID' cuando el componente se desmonta
    return () => {
      socket.off("UID");
    };
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const { data } = await homeAccess();
        setTheObject(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    loadUsers();
  }, []);

  // ramdom image
  // const avatarPicture = () => {
  //   const num = Math.floor(Math.random() * 300);
  //   return `https://rickandmortyapi.com/api/character/avatar/${num}.jpeg`;
  // };

  const getDayAndMonth = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    switch (month) {
      case 1:
        return `${day} de Enero`;
      case 2:
        return `${day} de Febrero`;
      case 3:
        return `${day} de Marzo`;
      case 4:
        return `${day} de Abril`;
      case 5:
        return `${day} de Mayo`;
      case 6:
        return `${day} de Junio`;
      case 7:
        return `${day} de Julio`;
      case 8:
        return `${day} de Agosto`;
      case 9:
        return `${day} de Septiembre`;
      case 10:
        return `${day} de Octubre`;
      case 11:
        return `${day} de Noviembre`;
      case 12:
        return `${day} de Diciembre`;
    }
    return `${day} de ${month}`;
  };

  return (
    //CONTAINER SCREEN
    <div className="flex flex-col justify-start items-center bg-black h-screen w-full">
      {/* NAVBAR */}
      <NavbarComponent />

      <div className="w-11/12 md:w-1/2">
        <p className="text-white text-md mt-10 font-bold pl-4">
          Accesos de hoy {getDayAndMonth(new Date())}:
        </p>
      </div>
      {/* CARD CONTAINER */}
      <div
        className="flex justify-center w-11/12 md:w-1/2 h-3/4 mt-2 rounded-2xl overflow-hidden overflow-y-scroll"
        style={{
          ...scrollbarStyle,
          background: "#030303",
        }}
      >
        <div className="flex flex-col-reverse w-full justify-end items-center gap-3 h-full py-4">
          {theObject.map((item, index) => (
            <AccessCard
              key={index}
              // image={avatarPicture()}
              userName={item.nombres}
              id={item.codigo}
              grade={item.grado}
              group={item.grupo}
              career={item.carrera}
              turn={item.turno}
              //STATUS
              status={item.esEntrada}
              //TIME
              time={item.hora}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
