'use client'
import React, { useEffect, useState } from 'react'
import { Preguntas } from '../modelos/Preguntas'
import { ListaPreguntas } from '../modelos/ListaPreguntas'
import { useTrivia } from '../Providers/TriviaProvider'

export default function Trivia() {

    const [preguntas, setPreguntas] = useState<Preguntas[]>([])
    const [preguntaActual, setPreguntaActual] = useState<number>(0)
    const [seleccionUsuario, setSeleccionUsuario] = useState<boolean | null>(null)
    const [respuestaVerificada, setRespuestaVerificada] = useState<boolean>(false)

    const { incrementarPuntaje, incrementarPreguntas, reiniciarJuego } = useTrivia();

    useEffect(() => {
        setPreguntas(ListaPreguntas)
    }, [])

    function verificarRespuesta() {

        if (seleccionUsuario === null || respuestaVerificada)
            return;

        incrementarPreguntas();

        if (seleccionUsuario === preguntas[preguntaActual].respuestaCorrecta) {
            alert("Respuesta correcta");
            incrementarPuntaje(preguntas[preguntaActual].puntajePregunta);
        }
        else {
            alert("Respuesta incorrecta");
        }

        setRespuestaVerificada(true);
    }

    function siguientePregunta() {

        if (preguntaActual < preguntas.length - 1) {
            setPreguntaActual(preguntaActual + 1);
            setSeleccionUsuario(null);
            setRespuestaVerificada(false);
        }

    }

    function reiniciarTrivia() {
        setPreguntaActual(0);
        setSeleccionUsuario(null);
        setRespuestaVerificada(false);
        reiniciarJuego();
    }

    return (
        <div className="card mt-4">
            <div className="card-body">

                <h2 className="card-title">Preguntas de Trivia</h2>

                {preguntas.length > 0 && (
                    <>
                        {respuestaVerificada && preguntaActual === preguntas.length - 1 ? (

                            <div className="text-center">
                                <h3>¡Trivia finalizada!</h3>
                                <p>Has respondido todas las preguntas.</p>
                                <button
                                    className="btn btn-success mt-3"
                                    type="button"
                                    onClick={reiniciarTrivia}
                                >
                                    Reiniciar Trivia
                                </button>
                            </div>

                        ) : (

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

                                    {seleccionUsuario !== null && !respuestaVerificada && (
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

                                    {respuestaVerificada && preguntaActual < preguntas.length - 1 && (
                                        <div className="mt-3">
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                                onClick={siguientePregunta}
                                            >
                                                Siguiente pregunta
                                            </button>
                                        </div>
                                    )}

                                </div>
                            </div>

                        )}
                    </>
                )}

            </div>
        </div>
    )
}