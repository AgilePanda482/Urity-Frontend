import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;