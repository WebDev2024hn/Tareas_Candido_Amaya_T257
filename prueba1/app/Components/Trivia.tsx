'use client'
import React, { useEffect, useState } from 'react'
import { Preguntas } from '../modelos/Preguntas'
import { ListaPreguntas } from '../modelos/ListaPreguntas'

export default function Trivia() {

    const [preguntas, setPreguntas] = useState<Preguntas[]>([])
    const [preguntaActual, setPreguntaActual] = useState<number>(0)
    const [seleccionUsuario, setSeleccionUsuario] = useState<boolean | null>(null)

    useEffect(() => {
        setPreguntas(ListaPreguntas)
    }, [])

    function verificarRespuesta() {

        if (seleccionUsuario === null)
            return;

        if (seleccionUsuario === preguntas[preguntaActual].respuestaCorrecta) {
            alert("Respuesta correcta");
        }
        else {
            alert("Respuesta incorrecta");
        }
    }

    return (
    <div>
        <div className="card-body">

            <h2 className="card-title">Preguntas de Trivia</h2>

            {preguntas.length > 0 && (
                <div>
                    <h4>
                        {preguntas[preguntaActual].DescripcionPregunta}
                    </h4>

                    <div className="mt-3">
                        <button
                            className="btn btn-success me-2"
                            type="button"
                            onClick={() => setSeleccionUsuario(true)}
                            disabled={seleccionUsuario !== null}
                        >
                            Verdadero
                        </button>

                        <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => setSeleccionUsuario(false)}
                            disabled={seleccionUsuario !== null}
                        >
                            Falso
                        </button>

                        {seleccionUsuario !== null && (
                            <div className="mt-3">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={verificarRespuesta}
                                >
                                    Comprobar respuesta
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>
    </div>
)
}