import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/home'
import Register from "./components/pages/Register"
import Login from './components/pages/Login'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Home />
          }
        />


        <Route
          path='/login'
          element={
            <Login />
          }
        />

        <Route
          path='/register'
          element={
            <Register />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
