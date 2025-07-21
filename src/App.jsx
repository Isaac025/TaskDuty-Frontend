import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";
import MyTask from "./pages/MyTask";
import EditTask from "./pages/EditTask";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new-task" element={<NewTask />} />
          <Route path="/my-task" element={<MyTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
