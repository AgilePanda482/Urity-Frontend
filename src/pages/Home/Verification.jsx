import NavbarComponent from "../../components/Navbar/Navbar";
import ButtonVerify from "../../components/VerifyComps/ButtonVerify";

function Verification() {
  return (
    <div className="flex flex-col justify-start items-center bg-black h-screen w-full">
      <NavbarComponent />
      <div className="flex flex-col justify-between items-center h-2/3 w-5/12 mt-20 p-10">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl text-white font-bold">Verificación de credencial</h1>
          <p className="text-md text-gray-500 mt-2">
            Presione el boton de verificación y coloque la credencial en el lector.
          </p>
        </div>

        <ButtonVerify />
      </div>
    </div>
  );
}
export default Verification;
