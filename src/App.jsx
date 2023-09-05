import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/' element={<Login/>} />
            <Route path='/' element={<Register/>} />
            <Route path='/' element={<Profile/>} />
        </Routes>
    </Router>
  )
}

export default App
