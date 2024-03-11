function App() {
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
        {/*Aquí van las películas*/}
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">Hola esta es mi primer pelicula</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>

        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">Hola esta es mi primer pelicula</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>

        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">Hola esta es mi primer pelicula</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>

        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">Hola esta es mi primer pelicula</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form action="">
            <input type="text" />
            <button>Buscar</button>
          </form>
        </div>

        <div className="add">
          <h3 className="title">Añadir pelicula</h3>
          <form action="">
            <input type="text" placeholder="Titulo" />
            <textarea placeholder="Descripción"></textarea>
            <input type="submit" value="Guardar" />
          </form>
        </div>
      </aside>

      {/*Pie de página*/}
      <footer className="footer">
        &copy; Máster en JavaScript ES12 y TypeScript
      </footer>
    </div>
  );
}

export default App;
