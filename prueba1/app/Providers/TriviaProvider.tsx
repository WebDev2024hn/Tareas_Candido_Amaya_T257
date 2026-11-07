'use client'
import React, { useContext, useState } from 'react'
import { ViewReact } from '../modelos/ViewReact'
// import { ContextOperaciones } from '../Contextos/TriviaContext'
import { TriviaContext } from '../Contextos/TriviaContext'

export default function TriviaProvider({ children }: ViewReact) {

    const [puntaje, setPuntaje] = useState<number>(0)
    const [preguntasRespondidas, setPreguntasRespondidas] = useState<number>(0);
    // const [resultado, setResultado] = useState(0)

    function incrementarPuntaje(puntos: number) {
        setPuntaje(puntaje + puntos)
    }

    function incrementarPreguntas() {
        setPreguntasRespondidas(preguntasRespondidas + 1)
    }

    function reiniciarJuego() {
        setPuntaje(0)
        setPreguntasRespondidas(0)
    }

    return (
        <TriviaContext.Provider value={{
            puntaje,
            preguntasRespondidas,
            incrementarPuntaje,
            incrementarPreguntas,
            reiniciarJuego
        }}>
            {children}
        </TriviaContext.Provider>
    )
}

export const useTrivia = () => {
    return useContext(TriviaContext)
}
