'use client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { TriviaProvider, useTrivia } from "./context/triviaContext";

function Header() {
  const { puntaje } = useTrivia();
  return (
    <header className="bg-light p-3 mb-4">
      <h3>Puntaje actual: {puntaje}</h3>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <TriviaProvider>
          <Header />
          {children}
        </TriviaProvider>
      </body>
    </html>
  );
}