'use client'

import { useContext } from "react";
import { ContextIdioma } from "./contextos/IdiomaContext";
import BotonEspanol from "./componentes/BotonEspanol";
import BotonIngles from "./componentes/BotonIngles";

export default function Home() {

    const { idioma, listaMostrada } = useContext(ContextIdioma);

    return (
        <main className="container mt-5">
            <h1 className="text-center mb-4">
                Traductor de Palabras
            </h1>

            <div className="text-center mb-4">
                <BotonEspanol />
                <BotonIngles />
            </div>

            <h3 className="text-center mb-3">
                Idioma actual: {idioma === "es" ? "Español" : "Inglés"}
            </h3>

            <ul className="list-group">
                {listaMostrada.map((palabra, index) => (
                    <li className="list-group-item" key={index}>
                        {palabra}
                    </li>
                ))}
            </ul>
        </main>
    );
}