import { useState } from "react";
import Link from "next/link";
import { API_URL } from "./config";
import { useClient } from "next/client";

async function getUser() {
  const res = await fetch(`${API_URL}/logins?populate=*`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const { data } = await res.json();
  return data;
}

async function Home() {
  useClient();
  const games = await getUser();
  const [inputValue, setInputValue] = useState("");
  console.log(games);

  // Extraer el primer juego de la lista
  const firstGame = games[0];

  return (
    <main className="flex-col items-center min-h-screen p-24">
      {/* Mostrar el primer juego aparte */}
      <div className="mb-4">
        <label htmlFor="firstGame">Primer Juego:</label>
        <h1 id="firstGame" className="p-4 leading-normal">{firstGame.attributes.User_Name}</h1>
      </div>

      {/*Mapear y mostrar el resto de los juegos*/}
      {games.slice(1).map(({ attributes, id }) => (
        <Link key={id} href="#">
          <h1 className="flex flex-col justify-between p-4 leading-normal">{attributes.User_Name}</h1>
        </Link>
      ))}
      <div>
      <input
          type="text"
          placeholder="Ingresa un nombre"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={compararNombres}>Comparar</button>
      </div>
    </main>
  );
}

export default Home;
