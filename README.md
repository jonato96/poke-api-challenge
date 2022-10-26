# poke-api-challenge

Para ser honesto, no tengo experiencia en las tecnologias planteadas, pero igual realicé mi intento gracias a tutoriales de youtube y muchas pero muchas googleadas.

Reto de programacion

Proceso de construccion y ejecución del backend

Vamos a partir del problema planteado:
Diseñar un API REST que obtenga los pokemons almacenados en una base de datos.

Para ello se debe almancenar los siguientes datos:
	Nombre, descripcion, tipo, evolución, altura, peso
	Obligatorio** Nombre, descripcion
	
Requisito Funcional>
	Listar pokemones guardados
  
Requisito No Funcional>	
	Utilizar Metodos HTTP GET
	Los campos "nombre y descripcion" son obligatorios
	Respuestas en formato JSON
	Utilizar Swagger para documentacion
	Utilizar API guia https://pokeapi.co/api/v2/pokemon
	Las imagenes son strings (url del api guia)
	
Tecnologias>
	Lenguaje Java Framework SpringBoot
	Base de datos Postgresql
  
Al finalizar el back nos queda la siguiente api documentada con swagegr
<img src="https://github.com/jonato96/poke-api-challenge/blob/main/assets/API-Swagger.png"/>

FrontEnd

Para la vista se utilizó react, un tipo de carrusel con cartas, bootstrap, algunos tutoriales y mucho cariño.
<img src="https://github.com/jonato96/poke-api-challenge/blob/main/assets/APIReact.png"/>

En fin, fue divertido, al final me di cuenta que era mejor crear algun servicio para consumir el api principal y agregarlos a mi base, pero ya era tarde(ya lo habia hecho lso insert manual xD). Saludos.
