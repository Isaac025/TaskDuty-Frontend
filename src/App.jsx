import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";
import MyTask from "./pages/MyTask";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-task" element={<NewTask />} />
          <Route path="/my-task" element={<MyTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
