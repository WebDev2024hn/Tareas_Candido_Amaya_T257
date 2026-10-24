
import React from 'react'
import { Persona } from '../modelos/Persona'

interface Props {
    persona: Persona;
}

export default function TarjetaPersona({ persona }: Props) {
    return (
        <div style={{
            border: '1px solid gray',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px',
            width: '250px'
        }}>
            <p>Nombre: {persona.nombre}</p>
            <p>Ocupación: {persona.ocupacion}</p>
            <p>País: {persona.pais}</p>
        </div>
    )
}
