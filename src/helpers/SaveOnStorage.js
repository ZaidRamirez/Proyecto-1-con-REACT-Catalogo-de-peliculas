export const SaveOnStorage = (key, item) =>{

    /**Conseguir los elementos del localStorage */
    let items = JSON.parse(localStorage.getItem(key));
    //Comprobar si es un array
    if(Array.isArray(items)){

        //Añadir elemento al array
        items.push(item);
        //agregag una peli
    }else{

        //Crear un array
        items = [item];

    }
    
    //Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(items));

    //Devolver el objeto
    return item;
    
}