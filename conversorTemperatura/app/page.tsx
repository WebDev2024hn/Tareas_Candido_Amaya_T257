import Image from "next/image";
import CaF from "./componentes/CaF";
import CaK from "./componentes/CaK";

export default function Home() {

  const celsius: number = 25;
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Conversor de temperatura</h1>
      
      <h2>Temperatura inicial: {celsius} °C</h2>
      <ul>
        <li>
          <CaF celsius={celsius} />
        </li>
        <li>
          <CaK celsius={celsius} />
        </li>
      </ul>
    </div>
  );
}