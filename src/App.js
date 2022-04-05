import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Settings from "./pages/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<HomePage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
