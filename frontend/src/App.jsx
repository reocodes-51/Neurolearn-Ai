import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StudentForm from "./pages/StudentForm";
import Assessment from "./pages/Assessment";
import ReadingAssessment from "./pages/ReadingAssessment";
import WritingAssessment from "./pages/WritingAssessment";
import Processing from "./pages/Processing";
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Student Registration */}
        <Route path="/register" element={<StudentForm />} />

        {/* Assessment */}
        <Route path="/assessment" element={<Assessment />} />

        {/* Reading Assessment */}
        <Route path="/reading" element={<ReadingAssessment />} />

        {/* Writing Assessment */}
        <Route path="/writing" element={<WritingAssessment />} />

        {/* AI Processing */}
        <Route path="/processing" element={<Processing />} />

        {/* Results */}
        <Route path="/result" element={<Result />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;