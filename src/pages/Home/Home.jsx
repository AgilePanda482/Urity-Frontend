import { useEffect, useState } from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import { io } from 'socket.io-client';
import AccessCard from "../../components/Access/AccessCard";

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


  // const time = new Date().toLocaleTimeString();
  // const currentDate = new Date();
  // const currentDayMonthYear = currentDate.toLocaleDateString();
  // const currentHour = currentDate.getHours(); 
  // const currentMinute = currentDate.getMinutes(); 

  return (
    <div className="flex flex-col bg-black h-screen">
      <NavbarComponent />

      {/* Asegúrate de mapear el array para renderizar cada objeto */}
      {theObject.map((item, index) => (
        <div key={index} >
          <p className="text-xl">{item.Codigo}</p>
          <p className="text-xl">{item.UID}</p>
          <p className="text-xl">{item.Nombre}</p>
          <p className="text-xl">{item.DatoAcademico}</p>
          {/* Asegúrate de que getFullName sea una función definida */}
          <p className="text-xl text-red-500">{item.getFullName ? item.getFullName() : ''}</p>
        </div>
      ))}

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '65vh',
        width: '95%',
        backgroundColor: '',
        margin: '3em auto',
        gap: '.4em',
        overflow: "hidden"
      }}>

        <AccessCard />
        <AccessCard />
        <AccessCard />
        <AccessCard />
        <AccessCard />
        <AccessCard />
        <AccessCard />
        <AccessCard />
        <AccessCard />
        <AccessCard />
        <AccessCard />
        <AccessCard />
        <AccessCard />
      </div>


    </div>
  );
}

export default Home;
