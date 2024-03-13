import React, { useState } from 'react'

export const Crear = () => {

    const titleComponent = "Añadir pelicula";
    const [movieState, setMovieState] = useState({
        title:'',
        desc:''
    });

    const getFormValues = e => {
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let title = target.title.value;
        let desc = target.desc.value;

        //Crear objeto de la pelicula a guardar
        let movie = {
            id: new Date().getTime(),
            title,
            desc
        };

        setMovieState(movie);

        console.log(movieState);
    }

  return (
    <div className="add">
          <h3 className="title">{titleComponent}</h3>
          <form action="" onSubmit={getFormValues}>
            <input 
                type="text"
                id="title"
                name="title"
                placeholder="Titulo" 
            />
            <textarea 
                id="desc"
                name="desc"
                placeholder="Descripción"
            >
            </textarea>
            <input 
                type="submit"
                id="save"
                value="Guardar" 
            />
          </form>
        </div>
  )
}
