import { Routes, Route, BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import Main from "../src/componentes/Main/Main";
import Login from "./componentes/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <main className="page">
        <Routes>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}

          {/* <Route element={<ProtectedRoute />}> */}
          {/* <Route path="/tasks" element={<Tasks />} /> */}
          {/* <Route path="/add-task" element={<TaskForm />} /> */}
          {/* <Route path="/tasks/:id" element={<TaskForm />} /> */}
          {/* </Route> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
