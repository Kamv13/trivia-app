'use client';
import { createContext, useContext, useState } from "react";

type TriviaContextType = {
    puntaje: number;
    respondidas: number;
    incrementarPuntaje: (puntos: number) => void;
    reiniciarTrivia: () => void;
};

const TriviaContext = createContext<TriviaContextType | undefined>(undefined);

export function TriviaProvider({ children }: { children: React.ReactNode }) {
    const [puntaje, setPuntaje] = useState(0);
    const [respondidas, setRespondidas] = useState(0);

    const incrementarPuntaje = (puntos: number) => {
        setPuntaje((prev) => prev + puntos);
        setRespondidas((prev) => prev + 1);
    };

    const reiniciarTrivia = () => {
        setPuntaje(0);
        setRespondidas(0);
    };

    return (
        <TriviaContext.Provider value={{ puntaje, respondidas, incrementarPuntaje, reiniciarTrivia }}>
            {children}
        </TriviaContext.Provider>
    );
}

export function useTrivia() {
    const context = useContext(TriviaContext);  
    if (!context) {
        throw new Error("useTrivia se debe usar siempre dentro de un TriviaProvider");
    }
    return context;
}