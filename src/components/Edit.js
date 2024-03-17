import React from 'react'

export const Edit = ({movie, getMovies, setEdit, setListState}) => {

  let tituloComponente = "Editar película: ";

  const saveEdit = (e, id) =>{
    e.preventDefault();

    //Conseguir el target del elemento
    let target = e.target;

    //Busacar el indice del objeto
    const savedMovies = getMovies();
    let index = savedMovies.findIndex(movie => movie.id === id);

    //Crear  objeto con el índice
    let newMovie = {
      id,
      title: target.title.value,
      desc: target.desc.value
    }

    //Actualizar el elemento
    savedMovies[index] = newMovie;

    //Guardar en localStorage
    localStorage.setItem("movies",JSON.stringify(savedMovies));

    //Actualizar estados
    setListState(savedMovies);
    setEdit(0);
  }

  return (
    <div className='edit_form'>
      <br />
      <hr />
      <h3 className='title'>{tituloComponente}{movie.title}</h3>
      <form onSubmit={e => saveEdit(e, movie.id)}>
        <input type='text'
               name='title'
               className='edited_title'
               defaultValue={movie.title}
        />
        <textarea name='desc'
                  defaultValue={movie.desc}
                  className='edited_desc'
        />
        <input type='submit' className='edit' value="Actualizar" />

      </form>
    </div>
  )
}
