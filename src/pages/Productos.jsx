import { useEffect, useState } from 'react'
import FiltroCategoria from '../components/FiltroCategoria'
import ProductoCard from '../components/ProductoCard';
import Loading from '../components/loading/Loading';

const Productos = () => {
    const [seleccionarCategoria, setSeleccionarCategoria] = useState("Todos")
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error(`Error al traer los productos ${response.status, response.statusText}`)
                }
                const datos = await response.json();
                setProductos(datos);

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProductos()
    }, [])

    const filtrarProductos = seleccionarCategoria === "Todos" ? productos : productos.filter(
        (producto) => producto.category === seleccionarCategoria
    );

    if (error) {
        return <div><h1>Error al traer los productos</h1></div>
    }
    
    return (
        <div>
            {loading ?
                <div className="container h-full mx-auto flex items-center justify-center px-4 py-32 space-y-12">
                    <Loading />
                </div>
            :
                <main className='container mx-auto px-4 py-28 space-y-12'>
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-2xl font-semibold text-[#f3faff]"> Categorias</h2>
                        <FiltroCategoria
                            seleccionarCategoria={seleccionarCategoria}
                            onCategoriaChange={setSeleccionarCategoria}
                        />
                    </div>
                    <section className="space-y-8">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                            {filtrarProductos.map((product) => (
                                <ProductoCard key={product.id} product={product} />
                            ))}
                        </div>

                    </section>
                </main>
            }
        </div>

    )
}

export default Productos