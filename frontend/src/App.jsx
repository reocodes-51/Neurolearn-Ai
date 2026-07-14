import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StudentForm from "./pages/StudentForm";
import ReadingAssessment from "./pages/ReadingAssessment";
import WritingAssessment from "./pages/WritingAssessment";
import Processing from "./pages/Processing";
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reading" element={<ReadingAssessment />} />
        <Route path="/writing" element={<WritingAssessment />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;