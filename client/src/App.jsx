import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import AITutor from "./pages/AITutor";
import Quiz from "./pages/Quiz";
import Certificate from "./pages/Certificate";
import Settings from "./pages/Settings";

import { LanguageProvider } from "./pages/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/aitutor" element={<AITutor />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;