import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Settings from "./pages/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
