import { useEffect, useState } from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import { io } from "socket.io-client";
import AccessCard from "../../components/Access/AccessCard";

const socket = io("/");

function Home() {
  // Define el estado para almacenar el objeto
  const [theObject, setTheObject] = useState([]);

  useEffect(() => {
    // Escucha el evento 'UID' y recibe datos
    socket.on("UID", (data) => {
      // console.log(data.Codigo);
      receiveData(data);
    });
  }, []); // Asegúrate de que el efecto se ejecute solo una vez

  const receiveData = (data) => {
    // Actualiza el estado con el nuevo objeto
    setTheObject((prevData) => [...prevData, data]);
  };

  // TIME
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  return (
    //CONTAINER SCREEN
    <div className="flex flex-col justify-start items-center bg-black h-screen w-full">
      {/* NAVBAR */}
      <NavbarComponent />


        {/* CARD CONTAINER */}
        <div 
          className="flex flex-col-reverse justify-end items-center gap-3 
          w-10/12 md:w-1/2 h-3/4  rounded-2xl overflow-hidden mt-20 overflow-y-auto scrollbar-hidden">
          {theObject.map((item, index) => (
            <AccessCard
              userName={item.name}
              id={item.id}
              status={item.status}
              species={item.species}
              image={item.image}
              time={`${currentHour}:${currentMinute}`}
            />
          ))}
        </div>

    </div>
  );
}

export default Home;
