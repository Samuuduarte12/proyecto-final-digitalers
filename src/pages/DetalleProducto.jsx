import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/loading/Loading';
import { ArrowLeft, CircleAlert, ShoppingCart } from 'lucide-react';
import { useGlobal } from '../context/GlobalContext';
import Contador from '../components/contador';
import { toast } from 'react-toastify';

function DetalleProducto() {
    const [producto, setProducto] = useState({});
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);
    const { agregarAlCarrito, estasAutenticado } = useGlobal();
    const [contador, setContador] = useState(1);

    const { id } = useParams()

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error(`Error al traer el Producto desde la API`)
                }
                const datos = await response.json();
                setProducto(datos)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducto();
    }, [])

    const handleAgregar = () => {
        if (estasAutenticado) {
            agregarAlCarrito(producto, contador);
            toast("Producto agregado al carrito");
        } else {
            toast.info("Deves iniciar sesion para agregar un producto al carrito");
        }
    };

    return (
        <div className="min-h-screen">
            {loading ?
                <Loading />
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

                    {error ? (
                        <div className="flex flex-col items-center md:text-2xl gap-2 py-20 text-red-400">
                            <h1><CircleAlert className='size-10 md:size-20' /></h1>
                            <p>{error.message}</p>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-2">
                            <div className="space-y-4">
                                <div className="relative aspect-square md:h-[500px] lg:h-[450px] rounded-3xl overflow-hidden bg-white backdrop-blur-sm border border-[#202938]/50 shadow-2xl shadow-[#00afb3]/10">
                                    <img
                                        src={producto.image}
                                        alt={producto.title}
                                        className="w-full h-full object-contain p-4"
                                    />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <span className="inline-block px-3 py-5 md:py-3 rounded-full bg-[#00afb3]/10 text-[#00afb3] text-sm font-medium mb-4">
                                        {producto.category}
                                    </span>
                                    <h1 className="text-4xl lg:text-3xl font-bold text-[#f3faff] mb-4 text-balance">{producto.title}</h1>
                                </div>

                                <p className="text-md text-[#85919a] leading-relaxed">{producto.description}</p>

                                <div className="flex items-center justify-between py-6 border-y border-[#202938]/50">
                                    <div className="text-3xl font-bold bg-linear-to-r from-[#00afb3] to-[#e65fde] bg-clip-text text-transparent">
                                        ${producto.price}
                                    </div>
                                    <div className='flex gap-2 md:gap-10 items-center transition-all'>
                                        <Contador
                                            contador={contador}
                                            setContador={setContador}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <button
                                        onClick={handleAgregar}
                                        className="w-full flex items-center justify-center cursor-pointer bg-linear-to-r from-[#00afb3] to-[#e65fde] hover:opacity-90 transition-opacity shadow-lg shadow-[#00afb3]/30 text-lg h-12 rounded-md"
                                    >
                                        <ShoppingCart className="w-5 h-5 mr-2" />
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </main>
            }
        </div>
    )
}

export default DetalleProducto