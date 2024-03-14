import React from 'react'

export const Edit = ({movie}) => {

  let tituloComponente = "Editar película: ";

  return (
    <div className='edit_form'>
      <br />
      <hr />
      <h3 className='title'>{tituloComponente}{movie.title}</h3>
      <form>
        <input type='text'
               name='title'
               className='edited_title'
               defaultValue={movie.title}
        />
        <textarea name='description'
                  defaultValue={movie.desc}
                  className='edited_desc'
        />
        <input type='submit' className='edit' value="Actualizar" />

      </form>
    </div>
  )
}
