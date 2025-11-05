import { useState } from "react"
import { ShoppingBag, Lock, Mail } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useGlobal } from "../context/GlobalContext"

/* 
    USUARIO PARA EL LOGIN
    usuario: johnd
    constraseña: m38rmF$ 
*/

export default function LoginPage() {
    const {setToken } = useGlobal()
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev,[name]:value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)        

        try {
            const response = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                }),
            })

            if (!response.ok) throw new Error("Error al iniciar sesión")
            const data = await response.json()

            if (data?.token) {
                localStorage.setItem("token", data.token);
                setToken(data.token);
                navigate("/")
            } else {
                setError("Credenciales inválidas")
            }

        } catch (err) {
            setError("Usuario o contraseña incorrectos")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center md:items-end pb-10 justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-[#00afb3]/20 via-[#020511] to-[#e65fde]/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

            <div className="w-full max-w-md relative z-10">
                <div className="backdrop-blur-xl bg-[#0a121f]/50 border border-[#202938]/50 rounded-3xl shadow-2xl shadow-[#00afb3]/20 p-8 space-y-8">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#00afb3] to-[#e65fde] flex items-center justify-center shadow-lg shadow-[#00afb3]/30">
                            <ShoppingBag className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-bold bg-linear-to-r from-[#00afb3] to-[#e65fde] bg-clip-text text-transparent">
                                Bienvenido
                            </h1>
                            <p className="text-[#85919a]">Inicia sesión para acceder al dashboard</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="username" className="text-[#f3faff]">
                                Usuario
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#85919a]" />
                                <input
                                    id="username"
                                    type="text"
                                    name="username"
                                    placeholder="mor_2314"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                    className="pl-10 w-full p-1 h-9 bg-[#020511]/50 backdrop-blur-sm border-[#202938]/50 focus:border-[#00afb3] transition-colors rounded-md border px-3 py-1 text-base shadow-xs outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-[#f3faff]">
                                Contraseña
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#85919a]" />
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="pl-10 w-full p-1 h-9 bg-[#020511]/50 backdrop-blur-sm border-[#202938]/50 focus:border-[#00afb3] transition-colors rounded-md border px-3 py-1 text-base shadow-xs outline-none"
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-linear-to-r rounded-lg cursor-pointer from-[#00afb3] to-[#e65fde] hover:opacity-90 transition-opacity shadow-lg shadow-[#00afb3]/30 h-11 text-white"
                        >
                            {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                        </button>
                    </form>

                    <div className="text-center ">
                        <Link to="/">
                            <button className="text-[#85919a] cursor-pointer hover:text-[#f3faff] hover:bg-[#e65fde] px-2 py-1 rounded-md">
                                Volver a la tienda
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00afb3]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#e65fde]/20 rounded-full blur-3xl" />
            </div>
        </div>
    )
}
