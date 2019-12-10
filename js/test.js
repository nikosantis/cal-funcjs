
// Escribamos una función que devuelva el nombre de alguien.
obtenerNombre = (persona) => persona.nombre
obtenerNombre({ nombre: 'Nikolas' }) // "Nikolas"


// Escribamos una función que ponga en mayúscula un string.
mayuscula = string => string.toUpperCase()
mayuscula('Nikolas') // "NIKOLAS"

// Entonces, si quisiéramos obtener y poner en mayúscula el nombre de la persona, podríamos hacer esto:
nombre = obtenerNombre({ nombre: 'Nikolas' })
mayuscula(nombre)

// Eso está bien, pero eliminemos ese nombre de variable intermedia.
mayuscula(obtenerNombre({ nombre: 'Nikolas' }))

// Mejor, pero no me gusta esa anidación. Se puede llenar demasiado. ¿Qué sucede si queremos agregar una función que obtenga los primeros 4 caracteres de un string?
obtener6Carateres = string => string.substring(0, 4)
obtener6Carateres('Nikolas') // Niko

// Resultando en
obtener6Carateres(mayuscula(obtenerNombre({ nombre: 'Nikolas' }))) //Niko

// pongámonos realmente locos y agreguemos una función para invertir un string.
reversa = string =>
  string
    .split('')
    .reverse()
    .join('')

reversa('Nikolas') //salokiN

// Ahora tenemos:
reversa(obtener6Carateres(mayuscula(obtenerNombre({ nombre: 'Nikolas' }))))
// okiN
