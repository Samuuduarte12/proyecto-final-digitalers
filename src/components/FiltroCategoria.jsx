const FiltroCategoria = ({ seleccionarCategoria, onCategoriaChange }) => {
    const categorias = ["Todos", "men's clothing", "jewelery", "electronics", "women's clothing"];

    return (
        <div className="flex flex-wrap justify-center gap-3">
            {categorias.map((categoria, index) => (
                <button
                    key={index}
                    onClick={() => onCategoriaChange(categoria)}
                    className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors 
                        ${seleccionarCategoria === categoria
                            ? " bg-linear-to-r  from-[#00afb3] to-[#e65fde] text-white border-0"
                            : "bg-[#0a121f]/50 text-gray-300 hover:bg-[#0a121f]/80 border border-[#202938]/50"
                        }
                    `}
                >
                    {categoria}
                </button>
            ))}
        </div>
    )
}

export default FiltroCategoria