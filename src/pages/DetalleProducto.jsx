import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/loading/Loading';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';

function DetalleProducto() {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const datos = await response.json();
                setProducto(datos)
            } catch (error) {

            } finally {
                setLoading(false)
            }
        }

        fetchProducto();
    }, [])

    return (
        <div className="min-h-screen">
            {loading ?
                <div className="container h-full mx-auto flex items-center justify-center px-4 py-32 space-y-12">
                    <Loading />
                </div>
                :
                <main className="container mx-auto px-4 py-24 space-y-12">
                    <div className="container">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-sm text-[#85919a] hover:text-[#f3faff] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Volver
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2">
                        <div className="space-y-4">
                            <div className="relative aspect-square h-[500px] rounded-3xl overflow-hidden bg-white backdrop-blur-sm border border-[#202938]/50 shadow-2xl shadow-[#00afb3]/10">
                                <img
                                    src={producto.image}
                                    alt={producto.title}
                                    className="w-full h-full object-contain p-4"
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-[#00afb3]/10 text-[#00afb3] text-sm font-medium mb-4">
                                    {producto.category}
                                </span>
                                <h1 className="text-4xl lg:text-3xl font-bold text-[#f3faff] mb-4 text-balance">{producto.title}</h1>
                            </div>

                            <p className="text-md text-[#85919a] leading-relaxed">{producto.description}</p>

                            <div className="py-6 border-y border-[#202938]/50">
                                <div className="text-3xl font-bold bg-linear-to-r from-[#00afb3] to-[#e65fde] bg-clip-text text-transparent">
                                    ${producto.price}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button
                                    className="w-full flex items-center justify-center cursor-pointer bg-linear-to-r from-[#00afb3] to-[#e65fde] hover:opacity-90 transition-opacity shadow-lg shadow-[#00afb3]/30 text-lg h-12 rounded-md"
                                >
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            }
        </div>
    )
}

export default DetalleProducto