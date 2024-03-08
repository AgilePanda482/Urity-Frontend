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
    <div className="flex flex-col bg-black h-sreen">
      <NavbarComponent />

      {theObject.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "2.5em",
            width: "95%",
            margin: ".5em auto",
            gap: ".4em",
            // overflow: "hidden",
          }}
        >
          <AccessCard
            userName={item.name}
            id={item.id}
            status={item.status}
            species={item.species}
            image={item.image}
            time={`${currentHour}:${currentMinute}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
