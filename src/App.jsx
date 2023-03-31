import './App.css';
import InstagramLogin from '../src/pages/InstagramLogin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';

function App() {
  
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route index element={<LandingPage/>}/>
            <Route path="login" element={<InstagramLogin/>}/>
            <Route path="signup" element={<SignUp/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
