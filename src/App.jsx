import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DetalleProducto from './pages/DetalleProducto'
import Productos from './pages/Productos'
import Page404 from './pages/Page404'

function App() {
  const location = useLocation();

  // Rutas donde no se mostrara la nav
  const rutas = ['/login', '/dashboard'];

  const rutasOcultarNav = rutas.some(ruta =>
    location.pathname.startsWith(ruta)
  );
  
  return (
    <div className='bg-[#020511] text-[#f3faff]'>
      {!rutasOcultarNav && <NavBar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/detalleProducto/:id' element={<DetalleProducto />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
