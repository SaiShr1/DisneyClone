import './index.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx';
import Detail from './components/Details/Detail.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      {/* here in react-router-dom v6 Switch is replaced with Routes*/}
        <Routes> 
          <Route exact path='/' element={<Login />}>
          </Route>
          <Route exact path='/home' element={<Home />}>
          </Route>
          <Route exact path='/detail/:id' element={<Detail />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
