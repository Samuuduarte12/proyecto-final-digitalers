import './App.css'
import { useGlobal } from './context/GlobalContext'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Page404 from './pages/Page404'
import Carrito from './pages/Carrito'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'

function App() {
  const { setProductos, setLoading, setError, setToken } = useGlobal()
  const location = useLocation();

  // Rutas donde no se mostrara la nav
  const rutas = ['/login', '/dashboard'];

  const rutasOcultarNav = rutas.some(ruta =>
    location.pathname.startsWith(ruta)
  );

  useEffect(() => {
    const storeToken = localStorage.getItem('token');
    if (storeToken) setToken(storeToken);

    const fetchProductos = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Error al traer los productos desde la API`)
        }
        const datos = await response.json();
        setProductos(datos);

      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProductos()
  }, [])

  return (
    <div className='bg-[#020511] text-[#f3faff]'>
      <ToastContainer position="bottom-left" theme="colored" pauseOnFocusLoss pauseOnHover={false} />
      {!rutasOcultarNav && <NavBar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/detalleProducto/:id' element={<DetalleProducto />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>

      {!rutasOcultarNav && <Footer />}
    </div>
  )
}

export default App
