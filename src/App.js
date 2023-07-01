import './index.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Router>
      {/* here in react-router-dom v6 Switch is replaced with Routes*/}
        <Routes> 
          <Route exact path='/' element={<Login />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
