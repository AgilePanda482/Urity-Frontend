import NavbarComponent from "../../components/Navbar/Navbar"

function Home() {
  return (
    <div className="flex flex-col bg-black">
      <NavbarComponent />
      <div className="h-screen"></div>
      <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    </div>
  )
}
export default Home