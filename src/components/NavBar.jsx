import { LogOut, ShoppingBag, ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useGlobal } from '../context/GlobalContext'

const NavBar = () => {
    const { estasAutenticado, carrito, setToken } = useGlobal()

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    return (
        <header className="border-b border-[#202938]/40 font-semibold fixed top-0 w-full z-10 backdrop-blur-sm shadow-md flex items-center py-5 md:py-3  px-3 md:px-14">
            <div className='w-1/4'>
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-6 h-6 md:w-10 md:h-10 rounded-md md:rounded-xl bg-linear-to-br from-[#00afb3] to-[#e65fde] flex items-center justify-center shadow-lg shadow-[#00afb3]/30">
                        <ShoppingBag className="w-4 h-4 text-white" />
                    </div>
                    <h1 className="text-md md:text-2xl font-bold bg-linear-to-r from-[#00afb3] to-[#e65fde] bg-clip-text text-transparent">
                        ShopHub
                    </h1>
                </Link>
            </div>
            <nav className="w-full md:w-1/2 flex justify-center items-center text-sm md:text-base">
                <ul className='flex justify-between items-center gap-1 md:gap-16'>
                    <Link to="/" className='hover:text-[#00afb3]'>Inicio</Link>
                    <Link to="/productos" className='hover:text-[#00afb3]'>Productos</Link>
                </ul>
                <div className='flex gap-5'>
                </div>
            </nav>

            <div className='w-1/4 md:p-1 md:py-2 flex justify-end text-xl'>
                {estasAutenticado ?
                    <div className='flex items-center gap-5'>
                        <Link to={'/carrito'}>
                            <ShoppingCart className='hover:text-[#00afb3] w-4 h-4 transition-transform duration-100 ease-in-out transform hover:scale-110' />
                            <div className='absolute bottom-10 right-13 md:right-24 bg-linear-to-br from-[#00afb3] to-[#e65fde] text-white transition-transform duration-100 ease-in-out transform hover:scale-110 text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center'>
                                <p>{carrito.length}</p>
                            </div>
                        </Link>
                        <button onClick={logout} className='hover:bg-red-500 px-2 py-1 rounded-md'>
                            <LogOut className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                    </div>
                    :
                    <Link to="/login" className='gap-2 flex items-center hover:bg-[#e65fde] px-2 py-1 rounded-md'>
                        <User className="md:w-5 md:h-5" />
                        <span className="hidden sm:inline">Iniciar Sesión</span>
                    </Link>

                }
            </div>
        </header>
    )
}

export default NavBar