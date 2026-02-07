'use client'

import { useTrivia } from "../../context/triviaContext";
import Link from "next/link";

export default function Resultado() {
  const { puntaje, respondidas, reiniciarTrivia } = useTrivia();

  const reiniciar = () => {
    reiniciarTrivia();
  };

  return (
    <div className="container text-center mt-5">
      <h2>Resultados Finales</h2>
      <p>Puntaje obtenido: {puntaje}</p>
      <p>Preguntas respondidas: {respondidas}</p>
      
      <Link href="/" className="btn btn-primary mt-3" onClick={reiniciar}>
        Reiniciar Trivia
      </Link>
    </div>
  );
}