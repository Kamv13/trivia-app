"use client";
import { useState, useEffect } from "react";
import preguntasData from "./data/preguntas.json";
import PreguntaCard from "./components/PreguntaCard";

type Pregunta = {
  idPreguntas: string;
  DescripcionPregunta: string;
  respuestaCorrecta: boolean;
  puntajePregunta: number;
};

export default function Home() {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    setPreguntas(preguntasData);
  }, []);

  const siguientePregunta = () => {
    setIndiceActual((prev) => prev + 1);
  };

  if (preguntas.length === 0) return <p>Cargando preguntas...</p>;

  const pregunta = preguntas[indiceActual];
  const esUltima = indiceActual + 1 === preguntas.length;

  return (
    <div className="container mt-5">
      <PreguntaCard
        descripcion={pregunta.DescripcionPregunta}
        respuestaCorrecta={pregunta.respuestaCorrecta}
        puntaje={pregunta.puntajePregunta}
        onSiguiente={siguientePregunta}
        esUltima={esUltima}
      />
    </div>
  );
}