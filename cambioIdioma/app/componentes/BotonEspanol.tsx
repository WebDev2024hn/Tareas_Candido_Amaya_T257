'use client'

import { useContext } from "react";
import { ContextIdioma } from "../contextos/IdiomaContext";

export default function BotonEspanol() {
    const { setIdioma } = useContext(ContextIdioma);

    return (
        <button
            className="btn btn-primary m-2"
            onClick={() => setIdioma("es")}
        >
            Cambiar Idioma Español
        </button>
    );
}