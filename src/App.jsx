import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Signup } from './Admin/Signup'
import './App.css'
import { Login } from './Admin/Login'
import { Dash } from './Admin/Dashboard'
import { Dashboard2 } from './Admin/Dashboard2'
import { Forgett_pass } from './Admin/Forgett_pass'

function App() {
  

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard2/>} />
      <Route path="/forget_pass" element={<Forgett_pass/>} />
      </Routes>
    </Router>
  )
}

export default App
