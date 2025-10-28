"use client"

import { useEffect, useState } from "react";
import ProductoCard from "../components/ProductoCard";
import Loading from "../components/loading/Loading";
import { Link } from "react-router-dom";

export default function Home() {
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

    const productosDestacados = productos
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 3)


    if (error) {
        return <div><h1>Error al traer los productos</h1></div>
    }

    return (
        <div className="min-h-screen">
            {loading ?
                <Loading />
                :
                <main className="container mx-auto px-4 py-20 md:py-28 space-y-12">
                    <section className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-balance">
                            <span className="bg-linear-to-r from-[#00afb3] via-[#e65fde] to-[#00afb3] bg-clip-text text-transparent">
                                Todo lo que buscás
                            </span>
                            <br />
                            <span className="text-[#f3faff]">en un solo lugar</span>
                        </h1>

                        <p className=" md:text-lg text-[#85919a] max-w-2xl mx-auto text-pretty">
                            Ropa, joyas, tecnología y artículos para todos los gustos. Comprá fácil, rápido y seguro.
                        </p>
                    </section>

                    <section className="space-y-8">
                        <div className="flex flex-col items-center gap-6">
                            <h2 className="text-xl md:text-2xl font-semibold text-[#f3faff]">Productos Destacados</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-0">
                            {productosDestacados.map((product) => (
                                <ProductoCard key={product.id} product={product} />
                            ))}
                        </div>

                    </section>
                    <section className="text-center space-y-6">
                        <Link to="/productos" className="inline-flex hover:bg-[#e65fde] items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-[#00afb3]/10 to-[#e65fde]/10 border border-[#00afb3]/20 backdrop-blur-sm">
                            <span className="text-sm font-medium text-[#f3faff]">Ver todos los productos </span>
                        </Link>
                    </section>
                </main>
            }
        </div>
    )
}
