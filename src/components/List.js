import React, { useEffect, useState } from 'react'
import { Edit } from './Edit';

export const List = ({listState, setListState}) => {

  const [edit, setEdit] = useState(0);

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));

    setListState(movies);

    return movies;
  }

  useEffect(() => {
    getMovies();
  }, []);

  const deleteMovie = (id) => {
    
    //Obtener peliculas del localStorage
    let savedMovies = getMovies();

    //filtrar las peliculas
    let moviesFiltered = savedMovies.filter( movie => movie.id !== parseInt(id));

    console.log('savedMovies', savedMovies, 'movies filtered',moviesFiltered);
    //Actualizar es estado
    setListState(moviesFiltered);

    //Actualizar el localStorage
    localStorage.setItem("movies", JSON.stringify(moviesFiltered));
  }

  return (
    <> 
      {listState != null ? 
      listState.map(movie => {
        return (
          <article key={movie.id} className="peli-item">
            <h3 className="title">{movie.title}</h3>
            <p className="desc">{movie.desc}</p>

            <button className="edit" onClick={() => setEdit(movie.id)}>Editar</button>
            <button className="delete" onClick={ () => deleteMovie(movie.id)}>Borrar</button>
            {/*Formulario que aparece cuando editamos la pelicula */}
            {edit === movie.id &&(
              <Edit
                movie= {movie}
                getMovies = {getMovies}
                setEdit={setEdit}
                setListState={setListState}
              />
            )}

          </article>
        )
      })
      : <h2>No hay peliculas para mostrar</h2>
    }
    </>
  )
}
