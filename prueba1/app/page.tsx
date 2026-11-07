// import Image from "next/image";
import TriviaProvider from "./Providers/TriviaProvider";
import Header from "./Components/Header";
import Trivia from "./Components/Trivia";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <Trivia />
    </div>
  );
}
