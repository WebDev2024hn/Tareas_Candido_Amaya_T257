'use client'

import { useEffect, useState } from "react";
import { ContextIdioma } from "../contextos/IdiomaContext";
import { Palabra } from "../modelos/Palabra";

export default function IdiomaProvider({ children }: { children: React.ReactNode }) {

    const palabras: Palabra[] = [
        { es: "Casa", en: "House" },
        { es: "Perro", en: "Dog" },
        { es: "Comida", en: "Food" },
        { es: "Escuela", en: "School" },
        { es: "Libro", en: "Book" },
        { es: "Agua", en: "Water" },
        { es: "Gato", en: "Cat" },
        { es: "Amigo", en: "Friend" },
        { es: "Trabajo", en: "Work" },
        { es: "Jardín", en: "Garden" },
        { es: "Computadora", en: "Computer" },
        { es: "Familia", en: "Family" }
    ];

    const [idioma, setIdioma] = useState<"es" | "en">("es");
    const [listaMostrada, setListaMostrada] = useState<string[]>([]);

    useEffect(() => {
        const lista = palabras.map((palabra) => palabra[idioma]);
        setListaMostrada(lista);
    }, [idioma]);

    return (
        <ContextIdioma.Provider value={{
            idioma,
            setIdioma,
            palabras,
            listaMostrada
        }}>
            {children}
        </ContextIdioma.Provider>
    );
}