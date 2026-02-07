'use client'

import Link from "next/link";
import { useTrivia } from "../context/triviaContext";
import { useState, useEffect } from "react";

type PreguntaCardProps = {
  descripcion: string;
  respuestaCorrecta: boolean;
  puntaje: number;
  onSiguiente: () => void;
  esUltima: boolean;
};

export default function PreguntaCard({ descripcion, respuestaCorrecta, puntaje, onSiguiente, esUltima }: PreguntaCardProps) {
  const { incrementarPuntaje } = useTrivia();
  const [seleccion, setSeleccion] = useState<boolean | null>(null);
  const [mensaje, setMensaje] = useState<string>("");

  
  useEffect(() => {
    setSeleccion(null);
    setMensaje("");
  }, [descripcion]);

  const manejarSeleccion = (opcion: boolean) => {
    setSeleccion(opcion);
    if (opcion === respuestaCorrecta) {
      setMensaje("La respuesta es correcta!");
      incrementarPuntaje(puntaje);
    } else {
      setMensaje("La respuesta es incorrecta.");
    }
  };

  return (
    <div className="card p-4 text-center">
      <h2 className="mb-4">{descripcion}</h2>
      <div className="d-flex justify-content-center gap-3">
        <button
          className="btn btn-success"
          disabled={seleccion !== null}
          onClick={() => manejarSeleccion(true)}
        >
          Verdadero
        </button>
        <button
          className="btn btn-danger"
          disabled={seleccion !== null}
          onClick={() => manejarSeleccion(false)}
        >
          Falso
        </button>
      </div>
      {mensaje && <p className="mt-3">{mensaje}</p>}
      {seleccion !== null && !esUltima && (
        <button className="btn btn-secondary mt-3" onClick={onSiguiente}>
          Siguiente
        </button>
      )}
      {seleccion !== null && esUltima && (
        <Link href="/resultado" className="btn btn-primary mt-3">
          Ver resultados
        </Link>
      )}
    </div>
  );
}