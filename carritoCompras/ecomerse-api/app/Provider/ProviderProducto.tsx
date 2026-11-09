import React, { useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { Producto } from '../modelos/Producto'
import { ContexrProducto } from '../Context/ContextProducto';
import { Carrito } from '../modelos/Carrito'
import { CarritoDetalle } from '../Context/ContextProducto'

export default function ProviderProducto({ children }: Plantilla) {

    const [producto, setProducto] = useState<Producto[]>([]);

    const [carritoProducto, setCarritoProducto] = useState<CarritoDetalle[]>([]);

    async function agregarCarrito(producto: Producto) {

        try {

            const res = await fetch('http://localhost:5000/carrito', {
                method: 'POST',
                body: JSON.stringify({
                    idproducto: producto.idProducto,
                    isvProducto: producto.isvProducto,
                    ordenCompra: 1
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!res.ok) {
                throw new Error('Error al agregar producto')
            }

            await consultarCarrito()

            alert('Producto agregado al carrito')

        } catch (error) {
            alert('No se pudo agregar el producto')
        }

    }

    async function eliminarCarrito(id: number) {

        try {

            const res = await fetch('http://localhost:5000/carrito/' + id, {
                method: 'DELETE'
            })

            if (!res.ok) {
                throw new Error('Error al eliminar')
            }

            await consultarCarrito()

            alert('Producto eliminado del carrito')

        } catch (error) {
            alert('No se pudo eliminar el producto')
        }

    }

    async function consultarProducto() {
        try {

            const res = await fetch('http://localhost:5000/producto')
            const data = await res.json()

            setProducto(data)
            // alert()

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }
    }

    async function agregarProducto(producto: Producto) {

        console.log(producto)

        try {

            const res = await fetch('http://localhost:5000/producto', {
                method: 'POST',
                body: JSON.stringify(producto),
                'headers': {
                    'Content-Type': 'application/json'
                }


            })
            const data = await res.json()

            consultarProducto()
            alert('Producto creado')
            //setProducto(data)

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }

    }

    async function editarProducto(producto: Producto) {

        console.log(producto)


        try {

            const res = await fetch('http://localhost:5000/producto/' + producto.idProducto, {
                method: 'PUT',
                body: JSON.stringify(producto),
                'headers': {
                    'Content-Type': 'application/json'
                }


            })
            const data = await res.json()

            consultarProducto()
            alert('Producto Actualizado')
            //setProducto(data)

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }

    }


    async function eliminarProducto(id: number) {

        console.log(producto)

        try {

            const res = await fetch('http://localhost:5000/producto/' + id, {
                method: 'DELETE',
                'headers': {
                    'Content-Type': 'application/json'
                }


            })
            const data = await res.json()

            consultarProducto()
            alert('Producto Eliminado')
            //setProducto(data)

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }

    }

    async function consultarCarrito() {

        try {

            const resCarrito = await fetch('http://localhost:5000/carrito/1')
            const dataCarrito: Carrito[] = await resCarrito.json()

            const resProducto = await fetch('http://localhost:5000/producto')
            const dataProducto: Producto[] = await resProducto.json()

            const detalle = dataCarrito.map((item) => {

                const productoEncontrado = dataProducto.find(
                    (p) => p.idProducto === item.idproducto
                )

                return {
                    ...item,
                    producto: productoEncontrado!
                }

            })

            setCarritoProducto(detalle)

        } catch (error) {
            alert('Error al consultar el carrito')
        }

    }




    return (
        <ContexrProducto.Provider value={{
            producto,
            carritoProducto,
            agregarCarrito,
            consultarCarrito,
            eliminarCarrito,
            consultarProducto,
            agregarProducto,
            eliminarProducto,
            editarProducto
        }}>
            {children}
        </ContexrProducto.Provider>
    )

    }

    export function useContextProducto() {
        return useContext(ContexrProducto)
    }