# Comision-23301-ejercicioClase04

* Ejercicio

* Completar la class button
* Que se dibuje un botón en html luego de llamar al método render.
* Van a crear otra class input/text o el que sea y que se dibuje igual que boton en el html.

Otro modo de generar un botón, código no reutilizable.

/* 
document.addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('input');
    button.type = 'button';
    button.id = 'submit';
    button.value = 'Botón';
    button.className = 'btn';

    let container = document.getElementById('container');
    container.appendChild(button);

    button.onclick = function() {
        let nombre = document.getElementById('saludo').value;
        let h1 = document.createElement('h1');
        h1.textContent = `¡Hola ${nombre}, un gusto saludarte!`;
        let cont1 = document.getElementById('cont1');
        cont1.appendChild(h1);
    }  
});
 */