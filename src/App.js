import { Search } from "./components/Search";
import { Add } from "./components/Add";
import { List } from "./components/List";
import { useState } from "react";

function App() {

  const [listState, setListState] = useState([]);

  return (
    <div className="layout">

      {/*Cabecera del sitio*/}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>

      {/*Barra de navegación*/}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/*Contenido principal*/}
      <section className="content">
        {/*Aquí va el listado de películas*/}
        <List 
          listState={listState}
          setListState={setListState}
        />
        
      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
        <Search 
          listState={listState}
          setListState={setListState}
        />

        <Add 
          setListState={setListState}
        />
      </aside>

      {/*Pie de página*/}
      <footer className="footer">
        &copy; Máster en JavaScript ES12 y TypeScript
      </footer>
    </div>
  );
}

export default App;
