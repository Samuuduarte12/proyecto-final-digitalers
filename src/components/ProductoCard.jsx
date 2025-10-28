import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductoCard = ({ product }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-[#0a121f]/50 backdrop-blur-sm border border-[#202938]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00afb3]/20 min-h-[480px] lg:min-h-[100px] flex flex-col justify-between">
            <Link to={`/detalleProducto/${product.id}`} className="relative aspect-square overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full p-5  object-contain transition-transform duration-500 group-hover:scale-110 bg-white "
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <div className="p-6 space-y-3">
                <Link to={`/detalleProducto/${product.id}`} className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-lg text-[#f3faff] leading-tight line-clamp-2">{product.title}</h3>                    
                </Link>

                <p className="text-sm text-[#85919a] line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl lg:text-xl font-bold bg-linear-to-r from-[#00afb3] to-[#e65fde] bg-clip-text text-transparent">
                        ${product.price}
                    </span>

                    <button
                        size="sm"
                        className="bg-linear-to-r flex items-center px-2 lg:px-1 py-1 lg:py-0 lg:text-sm rounded-md from-[#00afb3] to-[#e65fde] hover:opacity-90 transition-opacity shadow-lg shadow-[#00afb3]/30"
                    >
                        <ShoppingCart className="w-4 h-4 lg:w-3 lg:h-3 mr-2" />
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductoCard