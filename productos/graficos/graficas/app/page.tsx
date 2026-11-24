
import Link from 'next/link'

export default function Home() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">
                Dashboard de Productos
            </h1>

            <p className="text-center mb-5">
                Seleccione una gráfica para consultar la información.
            </p>

            <div className="row justify-content-center g-4">

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">
                                Productos por Moneda
                            </h5>
                            <p className="card-text">
                                Cantidad de productos agrupados por moneda.
                            </p>
                            <Link href="/productosMoneda" className="btn btn-primary">
                                Ver gráfica
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">
                                Valor por Tipo
                            </h5>
                            <p className="card-text">
                                Valor total de productos según su tipo.
                            </p>
                            <Link href="/productosTipo" className="btn btn-primary">
                                Ver gráfica
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">
                                Productos por Línea
                            </h5>
                            <p className="card-text">
                                Valor promedio de productos agrupados por línea.
                            </p>
                            <Link href="/productosLinea" className="btn btn-primary">
                                Ver gráfica
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
