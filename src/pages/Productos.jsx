import { useState } from 'react'
import { useGlobal } from '../context/GlobalContext';
import Loading from '../components/loading/Loading';
import FiltroCategoria from '../components/FiltroCategoria'
import { CircleAlert, Search } from 'lucide-react';
import ProductoCard from '../components/ProductoCard';

const Productos = () => {
    const [seleccionarCategoria, setSeleccionarCategoria] = useState("Todos")
    const [buscar, setBuscar] = useState("")
    const { productos, loading, error } = useGlobal()

    const filtrarProductos = productos.filter((producto) => {
        const coincideCategoria =
            seleccionarCategoria === "Todos" || producto.category === seleccionarCategoria;

        const coincideBusqueda = producto.title
            .toLowerCase()
            .includes(buscar.toLowerCase());

        return coincideCategoria && coincideBusqueda;
    });

    return (
        <div>
            {loading ?
                <Loading />
                :
                <main className='py-16 space-y-12'>
                    <section className="py-12 bg-linear-to-b from-[#00afb3]/5 via-transparent to-[#e65fde]/5">
                        <div className="container mx-auto px-4 space-y-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-balance mb-2" style={{ fontFamily: "'Stack Sans Notch', sans-serif" }}>
                                    Nuestro Catálogo
                                </h1>
                                <p className="text-lg text-[#85919a]">
                                    Encuentra exactamente lo que buscas entre nuestros {productos.length} productos
                                </p>
                            </div>
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Buscar productos..."
                                    value={buscar}
                                    onChange={(e) => setBuscar(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#202938]/40 bg-[#020511]/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#00afb3]/50 text-[#f3faff] placeholder-[#85919a] transition-all"
                                />
                            </div>
                        </div>
                    </section>

                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-2xl font-semibold text-[#f3faff]" style={{ fontFamily: "'Stack Sans Notch', sans-serif" }}> Filtrar por Categoria</h2>
                        <FiltroCategoria
                            seleccionarCategoria={seleccionarCategoria}
                            onCategoriaChange={setSeleccionarCategoria}
                        />
                    </div>
                    <section className="space-y-8 px-4">
                        {error && (
                            <div className="flex flex-col items-center md:text-2xl gap-2 py-20 text-red-400">
                                <h1><CircleAlert className='size-10 md:size-20' /></h1>
                                <p>{error.message}</p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-5 md:px-0">
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