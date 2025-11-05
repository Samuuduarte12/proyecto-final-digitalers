
import { X } from 'lucide-react';
import { useGlobal } from '../context/GlobalContext';

function Comprobante({ cerrarComprobante, total }) {
    const { carrito, calcularTotalPorProducto } = useGlobal()

    return (
        <div className="text-center">
            <button
                onClick={cerrarComprobante}
                className="text-gray-500 float-right font-bold flex justify-end"
            >
                <X className='text-3xl' />
            </button>
            <p className="text-green-600 font-bold">¡Compra realizada con éxito!</p>
            <div className="text-left">
                <h3 className="md:text-lg font-semibold mb-2">Resumen de productos:</h3>
                <div className='flex justify-center items-center'>
                    <table className='border border-[#202938]'>
                        <thead className='border border-[#202938]'>
                            <tr>
                                <th className='text-xs md:text-base p-1 md:px-3 border border-[#202938]'>Producto</th>
                                <th className='text-xs md:text-base p-1 md:px-3 border border-[#202938]'>Cantidad</th>
                                <th className='text-xs md:text-base p-1 md:px-3 border border-[#202938]'>Precio por unidad</th>
                                <th className='text-xs md:text-base p-1 md:px-3 border border-[#202938]'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map((carro) => {
                                return (
                                    <tr key={carro.id}>
                                        <td className="text-xs md:text-base text-center border border-[#202938] py-1 px-3">{carro.title}</td>
                                        <td className="text-xs md:text-sm border border-[#202938] text-center p-1 px-3">{carro.cantidad}</td>
                                        <td className="text-xs md:text-sm border border-[#202938] text-center p-1 px-3">${carro.price}</td>
                                        <td className="text-xs md:text-base font-medium border border-[#202938] text-center p-1 px-3">${calcularTotalPorProducto(carro)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='p-4 flex justify-end'>
                    <div className='w-1/2 border-t flex justify-between'>
                        <p>Total:</p>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comprobante