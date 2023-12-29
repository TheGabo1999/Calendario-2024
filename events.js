var eventos = [
  { fecha: '2023-01-13', nombre: 'E-Prix de Ciudad de Mexico', imagen: 'img/FE.jpg' },
  { fecha: '2023-01-26', nombre: 'E-Prix de Ridiyah' , imagen: 'img/FE.jpg' },
  // Agrega más eventos según sea necesario
];

function actualizarEventos() {
  var fechaActual = new Date();
  var eventoProximo = eventos[0];

  for (var i = 1; i < eventos.length; i++) {
    var fechaEvento = new Date(eventos[i].fecha);

    if (fechaEvento > fechaActual && fechaEvento < new Date(eventoProximo.fecha)) {
      eventoProximo = eventos[i];
    }
  }

  // Actualiza el contenido de tu <aside> con la información del evento próximo
  var asideElement = document.getElementById('proximos-eventos');
  asideElement.innerHTML = `
    <h2>${eventoProximo.nombre}</h2>
    <p>Fecha: ${eventoProximo.fecha}</p>
    <img src="${eventoProximo.imagen}" alt="${eventoProximo.nombre}">
  `;
}

// Llama a la función de actualización al cargar la página y luego cada 24 horas
document.addEventListener('DOMContentLoaded', function () {
  actualizarEventos();
  setInterval(actualizarEventos, 24 * 60 * 60 * 1000);
});
