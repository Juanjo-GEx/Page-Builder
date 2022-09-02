import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center">
        <h1 className="mt-10 pb-6">Página no encontrada</h1>        
        <p className="mb-10">Vuelva a la página de <Link to="/">Inicio</Link></p>
    </section>
  )
}

export default NotFound