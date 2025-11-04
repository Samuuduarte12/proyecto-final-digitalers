
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    const estasAutenticado = !!token

    useEffect(() => {
        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
            setCarrito(JSON.parse(carritoGuardado));
        }
    }, [])

    function agregarAlCarrito(prod, cantidad) {
        const nuevoProducto = {
            ...prod,
            cantidad,
        };

        let newCarrito;

        if (carrito.some(el => el.id === prod.id)) {
            newCarrito = carrito.map(element => {
                if (element.id === prod.id) {
                    return {
                        ...element,
                        cantidad: element.cantidad + cantidad
                    };
                } else {
                    return element;
                }
            });
        } else {
            newCarrito = [...carrito, nuevoProducto];
        }

        localStorage.setItem('carrito', JSON.stringify(newCarrito));

        setCarrito(newCarrito);
    }

    function calcularTotalPorProducto(carro) {
        let subTotal = 0;
        subTotal += carro.cantidad * carro.price;
        return subTotal.toLocaleString('es-CL');
    }

    function calcularTotalCarrito() {
        const total = carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
        return total.toLocaleString('es-CL');
    }

    return (
        <GlobalContext.Provider value={{
            carrito, setCarrito, productos, setProductos, loading,
            setLoading, error, setError, estasAutenticado, setToken,
            agregarAlCarrito, calcularTotalPorProducto, calcularTotalCarrito
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobal = () => useContext(GlobalContext);