import NavbarComponent from "../../components/Navbar/Navbar"
import UsersTable from "../../components/UsersComps/Table"
import Search from "../../components/UsersComps/Search"

function Users() {

  return (
    <div className="flex flex-col h-screen bg-black">
      <NavbarComponent />
      <div className="flex flex-col justify-between items-center gap-10 h-5/6 text-white w-auto m-auto rounded-2xl overflow-hidden">
        <Search />
        <UsersTable  />
      </div>
    </div>
  )
}
export default Users