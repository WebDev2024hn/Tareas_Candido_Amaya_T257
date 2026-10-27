
import React from 'react'

interface Props {
    id: number
    eliminar: (id: number) => void
}

export default function BotonEliminar({ id, eliminar }: Props) {
    return (
        <button
            className='btn btn-danger btn-sm'
            type='button'
            onClick={() => eliminar(id)}
        >
            Eliminar
        </button>
    )
}
