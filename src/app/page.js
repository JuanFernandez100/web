import Link from "next/link";
import{getUser} from "./service/usuario";

async function Home() {
  const user = await getUser();
  
  console.log(user);

  // Extraer el primer usuario de la lista
  const firstUser = user[1];
  

  return (
    <main className="flex-col items-center min-h-screen p-24">
      {/* Mostrar el primer usuario aparte */}
      <div className="mb-4">
        <label htmlFor="firstUser">Primer Juego:</label>
        <h1 id="firstUser" className="p-4 leading-normal">{firstUser.attributes.User_Name}</h1>
      </div>

      {/*Mapear y mostrar el resto de los usuarios*/}
      {user.map(({ attributes, id }) => (
        <Link key={id} href="#">
          <h1 className="flex flex-col justify-between p-4 leading-normal">{attributes.User_Name}</h1>
        </Link>
      ))}
      
    </main>
  );
}

export default Home;
