import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";

import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";
import Add from "./pages/Home/AddUser";
import Verification from "./pages/Home/Verification";
import Users from "./pages/Home/Users";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/home" element={<Home />} />
        <Route path="/añadir" element={<Add />} />
        <Route path="/verificar" element={<Verification />} />
        <Route path="/usuarios" element={<Users />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
