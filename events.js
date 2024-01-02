var eventos = [
  { fecha: '01-01-2023', nombre: 'prueba', imagen: 'img/FE.jpg', link: 'formulae.html' },
  { fecha: '13-01-2023', nombre: 'E-Prix de Ciudad de Mexico', imagen: 'img/FE.jpg', link: 'formulae.html' },
  { fecha: '26-01-2023', nombre: 'E-Prix de Ridiyah' , imagen: 'img/FE.jpg' },
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
    <h2>Próximas Carreras</h2>
    <h3>${eventoProximo.nombre}</h3>
    <h4>Fecha: ${eventoProximo.fecha}</h4>
    <img src="${eventoProximo.imagen}" alt="${eventoProximo.nombre}">
    <a href="${eventoProximo.link}"<h6>Ver horarios</h6></a>
  `;
}

// Llama a la función de actualización al cargar la página y luego cada 24 horas
document.addEventListener('DOMContentLoaded', function () {
  actualizarEventos();
  setInterval(actualizarEventos, 24 * 60 * 60 * 1000);
});
