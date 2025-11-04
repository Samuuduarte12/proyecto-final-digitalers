import { useEffect, useState } from 'react'
import { useGlobal } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import Contador from '../components/contador';
import { ShoppingCart } from 'lucide-react';

function Carrito() {
    const { carrito, setCarrito, calcularTotalPorProducto, calcularTotalCarrito } = useGlobal()
    const [modalOpen, setModalOpen] = useState(false);

    function eliminarDelCarrito(id) {
        const newCarrito = carrito.filter(producto => producto.id !== id);
        localStorage.setItem('carrito', JSON.stringify(newCarrito));
        setCarrito(newCarrito);
    }

    return (
        carrito.length > 0 ?
            <div className='md:min-h-screen md:container px-4 py-20'>
                <h1 className='text-sx text-center px-5 md:px-0 md:text-3xl font-semibold m-5'>Carrito</h1>

                <div className='flex flex-col-reverse md:flex-row-reverse items-center md:px-10'>
                    <div className='w-full bottom-0 bg-[#0a121f] md:w-2/6 fixed md:top-28 md:right-10 md:h-fit md:z-5 shadow-2xl rounded-xl md:mt-10'>
                        <h1 className='text-lg p-4 border-b border-gray-300'>Resumen de compra</h1>
                        <div className='flex justify-between items-center p-4'>
                            <h3>Productos ({carrito.length})</h3>
                            <p>${calcularTotalCarrito()}</p>
                        </div>
                        <div className='text-xl font-semibold text-center mt-5 flex gap-2 p-4 text-[#388da8]'>
                            <h2>Total: </h2>
                            <p>${calcularTotalCarrito()}</p>
                        </div>
                        <div className='p-5'>
                            <button
                                onClick={() => setModalOpen(true)}
                                className='w-full text-white bg-gray-700 hover:bg-[#388da8] inline-block py-3 rounded-md transition duration-300'>
                                Realizar Compra
                            </button>
                        </div>
                    </div>
                    
                    <div className='w-full bg-[#0a121f] rounded-xl md:w-3/4 md:mr-[34%] mb-80 md:mb-10'>
                        <div className='flex flex-col items-center justify-center p-1 md:p-1 gap-3'>
                            <div className='w-full md:w-5/6 py-3 rounded-xl shadow-xl'>
                                {carrito.map((carro) => (
                                    <div key={carro.id} className='flex items-center gap-2 p-4 w-full border-b border-gray-300'>
                                        <Link to={`/detalleProducto/${carro.id}`} className="overflow-hidden h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-md">
                                            <img
                                                src={carro.image}
                                                alt={carro.title}
                                                className="w-full h-full p-1 object-contain bg-white "
                                            />
                                        </Link>

                                        <div className='flex flex-col w-[calc(100%-120px)]'>
                                            <div className='flex flex-col items-start justify-between md:h-[90px] w-full gap-2'>
                                                <div className='flex justify-between w-full'>
                                                    <Link
                                                        to={`/detalleProducto/${carro.id}`}
                                                        className='text-sm md:text-lg font-semibold'
                                                    >
                                                        {carro.title}
                                                    </Link>
                                                    <div className='text-xs md:text-xl font-bold text-[#388da8]'>
                                                        ${calcularTotalPorProducto(carro)}
                                                    </div>
                                                </div>

                                                <div className='flex items-center gap-1 md:gap-3'>
                                                    <h2 className='text-xs md:text-base'>Cantidad:</h2>
                                                    <Contador carro={carro} setCarrito={setCarrito} carrito={carrito} />
                                                </div>

                                            </div>

                                            <div className='flex justify-end mt-1'>
                                                <button
                                                    onClick={() => eliminarDelCarrito(carro.id)}
                                                    className='text-red-500 hover:text-red-700 font-semibold text-sm md:text-base cursor-pointer'
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                        {/* {modalOpen && <
                                            FormBuy
                                            calcularTotalCarrito={calcularTotalCarrito}
                                            setModalOpen={setModalOpen}
                                            calcularTotalPorProducto={calcularTotalPorProducto}
                                        />
                                        } */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className='flex flex-col justify-center items-center text-center text-gray-300 text-lg h-screen'>
                <ShoppingCart className='size-24' />
                <h1 className='text-sx text-center px-5 md:px-0 md:text-2xl font-bold m-5'>Tu carrito esta vacio</h1>
            </div>
    )
}

export default Carrito;
