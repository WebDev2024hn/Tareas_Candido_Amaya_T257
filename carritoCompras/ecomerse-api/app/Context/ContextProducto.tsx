import { createContext } from "react";
import { Producto } from "../modelos/Producto";
import { Carrito } from "../modelos/Carrito";

export interface CarritoDetalle extends Carrito {
    producto: Producto
}

export const ContexrProducto = createContext({
    producto: [] as Producto[],
    carritoProducto: [] as CarritoDetalle[],

    agregarCarrito: (producto: Producto) => { },
    consultarCarrito: async () => { },
    eliminarCarrito: async (id: number) => { },

    consultarProducto: () => { },
    agregarProducto: (producto: Producto) => { },
    eliminarProducto: (id: any) => { },
    editarProducto: (producto: Producto) => { },
})
