'use client'

import React, { useEffect, useState } from 'react'
import { Persona } from '../modelos/Persona'
import TarjetaPersona from './TarjetaPersona'

export default function Personas() {

    const [personaLista, setPersonaLista] = useState<Persona[]>([]);

    useEffect(() => {
        setPersonaLista([
            {
                id: 1,
                nombre: 'Ana',
                ocupacion: 'Ingeniera de Software',
                pais: 'Honduras'
            },
            {
                id: 2,
                nombre: 'Carlos',
                ocupacion: 'Diseñador Gráfico',
                pais: 'México'
            },
            {
                id: 3,
                nombre: 'María',
                ocupacion: 'Médica',
                pais: 'España'
            },
            {
                id: 4,
                nombre: 'José',
                ocupacion: 'Profesor',
                pais: 'Colombia'
            },
            {
                id: 5,
                nombre: 'Lucía',
                ocupacion: 'Desarrolladora Web',
                pais: 'Argentina'
            }
        ]);
    }, []);

    
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
            {
                personaLista.map((persona: Persona) => (
                    <TarjetaPersona
                        key={persona.id}
                        persona={persona}
                    />
                ))
            }
        </div>
    )

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
            {
                personaLista.map((persona: Persona) => (
                    <TarjetaPersona
                        key={persona.id}
                        persona={persona}
                    />
                ))
            }
        </div>
    )
}
