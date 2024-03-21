import NavbarComponent from "../../components/Navbar/Navbar"

function Verification() {
  const theObject = {
    name: 'Javier',
    age: 23,
    country: 'Colombia',
    city: 'Medellin',

    getFullName: function () {
      return `${this.name} ${this.age} ${this.country} ${this.city}`
    }
  }

  return (
    <div className="flex flex-col bg-black">
      <NavbarComponent />
      <div className="h-screen text-white w-1/2 m-auto bg-slate-500 rounded-2xl overflow-hidden">
        <div className="h-screen flex-col gap-5 bg-slate-500 flex justify-center items-center text-center">
          <h1 className="text-5xl font-bold">Verificar</h1>
          <p className="text-xl">{theObject.name}</p>
          <p className="text-xl">{theObject.age}</p>
          <p className="text-xl">{theObject.country}</p>
          <p className="text-xl">{theObject.city}</p>
          <p className="text-xl text-red-500">{theObject.getFullName()}</p>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    </div>
  )
}
export default Verification