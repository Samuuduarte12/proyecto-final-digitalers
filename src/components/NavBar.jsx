import { ShoppingBag, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="border-b border-[#202938]/40 font-semibold fixed top-0 w-full z-10 backdrop-blur-sm shadow-md">
            <nav className="container mx-auto pr-10 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#00afb3] to-[#e65fde] flex items-center justify-center shadow-lg shadow-[#00afb3]/30">
                        <ShoppingBag className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold bg-linear-to-r from-[#00afb3] to-[#e65fde] bg-clip-text text-transparent">
                        ShopHub
                    </h1>
                </Link>
                <div className='flex gap-5'>
                    <Link to="/" className='hover:text-[#00afb3]'>Inicio</Link>
                    <Link to="/productos" className='hover:text-[#00afb3]'>Productos</Link>
                </div>

                <div className="flex items-center gap-4 hover:bg-[#e65fde] px-2 py-1 rounded-md">
                    <Link to="/login" className='gap-2 flex items-center'>
                        <User className="w-4 h-4" />
                        <span className="hidden sm:inline">Iniciar Sesión</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar