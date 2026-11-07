'use client'
import React from "react"
import { useTrivia } from '../Providers/TriviaProvider'

export default function Header() {

    const { puntaje, preguntasRespondidas } = useTrivia();

    return (
        <header>
            <h2>Trivia</h2>
            <p>Puntaje actual: {puntaje}</p>
            <p>Preguntas respondidas: {preguntasRespondidas}</p>
        </header>
    )
}