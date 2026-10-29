import { createContext } from "react";
import { Palabra } from "../modelos/Palabra";

interface IdiomaContextType {
    idioma: "es" | "en";
    setIdioma: (idioma: "es" | "en") => void;
    palabras: Palabra[];
    listaMostrada: string[];
}

export const ContextIdioma = createContext<IdiomaContextType>({
    idioma: "es",
    setIdioma: (idioma: "es" | "en") => { },
    palabras: [],
    listaMostrada: []
});