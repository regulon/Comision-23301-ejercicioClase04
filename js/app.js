document.getElementById('saludo').placeholder = 'Persona a la que te gustaría saludar';

function saludar(){
var nombre = document.getElementById('saludo').value;
document.getElementById('cont1').innerHTML= '<h1>¡Hola '+ nombre + ', un gusto saludarte!</h1>';
};

class Boton {
  constructor(texto, onClick) {
    this.texto = texto;
    this.onClick = onClick;
  }

  render() {
    const boton = document.createElement('button');
    boton.innerText = this.texto;
    boton.addEventListener('click', this.onClick);
    return boton;
  }
};

const contenedor = document.getElementById('contenedor');

class InputCreator {
  createInput(containerId, inputId, inputName, inputType, placeholder) {
    // Crear un elemento input
    const inputElement = document.createElement('input');

    // Establecer los atributos del elemento input
    inputElement.type = inputType;
    inputElement.id = inputId;
    inputElement.name = inputName;
    inputElement.placeholder = placeholder;

    // Agregar el elemento input al DOM
    const containerElement = document.getElementById(containerId);
    containerElement.appendChild(inputElement);
  }
}

const inputCreator = new InputCreator();
inputCreator.createInput('dato', 'input-text', 'input-text', 'text', 'Introduce tu nombre');

const miBoton = new Boton('Haz clic aquí', () => {
  const nombre = document.getElementById('input-text').value;
  alert(`¡Hola ${nombre}, un gusto saludarte de nuevo!`);
});

contenedor.appendChild(miBoton.render());

document.getElementById('input-text').addEventListener('input', function() {
  document.getElementById('input-text').innerHTML = '';
});

document.getElementById('input-text').addEventListener('focusout', function() {
  const nombre = document.getElementById('input-text').value;
  document.getElementById('input-text').innerHTML = `<h1>¡Hola ${nombre}, un gusto saludarte!</h1>`;
});
