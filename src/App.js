import './index.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login.js'
import Header from './components/Header.js'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      {/* here in react-router-dom v6 Switch is replaced with Routes*/}
        <Routes> 
          <Route exact path='/' element={<Login />}>
          </Route>
          <Route path='home' element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
