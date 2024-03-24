import NavbarComponent from "../../components/Navbar/Navbar";

import Foto from "../../components/FormAddUser/UserPhoto";
import Nombre from "../../components/FormAddUser/Name";
import Codigo from "../../components/FormAddUser/CollegeCode";
import CredencialUID from "../../components/FormAddUser/CardUID";
import Carrera from "../../components/FormAddUser/Career";
import Grado from "../../components/FormAddUser/Grade";
import Groupo from "../../components/FormAddUser/Group";
import Shift from "../../components/FormAddUser/Shift";
import LlaveMaestra from "../../components/FormAddUser/MasterKey";
import Registrar from "../../components/FormAddUser/Submit";

function Add() {
  return (
    <div className="flex flex-col justify-start items-center bg-black h-screen w-full">
      <NavbarComponent />

      <div
        className="flex flex-col justify-center items-center gap-5 h-auto w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12 rounded-2xl p-5 overflow-hidden md:mt-20 mt-10 overflow-y-auto scrollbar-hidden bg-zinc-950"
        data-theme="dark"
        // style={{ width: "23.5em", maxWidth: "800px" }}
      >
        <div className="flex justify-center items-center w-full mb-3">
          <Foto />
        </div>

        <div className="flex justify-center items-center w-full h-12">
          <Nombre />
        </div>

        <div className="flex justify-evenly items-center w-full h-12 gap-2">
          <Codigo />
          <Grado />
          <Groupo />
        </div>

        <div className="flex justify-evenly items-center w-full h-12 gap-2">
          <Carrera />
          <Shift />
        </div>

        <div className="flex justify-center items-center w-full h-12 gap-2">
          <CredencialUID />
          <LlaveMaestra />
        </div>

        <div className="flex justify-center items-center w-full h-12 gap-2">
          <Registrar />
        </div>    
      </div>
    </div>
  );
}
export default Add;
