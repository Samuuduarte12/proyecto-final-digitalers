import React from 'react'

function Contador({ contador, setContador, carro, setCarrito, carrito }) {

    function modificarContador(id, operacion) {
        if (id) {
            const newCarrito = carrito.map(producto => {
                if (producto.id === id) {
                    if (operacion === "+") {
                        return { ...producto, cantidad: producto.cantidad + 1 }
                    } else {
                        if (producto.cantidad > 1) {
                            return { ...producto, cantidad: producto.cantidad - 1 };
                        }
                    }
                }
                return producto;
            });
            setCarrito(newCarrito);
        } else {
            if (operacion === "+") {
                setContador(contador + 1);
            } else {
                if (contador > 1) {
                    setContador(contador - 1);
                }
            }
        }
    }

    return (
        <div className={`flex border border-gray-300 ${carro ? "items-center rounded" : ""}`}>
            <button
                onClick={() => modificarContador(carro ? carro.id : null, "-")}
                className={`border-r border-gray-300 ${carro ? "px-2" : "px-3 md:px-5"}`}
            >
                -
            </button>

            <p className={`${carro ? "px-2" : "py-2 px-4 md:px-6"}`}>{carro ? carro.cantidad : contador}</p>

            <button
                onClick={() => modificarContador(carro ? carro.id : null, "+")}
                className={`border-l border-gray-300 ${carro ? "px-2" : "px-3 md:px-5"}`}
            >
                +
            </button>
        </div>
    )
}

export default Contador;