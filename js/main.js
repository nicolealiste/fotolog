function agregaPosteo() {
var containerPosteos= document.getElementById('contenedor-posteos');
var nombreFF= document.getElementById('nombre').value;
var contenidoFF= document.getElementById('cajaposteos').value;

var nuevoPost= document.createElement('div');//donde irá nuestro post

//elementos donde guardaremos valores
var contenedorNombre= document.createElement('strong');
var contenedorPost= document.createElement('p');
var separacion= document.createElement('hr');

//elemento para el corazón
var parrafCorazon= document.createElement('p');
var i= document.createElement('i');

//asignamos padre al ícono corazon
parrafCorazon.appendChild(i);

//damos atributo al corazon
parrafCorazon.setAttribute('class','corazon');
i.setAttribute("class", 'fa fa-heart');
i.setAttribute('arial-hidden', 'true');

//transformamos el nombre a nodo texto
var nodoNombre= document.createTextNode(nombreFF+" escribió:");
var nodoPosteo= document.createTextNode(contenidoFF);

//asignamos padre a los nodos creados
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

//asignamos padres a nombres y contenidos
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);

//creamos una función click y asignamos el color rojo de css
i.addEventListener('click', function(){ //agrega un "escuchador" al elemento, para que esté atento al usuario
	i.classList.toggle('rojo');//toggle si el elemento tiene clase se la quita, de lo contrario se la agrega
	});
//damos atributo al post y agregamos el contenedor de posteos
nuevoPost.setAttribute('class','posteo');
containerPosteos.appendChild(nuevoPost);

//para resetaer los campos y dejarlos nuevamente en blanco
document.getElementById('nombre').value="";
document.getElementById('cajaposteos').value="";	

	
}