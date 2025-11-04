import { Facebook, Instagram, Mail, MapPin, Phone, ShoppingBag, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="relative border-t border-[#202938]/40 bg-linear-to-b from-[#020511] to-[#020511]/80 backdrop-blur-xl">
            <div className=" mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#00afb3] to-[#e65fde] flex items-center justify-center shadow-lg">
                                <ShoppingBag className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-linear-to-r from-[#00afb3] to-[#e65fde] bg-clip-text text-transparent">
                                ShopHub
                            </span>
                        </Link>
                        <p className="text-sm text-[#85919a]">
                            Tu tienda de confianza para productos de calidad con los mejores precios del mercado.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-[#f3faff]">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="text-[#85919a] hover:text-[#00afb3] transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/productos" className="text-[#85919a] hover:text-[#00afb3] transition-colors">
                                    Productos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-[#f3faff]">Contacto</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2 text-[#85919a] hover:text-[#00afb3] transition-colors">
                                <Phone className="w-4 h-4" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2 text-[#85919a] hover:text-[#00afb3] transition-colors">
                                <Mail className="w-4 h-4" />
                                <span>info@techstore.com</span>
                            </li>
                            <li className="flex items-center gap-2 text-[#85919a] hover:text-[#00afb3] transition-colors">
                                <MapPin className="w-4 h-4" />
                                <span>Calle Principal 123</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="h-px bg-linear-to-r from-transparent via-[#00afb3]/20 to-transparent mb-8"></div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-[#85919a]">© 2025 TechStore. Todos los derechos reservados.</p>

                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-[#00afb3]/10 flex items-center justify-center hover:bg-[#00afb3]/20 transition-colors"
                        >
                            <Facebook className="w-4 h-4 text-[#00afb3]" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-[#00afb3]/10 flex items-center justify-center hover:bg-[#00afb3]/20 transition-colors"
                        >
                            <Twitter className="w-4 h-4 text-[#00afb3]" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-[#00afb3]/10 flex items-center justify-center hover:bg-[#00afb3]/20 transition-colors"
                        >
                            <Instagram className="w-4 h-4 text-[#00afb3]" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer