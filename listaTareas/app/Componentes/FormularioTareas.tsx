
'use client'

import React, { useEffect, useState } from 'react'
import { Tarea } from '../Modelos/Tarea'
import TablaTareas from './TablaTareas'

export default function FormularioTareas() {

    const [titulo, setTitulo] = useState<string>('')
    const [descripcion, setDescripcion] = useState<string>('')
    const [listaTarea, setListaTarea] = useState<Tarea[]>([])
    const [msj, setMsj] = useState<string>('')

    function almacenarTarea() {

        if (titulo.trim() === '' || descripcion.trim() === '') {
            setMsj('Ingrese el titulo y la descripcion')
            return
        }

        let tarea: Tarea = {
            id: listaTarea.length > 0
                ? Math.max(...listaTarea.map(t => t.id)) + 1
                : 1,
            titulo: titulo,
            descripcion: descripcion,
            estado: 'Pendiente'
        }

        setListaTarea([...listaTarea, tarea])
        setMsj('Tarea almacenada correctamente')
        setTitulo('')
        setDescripcion('')
    }

    function cambiarEstado(id: number, estado: string) {
        setListaTarea(
            listaTarea.map((tarea) =>
                tarea.id === id
                    ? { ...tarea, estado: estado }
                    : tarea
            )
        )
    }

    function eliminarTarea(id: number) {
        setListaTarea(
            listaTarea.filter((tarea) => tarea.id !== id)
        )
        setMsj('Tarea eliminada correctamente')
    }

    useEffect(() => {
        console.log(listaTarea)
    }, [listaTarea])

    return (
        <div className='container mt-4'>

            <h4>Registro de tareas</h4>

            <form className='form'>

                <label className='form-label'>Titulo</label>
                <input
                    type='text'
                    placeholder='Ingrese el titulo'
                    className='form-control'
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <br />

                <label className='form-label'>Descripcion</label>
                <textarea
                    placeholder='Ingrese la descripcion'
                    className='form-control'
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <br />

                <button
                    type='button'
                    className='btn btn-success'
                    onClick={almacenarTarea}
                >
                    Guardar tarea
                </button>

                {
                    msj !== '' && (
                        <div className='alert alert-info mt-3'>
                            {msj}
                        </div>
                    )
                }

            </form>

            <TablaTareas
                lista={listaTarea}
                cambiarEstado={cambiarEstado}
                eliminar={eliminarTarea}
            />

        </div>
    )
}
