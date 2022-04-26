import { Route, Routes } from 'react-router-dom';
import './App.css';
// bootstrap link
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Registration/Login/Login';
import SignUp from './components/Registration/SignUp/SignUp';
import Donation from './components/Donation/Donation';
import Event from './components/Event/Event';
import Admin from './components/Admin/Admin';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donation" element={<Donation />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
