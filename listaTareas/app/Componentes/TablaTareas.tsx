
'use client'

import React from 'react'
import { ListaTarea } from '../Modelos/ListaTarea'
import { Tarea } from '../Modelos/Tarea'
import BotonEliminar from './BotonEliminar'

interface Props extends ListaTarea {
    cambiarEstado: (id: number, estado: string) => void
    eliminar: (id: number) => void
}

export default function TablaTareas({
    lista,
    cambiarEstado,
    eliminar
}: Props) {

    return (
        <div className='mt-4'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th>Estado</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        lista.map((tarea: Tarea) => (
                            <tr key={tarea.id}>
                                <td>{tarea.id}</td>
                                <td>{tarea.titulo}</td>
                                <td>{tarea.descripcion}</td>
                                <td>
                                    <select
                                        className='form-select'
                                        value={tarea.estado}
                                        onChange={(e) =>
                                            cambiarEstado(
                                                tarea.id,
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value='Pendiente'>
                                            Pendiente
                                        </option>
                                        <option value='En Proceso'>
                                            En Proceso
                                        </option>
                                        <option value='Completada'>
                                            Completada
                                        </option>
                                    </select>
                                </td>
                                <td>
                                    <BotonEliminar
                                        id={tarea.id}
                                        eliminar={eliminar}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
