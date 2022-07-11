import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Settings from "./pages/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileUserPage from "./pages/ProfileUserPage/ProfileUserPage";
import ProfileGuestPage from "./pages/ProfileGuestPage/ProfileGuestPage";
import Upload from "./pages/UploadPages/Upload/Upload";
import UploadPostPage from "./pages/UploadPages/UploadPostPage/UploadPostPage";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/profile-User' element={<ProfileUserPage />} />
          <Route path='/profile-Guest' element={<ProfileGuestPage />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/uploadpostpage' element={<UploadPostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
