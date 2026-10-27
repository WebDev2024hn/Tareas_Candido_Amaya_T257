import Image from "next/image";

import FormularioTareas from "./Componentes/FormularioTareas";

export default function Home() {
    return (
        <div className="container mt-4">
            <h2>Lista de tareas</h2>

            <FormularioTareas />
        </div>
    );
}
