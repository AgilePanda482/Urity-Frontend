import { data } from "autoprefixer"
import NavbarComponent from "../../components/Navbar/Navbar"
import { io } from 'socket.io-client'

const socket = io('/')
let infoStudent;

function Home() {

  socket.on('UID', (data) => {
    infoStudent = data;
    console.log(data)
  })


  const theObject = {
    codigo: infoStudent.codigo,
    UID: infoStudent.UID,
    Nombre: infoStudent.Nombre,
    DatoAcademico: infoStudent.DatoAcademico,

    getFullName: function () {
      return `${this.codigo} ${this.UID} ${this.Nombre} ${this.DatoAcademico}`
    }
  }

  return (
    <div className="flex flex-col bg-black">
      <NavbarComponent />
      <div className="h-screen text-white w-1/2 m-auto bg-slate-500 rounded-2xl overflow-hidden">
        <div className="h-screen flex-col gap-5 bg-slate-500 flex justify-center items-center text-center">
          <h1 className="text-5xl font-bold">Home</h1>
          <p className="text-xl">{theObject.codigo}</p>
          <p className="text-xl">{theObject.UID}</p>
          <p className="text-xl">{theObject.Nombre}</p>
          <p className="text-xl">{theObject.DatoAcademico}</p>
          <p className="text-xl text-red-500">{theObject.getFullName()}</p>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    </div>
  )
}
export default Home