export const guardarEnStorage = (clave, elemento) => {

    //Conseguir los elementos que ya tenemos en LocalStorage
    let elementos = JSON.parse(localStorage.getItem(clave))
    console.log(elementos)

    //Comprobar si es un array
    if(Array.isArray(elementos)){
        //Añadir un elemento nuevo
        elementos.push(elemento)
    }
    else{
        //Crear un array con el nuevo elemento
        elementos = [elemento]
    }

    //Guardar en el LocalStorage
    localStorage.setItem(clave, JSON.stringify(elementos))

    //Devolver objeto
    return elemento

}