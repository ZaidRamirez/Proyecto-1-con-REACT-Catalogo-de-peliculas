import React, { useState } from 'react'

export const Search = ({listState, setListState}) => {

  const [search,setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);

  const searchMovie = (e) =>{
    //Crear estado y actualizarlo
    setSearch(e.target.value);
    
    //Listado completo de peliculas
    let moviesResult = listState.filter(movie =>{
      return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
    })

    if(search.length <= 1 || moviesResult.length <= 0){
      moviesResult = JSON.parse(localStorage.getItem("movies"));
      setNotFound(true);
    }else{
      setNotFound(false);
    }

    if(search)

    //Actualizar estado del listado con el filtro
    setListState(moviesResult);
  }

  return (
    <div className="search">
          <h3 className="title">Buscador</h3>
          {(notFound === true && search.length > 2) &&(
            <span className='notFound'>No se ha encontrado ninguna película</span>
          )}
          <form action="">
            <input type="text" 
                   id='search_field'
                   name='search'
                   autoComplete='off'
                   onChange={searchMovie}
            />
            <p>Ingresa el título de la <br />película que deseas buscar</p>
          </form>
        </div>
  )
}
