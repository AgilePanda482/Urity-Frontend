import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";
import Añadir from "./pages/Home/Añadir";
import Verificar from "./pages/Home/Verificar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/home" element={<Home />} />
      <Route path="/añadir" element={<Añadir />} />
      <Route path="/verificar" element={<Verificar />} />
    </Routes>
  );
}

export default App;