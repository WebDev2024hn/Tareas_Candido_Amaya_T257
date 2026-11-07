import { createContext } from "react";

//sumar, restat, dividir, multiplicar
// export const TriviaContex = createContext({
//     a: 0,
//     b: 0,
//     setA: (a: number) => { },
//     setB: (b: number) => { },
//     resultado: 0,
//     operacionAritmetica: (tipoOPeracion: number) => { }
// })

export const TriviaContext = createContext({
    puntaje: 0,
    preguntasRespondidas: 0,
    incrementarPuntaje: (puntos: number) => { },
    incrementarPreguntas: () => { },
    reiniciarJuego: () => { }
});