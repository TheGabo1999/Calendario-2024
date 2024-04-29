// Supongamos que tienes un arreglo de eventos con el siguiente formato:
const eventos = [
    {
        nombre: "E-Prix de Ciudad de Mexico",
        fecha: new Date("2024-01-13"),
        imagen: "img/mexico-city.webp",
        enlace: "GP/mexicocity.html"
    },
    {
        nombre: "E-Prix de Diriyah",
        fecha: new Date("2024-01-26"),
        imagen: "img/diriyah.webp",
        enlace: "GP/diriyah.html"
    },
    {
        nombre: "E-Prix de São Paulo",
        fecha: new Date("2024-03-16"),
        imagen: "img/sao-paulo.webp",
        enlace: "GP/saopaulo.html"
    },
    {
        nombre: "E-Prix de Tokyo",
        fecha: new Date("2024-03-30"),
        imagen: "img/tokyo.webp",
        enlace: "GP/tokyo.html"
    },
    {
        nombre: "E-Prix de Misano Adriatico",
        fecha: new Date("2024-04-13"),
        imagen: "img/misano.webp",
        enlace: "GP/misano.html"
    },
    {
        nombre: "E-Prix de Monaco",
        fecha: new Date("2024-04-27"),
        imagen: "img/monaco-fe.webp",
        enlace: "GP/monacofe.html"
    },
    {
        nombre: "E-Prix de Berlín",
        fecha: new Date("2024-05-11"),
        imagen: "img/berlin.webp",
        enlace: "GP/berlin.html"
    },
    {
        nombre: "E-Prix de Shanghai",
        fecha: new Date("2024-05-25"),
        imagen: "img/Shanghai.webp",
        enlace: "GP/shanghai.html"
    },
    {
        nombre: "E-Prix de Portland",
        fecha: new Date("2024-06-29"),
        imagen: "img/portland.webp",
        enlace: "GP/portland.html"
    },
    {
        nombre: "E-Prix de Londres",
        fecha: new Date("2024-07-20"),
        imagen: "img/london.webp",
        enlace: "GP/london.html"
    },
    {
        nombre: "Gran Premio de Bahrein",
        fecha: new Date("2024-03-02"),
        imagen: "img/bahrein.avif",
        enlace: "GP/bahrain.html"
    },
    {
        nombre: "Formula 2 Bahrein",
        fecha: new Date("2024-03-02"),
        imagen: "img/bahrainf2.webp",
        enlace: "GP/bahrainf2.html"
    },
    {
        nombre: "Formula 3 Bahrein",
        fecha: new Date("2024-03-02"),
        imagen: "img/bahrainf3.webp",
        enlace: "GP/bahrainf3.html"
    },
        {
        nombre: "Gran Premio de Arabia Saudita",
        fecha: new Date("2024-03-09"),
        imagen: "img/saudiarabia.avif",
        enlace: "GP/saudiarabia.html"
    },
    {
        nombre: "Formula 2 Arabia Saudita",
        fecha: new Date("2024-03-09"),
        imagen: "img/jeddahf2.webp",
        enlace: "GP/saudiarabiaf2.html"
    },
    {
        nombre: "Gran Premio de Australia",
        fecha: new Date("2024-03-24"),
        imagen: "img/australia.avif",
        enlace: "GP/australia.html"
    },
    {
        nombre: "Formula 2 Australia",
        fecha: new Date("2024-03-24"),
        imagen: "img/australiaf2.webp",
        enlace: "GP/australiaf2.html"
    },
    {
        nombre: "Formula 3 Australia",
        fecha: new Date("2024-03-24"),
        imagen: "img/australiaf3.webp",
        enlace: "GP/australiaf3.html"
    },
    {
        nombre: "Gran Premio de Japon",
        fecha: new Date("2024-04-07"),
        imagen: "img/japan.avif",
        enlace: "GP/japan.html"
    },
    {
        nombre: "Gran Premio de China",
        fecha: new Date("2024-04-21"),
        imagen: "img/china.avif",
        enlace: "GP/china.html"
    },
    {
        nombre: "Gran Premio de Miami",
        fecha: new Date("2024-05-05"),
        imagen: "img/miami.avif",
        enlace: "GP/miami.html"
    },
    {
        nombre: "Gran Premio de Emilia Romaña",
        fecha: new Date("2024-05-19"),
        imagen: "img/imola.avif",
        enlace: "GP/imola.html"
    },
    {
        nombre: "Formula 2 Imola",
        fecha: new Date("2024-05-19"),
        imagen: "img/imolaf2.webp",
        enlace: "GP/imolaf2.html"
    },
    {
        nombre: "Formula 3 Imola",
        fecha: new Date("2024-05-19"),
        imagen: "img/imolaf3.webp",
        enlace: "GP/imolaf3.html"
    },
    {
        nombre: "Gran Premio de Monaco",
        fecha: new Date("2024-05-26"),
        imagen: "img/monaco.avif",
        enlace: "GP/monacof1.html"
    },
    {
        nombre: "Formula 2 Monaco",
        fecha: new Date("2024-05-26"),
        imagen: "img/monacof2.webp",
        enlace: "GP/monacof2.html"
    },
    {
        nombre: "Formula 3 Monaco",
        fecha: new Date("2024-05-26"),
        imagen: "img/monacof3.webp",
        enlace: "GP/monacof3.html"
    },
    {
        nombre: "Gran Premio de Canada",
        fecha: new Date("2024-06-09"),
        imagen: "img/canada.avif",
        enlace: "GP/canada.html"
    },
    {
        nombre: "Gran Premio de España",
        fecha: new Date("2024-06-23"),
        imagen: "img/spain.avif",
        enlace: "GP/spain.html"
    },
    {
        nombre: "Formula 2 España",
        fecha: new Date("2024-06-23"),
        imagen: "img/spainf2.webp",
        enlace: "GP/spainf2.html"
    },
    {
        nombre: "Formula 3 España",
        fecha: new Date("2024-06-23"),
        imagen: "img/spainf3.webp",
        enlace: "GP/spainf3.html"
    },
    {
        nombre: "Gran Premio de Austria",
        fecha: new Date("2024-06-30"),
        imagen: "img/austria.avif",
        enlace: "GP/austria.html"
    },
    {
        nombre: "Formula 2 Austria",
        fecha: new Date("2024-06-30"),
        imagen: "img/austriaf2.webp",
        enlace: "GP/austriaf2.html"
    },
    {
        nombre: "Formula 3 Austria",
        fecha: new Date("2024-06-30"),
        imagen: "img/austriaf3.webp",
        enlace: "GP/austriaf3.html"
    },
    {
        nombre: "Gran Premio de Gran Bretaña",
        fecha: new Date("2024-07-07"),
        imagen: "img/gbr.avif",
        enlace: "GP/greatbritain.html"
    },
    {
        nombre: "Formula 2 Gran Bretaña",
        fecha: new Date("2024-07-07"),
        imagen: "img/greatbritainf2.webp",
        enlace: "GP/greatbritainf2.html"
    },
    {
        nombre: "Formula 3 Gran Bretaña",
        fecha: new Date("2024-07-07"),
        imagen: "img/greatbritainf3.webp",
        enlace: "GP/greatbritainf3.html"
    },
    {
        nombre: "Gran Premio de Hungria",
        fecha: new Date("2024-07-21"),
        imagen: "img/hungary.avif",
        enlace: "GP/hungary.html"
    },
    {
        nombre: "Formula 2 Hungria",
        fecha: new Date("2024-07-21"),
        imagen: "img/hungaryf2.webp",
        enlace: "GP/hungaryf2.html"
    },
    {
        nombre: "Formula 3 Hungria",
        fecha: new Date("2024-07-21"),
        imagen: "img/hungaryf3.webp",
        enlace: "GP/hungaryf3.html"
    },
    {
        nombre: "Gran Premio de Belgica",
        fecha: new Date("2024-07-28"),
        imagen: "img/belgium.avif",
        enlace: "GP/belgium.html"
    },
    {
        nombre: "Formula 2 Belgica",
        fecha: new Date("2024-07-28"),
        imagen: "img/belgiumf2.webp",
        enlace: "GP/belgiumf2.html"
    },
    {
        nombre: "Formula 3 Belgica",
        fecha: new Date("2024-07-28"),
        imagen: "img/belgiumf3.webp",
        enlace: "GP/belgiumf3.html"
    },
    {
        nombre: "Gran Premio de Holanda",
        fecha: new Date("2024-08-25"),
        imagen: "img/netherlands.avif",
        enlace: "GP/netherlands.html"
    },
    {
        nombre: "Gran Premio de Italia",
        fecha: new Date("2024-09-01"),
        imagen: "img/italy.avif",
        enlace: "GP/monza.html"
    },
    {
        nombre: "Formula 2 Italia",
        fecha: new Date("2024-09-01"),
        imagen: "img/monzaf2.webp",
        enlace: "GP/monzaf2.html"
    },
    {
        nombre: "Formula 3 Italia",
        fecha: new Date("2024-09-01"),
        imagen: "img/monzaf3.webp",
        enlace: "GP/monzaf3.html"
    },
    {
        nombre: "Gran Premio de Azerbaijan",
        fecha: new Date("2024-09-15"),
        imagen: "img/azerbaijan.avif",
        enlace: "GP/azerbaijan.html"
    },
    {
        nombre: "Formula 2 Azerbaijan",
        fecha: new Date("2024-09-15"),
        imagen: "img/azerbaijanf2.webp",
        enlace: "GP/azerbaijanf2.html"
    },
    {
        nombre: "Gran Premio de Singapur",
        fecha: new Date("2024-09-22"),
        imagen: "img/singapore.avif",
        enlace: "GP/singapore.html"
    },
    {
        nombre: "Gran Premio de Estados Unidos",
        fecha: new Date("2024-10-20"),
        imagen: "img/usa.avif",
        enlace: "GP/usa.html"
    },
    {
        nombre: "Gran Premio de Mexico",
        fecha: new Date("2024-10-27"),
        imagen: "img/mexico.avif",
        enlace: "GP/mexico.html"
    },
    {
        nombre: "Gran Premio de Brasil",
        fecha: new Date("2024-11-03"),
        imagen: "img/brazil.avif",
        enlace: "GP/brazil.html"
    },
    {
        nombre: "Gran Premio de Las Vegas",
        fecha: new Date("2024-11-23"),
        imagen: "img/vegas.avif",
        enlace: "GP/vegas.html"
    },
    {
        nombre: "Gran Premio de Qatar",
        fecha: new Date("2024-12-01"),
        imagen: "img/qatar.avif",
        enlace: "GP/qatar.html"
    },
    {
        nombre: "Formula 2 Qatar",
        fecha: new Date("2024-12-01"),
        imagen: "img/qatarf2.jpg",
        enlace: "GP/qatarf2.html"
    },
    {
        nombre: "Gran Premio de Abu Dhabi",
        fecha: new Date("2024-12-08"),
        imagen: "img/uae.avif",
        enlace: "GP/uae.html"
    },
    {
        nombre: "Formula 2 Abu Dhabi",
        fecha: new Date("2024-12-08"),
        imagen: "img/uaef2.webp",
        enlace: "GP/uaef2.html"
    },
    {
        nombre: "F1 Academy Arabia Saudita",
        fecha: new Date("2024-03-09"),
        imagen: "img/saudiarabiaf1a.jpg",
        enlace: "GP/saudiarabiaf1a.html"
    },
    {
        nombre: "F1 Academy Miami",
        fecha: new Date("2024-05-05"),
        imagen: "img/miamif1a.jpg",
        enlace: "GP/miamif1a.html"
    },
    {
        nombre: "F1 Academy España",
        fecha: new Date("2024-06-23"),
        imagen: "img/barcelonaf1a.webp",
        enlace: "GP/spainf1a.html"
    },
    {
        nombre: "F1 Academy Holanda",
        fecha: new Date("2024-08-25"),
        imagen: "img/netherlandsf1a.jpg",
        enlace: "GP/netherlandsf1a.html"
    },
    {
        nombre: "F1 Academy Singapur",
        fecha: new Date("2024-09-22"),
        imagen: "img/singaporef1a.avif",
        enlace: "GP/singaporef1a.html"
    },
    {
        nombre: "F1 Academy Qatar",
        fecha: new Date("2024-12-01"),
        imagen: "img/qatarf2.jpg",
        enlace: "GP/qatarf1a.html"
    },
    {
        nombre: "F1 Academy Abu Dhabi",
        fecha: new Date("2024-12-08"),
        imagen: "img/uaef1a.jpg",
        enlace: "GP/uaef1a.html"
    },
    {
        nombre: "Grand Prix of St. Petersburg",
        fecha: new Date("2024-03-10"),
        imagen: "img/stpete.jpg",
        enlace: "GP/stpete.html"
    },
    {
        nombre: "$1 Million Challenge",
        fecha: new Date("2024-03-24"),
        imagen: "img/Thermal.jpg",
        enlace: "GP/thermal.html"
    },
    {
        nombre: "Grand Prix of Long Beach",
        fecha: new Date("2024-04-21"),
        imagen: "img/longbeach.jpg",
        enlace: "GP/longbeach.html"
    },
    {
        nombre: "Indy Grand Prix",
        fecha: new Date("2024-04-28"),
        imagen: "img/barber.jpg",
        enlace: "GP/barber.html"
    },
    {
        nombre: "Sonsio Grand Prix",
        fecha: new Date("2024-05-11"),
        imagen: "img/indyrc.jpg",
        enlace: "GP/indyrc.html"
    },
    {
        nombre: "Clasificacion Indy 500",
        fecha: new Date("2024-05-19"),
        imagen: "img/indy500.jpg",
        enlace: "GP/indy500.html"
    },
    {
        nombre: "500 Millas de Indianapolis",
        fecha: new Date("2024-05-26"),
        imagen: "img/indy500.jpg",
        enlace: "GP/indy500.html"
    },
    {
        nombre: "Detroit Grand Prix",
        fecha: new Date("2024-06-02"),
        imagen: "img/detroit.jpg",
        enlace: "GP/detroit.html"
    },
    {
        nombre: "Road America",
        fecha: new Date("2024-06-09"),
        imagen: "img/roadamerica.jpg",
        enlace: "GP/roadamerica.html"
    },
    {
        nombre: "Grand Prix of Monterey",
        fecha: new Date("2024-06-23"),
        imagen: "img/lagunaseca.jpg",
        enlace: "GP/lagunaseca.html"
    },
    {
        nombre: "Indy 200 at Mid-Ohio",
        fecha: new Date("2024-07-07"),
        imagen: "img/mid-ohio.jpg",
        enlace: "GP/midohio.html"
    },
    {
        nombre: "Iowa IndyCar Race Weekend",
        fecha: new Date("2024-07-14"),
        imagen: "img/iowa.jpg",
        enlace: "GP/iowa.html"
    },
    {
        nombre: "Indy Toronto",
        fecha: new Date("2024-07-21"),
        imagen: "img/toronto.jpg",
        enlace: "GP/toronto.html"
    },
    {
        nombre: "Gateway 500",
        fecha: new Date("2024-08-17"),
        imagen: "img/wwtr.jpg",
        enlace: "GP/wwtr.html"
    },
    {
        nombre: "Grand Prix of Portland",
        fecha: new Date("2024-08-25"),
        imagen: "img/portland.jpg",
        enlace: "GP/portland.html"
    },
    {
        nombre: "Milwaukee Mile",
        fecha: new Date("2024-09-01"),
        imagen: "img/milwaukee.jpg",
        enlace: "GP/milwaukee.html"
    },
    {
        nombre: "Music City Grand Prix",
        fecha: new Date("2024-09-15"),
        imagen: "img/nashville.jpg",
        enlace: "GP/nashville.html"
    },
    {
        nombre: "El Calafate",
        fecha: new Date("2024-02-25"),
        imagen: "img/calafate.jpg",
        enlace: "GP/calafate.html"
    },
    {
        nombre: "Viedma",
        fecha: new Date("2024-03-17"),
        imagen: "img/",
        enlace: "GP/.html"
    },
    {
        nombre: "Neuquén",
        fecha: new Date("2024-04-07"),
        imagen: "http://actc.org.ar/upload/galeriamultimedia/2349/61697_big.jpg",
        enlace: "GP/neuquen.html"
    },
    {
        nombre: "Toay, La Pampa",
        fecha: new Date("2024-04-28"),
        imagen: "http://actc.org.ar/upload/galeriamultimedia/2446/65482_big.jpg",
        enlace: "GP/toay.html"
    },
    {
        nombre: "Termas de Rio Hondo",
        fecha: new Date("2024-05-12"),
        imagen: "http://actc.org.ar/upload/galeriamultimedia/2383/62893_big.jpg",
        enlace: "GP/termas.html"
    },
    {
        nombre: "Concepción del Uruguay",
        fecha: new Date("2024-05-26"),
        imagen: "http://actc.org.ar/upload/galeriamultimedia/2375/62570_big.jpg",
        enlace: "GP/concepcion.html"
    },
    {
        nombre: "Rafaela",
        fecha: new Date("2024-06-16"),
        imagen: "http://actc.org.ar/upload/galeriamultimedia/2391/63183_big.jpg",
        enlace: "GP/rafaela.html"
    },
    {
        nombre: "",
        fecha: new Date("2024-07-07"),
        imagen: "img/",
        enlace: "GP/.html"
    },
    {
        nombre: "",
        fecha: new Date("2024-07-28"),
        imagen: "img/",
        enlace: "GP/.html"
    },
    {
        nombre: "",
        fecha: new Date("2024-08-18"),
        imagen: "img/",
        enlace: "GP/.html"
    },
    {
        nombre: "",
        fecha: new Date("2024-09-15"),
        imagen: "img/",
        enlace: "GP/.html"
    },
    {
        nombre: "",
        fecha: new Date("2024-09-29"),
        imagen: "img/",
        enlace: "GP/.html"
    },
    {
        nombre: "",
        fecha: new Date("2024-10-20"),
        imagen: "img/",
        enlace: "GP/.html"
    },
    {
        nombre: "",
        fecha: new Date("2024-11-10"),
        imagen: "img/",
        enlace: "GP/.html"
    },
    {
        nombre: "",
        fecha: new Date("2024-12-01"),
        imagen: "img/",
        enlace: "GP/.html"
    },
    // Agrega más eventos según sea necesario
];

document.addEventListener("DOMContentLoaded", function () {
    mostrarEventosCercanos();
});

function mostrarEventosCercanos() {
    const fechaActual = new Date();

    // Filtra los eventos que aún no han pasado
    const eventosFuturos = eventos.filter(evento => evento.fecha >= fechaActual);

    // Ordena los eventos futuros por fecha ascendente
    eventosFuturos.sort((a, b) => a.fecha - b.fecha);

    // Obtiene los primeros 4 eventos futuros
    const eventosCercanos = eventosFuturos.slice(0, 4);

    const eventosContainer = document.getElementById("proximos-eventos");
    eventosContainer.innerHTML = ""; // Limpia el contenido anterior

    eventosCercanos.forEach(evento => {
        const fechaFormateada = obtenerFechaFormateada(evento.fecha);

        const eventoHTML = `
            <div class="event-container">
                <h3>${evento.nombre}</h3>
                <h4>${fechaFormateada}</h4>
                <img src="${evento.imagen}" alt="${evento.nombre}">
                <a href="${evento.enlace}">Ver horarios</a>
            </div>
        `;

        eventosContainer.innerHTML += eventoHTML;
    });
}

function obtenerFechaFormateada(fecha) {
    // Formatea la fecha directamente con la zona horaria del sistema
    const opcionesFecha = { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' };
    const fechaFormateada = new Date(fecha).toLocaleString('es-ES', opcionesFecha);

    return fechaFormateada;
}




