import { ArrowRight, Zap } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section
            className="relative overflow-hidden min-h-screen flex pt-20 md:pt-0 md:items-center justify-center"
            style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 255, 255, 0.15) 0%, rgba(255, 0, 255, 0.15) 100%), url('/products-collection-hero.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="absolute inset-0 bg-linear-to-r from-[#020511]/95 via-[#020511]/80 to-[#020511]/40 z-5"></div>

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00afb3]/20 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute top-32 right-1/4 w-96 h-96 bg-[#e65fde]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-[#00afb3]/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 ">                    
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col space-y-8">                        
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl font-bold text-balance leading-tight" style={{ fontFamily: "'Stack Sans Notch', sans-serif" }}>
                                <span  className="block bg-linear-to-r from-[#00afb3] via-[#e65fde] to-[#00afb3] bg-clip-text text-transparent">
                                    Todo lo que buscás
                                </span>                                
                                <span className="text-[#f3faff]">en un solo lugar</span>
                            </h1>

                            <p className=" md:text-lg text-[#85919a] max-w-2xl mx-auto text-pretty">
                                Ropa, joyas, tecnología y artículos para todos los gustos. Comprá fácil, rápido y seguro.
                            </p>
                        </div>
                        
                        <div className="pt-4">
                            <Link to="/productos">
                                <button
                                    size="lg"                                    
                                    className="bg-linear-to-r font-semibold cursor-pointer flex items-center gap-2 px-2 lg:px-3 py-2 lg:text-sm rounded-md from-[#00afb3] to-[#e65fde] hover:opacity-90 transition-opacity shadow-lg shadow-[#00afb3]/30"
                                >
                                    Explorar Productos
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero