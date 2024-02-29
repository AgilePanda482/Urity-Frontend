import { useEffect, useState } from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import { io } from 'socket.io-client';

const socket = io('/');

function Home() {
  // Define el estado para almacenar el objeto
  const [theObject, setTheObject] = useState([]);

  useEffect(() => {
    // Escucha el evento 'UID' y recibe datos
    socket.on('UID', data => {
      console.log(data.Codigo);
      receiveData(data);
    });
  }, []); // Asegúrate de que el efecto se ejecute solo una vez

  const receiveData = (data) => {
    // Actualiza el estado con el nuevo objeto
    setTheObject(prevData => [...prevData, data]);
  };

  return (
    <div className="flex flex-col bg-black">
      <NavbarComponent />
      <div className="h-screen text-white w-1/2 m-auto bg-slate-500 rounded-2xl overflow-hidden">
        <div className="h-screen flex-col gap-5 bg-slate-500 flex justify-center items-center text-center">
          <h1 className="text-5xl font-bold">Home</h1>
          {/* Asegúrate de mapear el array para renderizar cada objeto */}
          {theObject.map((item, index) => (
            <div key={index}>
              <p className="text-xl">{item.Codigo}</p>
              <p className="text-xl">{item.UID}</p>
              <p className="text-xl">{item.Nombre}</p>
              <p className="text-xl">{item.DatoAcademico}</p>
              {/* Asegúrate de que getFullName sea una función definida */}
              <p className="text-xl text-red-500">{item.getFullName ? item.getFullName() : ''}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    </div>
  );
}

export default Home;
