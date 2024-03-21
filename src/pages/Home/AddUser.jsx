import NavbarComponent from "../../components/Navbar/Navbar";

import Foto from "../../components/FormAddUser/UserPhoto";
import Nombre from "../../components/FormAddUser/Name";
import Codigo from "../../components/FormAddUser/CollegeCode";
import CredencialUID from "../../components/FormAddUser/CardUID";
import Carrera from "../../components/FormAddUser/Career";
import GradoGrupo from "../../components/FormAddUser/Grade.Group";

function Add() {

  return (
    <div className="flex flex-col justify-start items-center bg-black h-screen w-full">
      <NavbarComponent />

      <div className="grid grid- justify-start items-start gap-3 w-1/2 md:w-1/3 h-auto rounded-2xl p-5 overflow-hidden mt-20 overflow-y-auto scrollbar-hidden bg-zinc-950" data-theme="dark">
        
        <Foto />
        <Nombre />
        <Codigo />

        <GradoGrupo />
        <Carrera />

        <CredencialUID />

      </div>
    </div>
  );
}
export default Add;
