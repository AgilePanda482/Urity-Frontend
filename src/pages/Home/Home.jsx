import { useEffect, useState } from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import { io } from "socket.io-client";
import AccessCard from "../../components/Access/AccessCard";

const socket = io("http://localhost:3000");

const scrollbarStyle = {
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "thin",
  scrollbarColor: "#121212 #040404",
};

function Home() {
  // Define el estado para almacenar el objeto
  const [theObject, setTheObject] = useState([]);

  useEffect(() => {
    // Actualiza el estado con los datos recibidos
    const receiveData = (data) => {
      setTheObject((prevData) => [...prevData, data]);
    };

    // Añade la función 'receiveData' como escucha del evento 'UID'
    socket.on("UID", receiveData);

    // Limpia la escucha del evento 'UID' cuando el componente se desmonta
    return () => {
      socket.off("UID", receiveData);
    };
  }, []);

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
        className="flex justify-center w-11/12 md:w-1/2 h-3/4 rounded-2xl mt-20 overflow-hidden overflow-y-scroll"
        style={scrollbarStyle}
      >
        <div
          className="flex flex-col-reverse w-full justify-end items-center gap-3 h-full py-4"
          style={{ backgroundColor: "#010101" }}
        >
          {theObject.map((item, index) => (
            <AccessCard
              key={index}
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
    </div>
  );
}

export default Home;
