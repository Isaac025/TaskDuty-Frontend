import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";
import MyTask from "./pages/MyTask";
import EditTask from "./pages/EditTask";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import ProtectedRoute from "../components/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/new-task"
            element={
              <ProtectedRoute>
                <NewTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-task"
            element={
              <ProtectedRoute>
                <MyTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-task/:id"
            element={
              <ProtectedRoute>
                <EditTask />
              </ProtectedRoute>
            }
          />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
