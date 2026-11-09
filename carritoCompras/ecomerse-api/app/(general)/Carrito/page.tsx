'use client'

import { useEffect } from 'react'
import { useContextProducto } from '@/app/Provider/ProviderProducto'

export default function Page() {

    const { carritoProducto, consultarCarrito, eliminarCarrito } = useContextProducto()

    useEffect(() => {
        consultarCarrito()
    }, [])

    const ordenes = Array.from(
        new Set(carritoProducto.map(item => item.ordenCompra))
    )

    function pagar(orden: number) {

        const productosOrden = carritoProducto.filter(
            item => item.ordenCompra === orden
        )

        const total = productosOrden.reduce((suma, item) => {
            return suma +
                Number(item.producto.precioProducto) +
                Number(item.isvProducto)
        }, 0)

        alert(
            'Orden de compra: ' + orden +
            '\nTotal a pagar: Lps ' + total.toFixed(2)
        )
    }

    return (
        <div className='container mt-4'>

            <h2 className='mb-4'>Mi Carrito de Compras</h2>

            {carritoProducto.length > 0 ? (

                ordenes.map((orden) => {

                    const productosOrden = carritoProducto.filter(
                        item => item.ordenCompra === orden
                    )

                    const totalOrden = productosOrden.reduce(
                        (suma, item) =>
                            suma +
                            Number(item.producto.precioProducto) +
                            Number(item.isvProducto),
                        0
                    )

                    return (

                        <div className='card mb-4' key={orden}>

                            <div className='card-header'>
                                <h5>Orden de Compra: {orden}</h5>
                            </div>

                            <div className='card-body'>

                                <div className='table-responsive'>
                                    <table className='table table-bordered'>

                                        <thead className='table-dark'>
                                            <tr>
                                                <th>Producto</th>
                                                <th>Precio</th>
                                                <th>ISV</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {productosOrden.map(item => (

                                                <tr key={item.idcarrito}>

                                                    <td>
                                                        {item.producto.nombreProducto}
                                                    </td>

                                                    <td>
                                                        Lps {Number(item.producto.precioProducto).toFixed(2)}
                                                    </td>

                                                    <td>
                                                        Lps {Number(item.isvProducto).toFixed(2)}
                                                    </td>

                                                    <td>
                                                        <button
                                                            className='btn btn-danger btn-sm'
                                                            onClick={() => eliminarCarrito(item.idcarrito)}
                                                        >
                                                            Eliminar
                                                        </button>
                                                    </td>

                                                </tr>

                                            ))}
                                        </tbody>

                                    </table>
                                </div>

                                <div className='text-end'>

                                    <h5>
                                        Total: Lps {totalOrden.toFixed(2)}
                                    </h5>

                                    <button
                                        className='btn btn-success'
                                        onClick={() => pagar(orden)}
                                    >
                                        Pagar
                                    </button>

                                </div>

                            </div>

                        </div>

                    )
                })

            ) : (

                <div className='alert alert-info'>
                    No hay productos en el carrito.
                </div>

            )}

        </div>
    )
}