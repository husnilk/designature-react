import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
    
  )
}

export default App
