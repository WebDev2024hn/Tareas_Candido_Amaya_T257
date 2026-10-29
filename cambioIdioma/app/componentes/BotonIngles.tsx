'use client'

import { useContext } from "react";
import { ContextIdioma } from "../contextos/IdiomaContext";

export default function BotonIngles() {
    const { setIdioma } = useContext(ContextIdioma);

    return (
        <button
            className="btn btn-success m-2"
            onClick={() => setIdioma("en")}
        >
            Cambiar Idioma Inglés
        </button>
    );
}