import NavbarComponent from "../../components/Navbar/Navbar";

function Add() {
  const theObject = {
    name: "Javier",
    age: 23,
    country: "Colombia",
    city: "Medellin",

    getFullName: function () {
      return `${this.name} ${this.age} ${this.country} ${this.city}`;
    },
  };

  return (
    <div className="flex flex-col justify-start items-center bg-black h-screen w-full">
      <NavbarComponent />

      <div
        className="flex flex-col justify-start items-center gap-3 w-10/12 md:w-1/2 h-3/4  rounded-2xl overflow-hidden mt-20 overflow-y-auto scrollbar-hidden bg-zinc-950"
      >
        <div className="flex w-full pl-4 pt-2">
          <h1 className="text-md text-slate-600">Añadir Usuario</h1>
        </div>
        <div className="">
          <form action="">
        
          </form>
        </div>
      </div>
    </div>
  );
}
export default Add;
