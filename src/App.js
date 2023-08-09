import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Workspace from "./pages/Workspace";
import Clients from "./pages/Clients";

const App = () => {
  return (
    <Routes className="h-full">
      <Route path="/" element={<Login />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/clients" element={<Clients />} />
    </Routes>
  );
};

export default App;
