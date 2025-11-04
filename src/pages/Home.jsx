"use client"

import { useGlobal } from "../context/GlobalContext";
import Loading from "../components/loading/Loading";
import Hero from "../components/Hero";
import { CircleAlert } from "lucide-react";
import ProductoCard from "../components/ProductoCard";
import { Link } from "react-router-dom";

export default function Home() {
    const { productos, loading, error } = useGlobal()

    const productosDestacados = productos.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 4)

    return (
        <div className="min-h-screen">
            {loading ?
                <Loading />
                :
                <main className="py-17" >
                    <Hero />
                    <div className="container mx-auto px-4 space-y-12">

                        <section className="space-y-8">
                            <div className="flex flex-col items-center py-20 gap-6" style={{ fontFamily: "'Stack Sans Notch', sans-serif" }}>
                                <h2 className="text-2xl md:text-4xl font-bold text-[#f3faff]">Productos Destacados</h2>
                            </div>

                            {error && (
                                <div className="flex flex-col items-center md:text-2xl gap-2 py-20 text-red-400">
                                    <h1><CircleAlert className='size-10 md:size-20' /></h1>
                                    <p>{error.message}</p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5 md:px-0">
                                {productosDestacados.map((product) => (
                                    <ProductoCard key={product.id} product={product} productosDestacados={productosDestacados} />
                                ))}
                            </div>
                        </section>
                        <section className="text-center space-y-6">
                            <Link to="/productos" className="inline-flex text-sm font-medium text-[#f3faff] hover:bg-[#e65fde] items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-[#00afb3]/10 to-[#e65fde]/10 border border-[#00afb3]/20 backdrop-blur-sm">
                                Ver todos los productos
                            </Link>
                        </section>
                    </div>
                </main>
            }
        </div>
    )
}