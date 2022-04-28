import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Registration/Login/Login';
import SignUp from './components/Registration/SignUp/SignUp';
import Donation from './components/Donation/Donation';
import Event from './components/Event/Event';
import Admin from './components/Admin/Admin';
import Blog from './components/Blog/Blog';
import RequireAuth from './auth/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={
          <RequireAuth>
            <Event />
          </RequireAuth>
        }></Route>
        <Route path="/event/:id" element={
          <RequireAuth>
            <Event />
          </RequireAuth>
        }></Route>
        <Route path="/donation" element={
          <RequireAuth>
            <Donation />
          </RequireAuth>
        }></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
