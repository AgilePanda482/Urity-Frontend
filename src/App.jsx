import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import Home from "./pages/Home/Home";
import Add from "./pages/Home/Añadir";
import Verification from "./pages/Home/Verificar";
import Users from "./pages/Home/Usuarios";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/home" element={<Home />} />
      <Route path="/añadir" element={<Add />} />
      <Route path="/verificar" element={<Verification />} />
      <Route path="/usuarios" element={<Users />} />
    </Routes>
  );
}

export default App;