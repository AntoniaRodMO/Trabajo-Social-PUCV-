const malla = {
  "Primer Semestre": [
    { nombre: "Antropología Cultural", creditos: 3 },
    { nombre: "Fundamentos del Trabajo Social 1", creditos: 4 },
    { nombre: "Historia Social Contemporánea", creditos: 3 },
    { nombre: "Sociología General", creditos: 3 },
    { nombre: "Economía", creditos: 3 },
    { nombre: "Antropología Cristiana", creditos: 2 }
  ],
  "Segundo Semestre": [
    { nombre: "Psicología General", creditos: 3 },
    { nombre: "Fundamentos del Trabajo Social 2", creditos: 4, requisito: "Fundamentos del Trabajo Social 1" },
    { nombre: "Geografía General", creditos: 3 },
    { nombre: "Estadística 1", creditos: 3 },
    { nombre: "Introducción al Pensamiento Filosófico", creditos: 3 },
    { nombre: "Inglés 1", creditos: 2 },
    { nombre: "Formación Fundamental 1", creditos: 3 }
  ],
  "Tercer Semestre": [
    { nombre: "Psicología Social", creditos: 3, requisito: "Psicología General" },
    { nombre: "Análisis de Instituciones Culturales", creditos: 3 },
    { nombre: "Epistemología y Trabajo Social", creditos: 3 },
    { nombre: "Estadística 2", creditos: 3, requisito: "Estadística 1" },
    { nombre: "Sociología del Desarrollo", creditos: 3, requisito: "Sociología General" },
    { nombre: "Desarrollo Económico", creditos: 3 },
    { nombre: "Ética Cristiana", creditos: 2 }
  ],
  "Cuarto Semestre": [
    { nombre: "Enfoques Teóricos y Estrategia en Intervención Social 1", creditos: 4 },
    { nombre: "Métodos y Técnicas de Intervención Cualitativa", creditos: 3, requisito: "Epistemología y Trabajo Social" },
    { nombre: "Métodos y Técnicas de Intervención Cuantitativa", creditos: 3, requisito: "Estadística 2" },
    { nombre: "Modernidad y Problemas Sociales", creditos: 3 },
    { nombre: "Teoría Política", creditos: 3, requisito: "Sociología del Desarrollo" },
    { nombre: "Inglés 2", creditos: 2, requisito: "Inglés 1" },
    { nombre: "Optativo 1", creditos: 2 }
  ],
  "Quinto Semestre": [
    { nombre: "Práctica Integrada 1", creditos: 6, requisito: "Enfoques Teóricos y Estrategia en Intervención Social 1" },
    { nombre: "Métodos de Análisis Cualitativo en Intervención Social", creditos: 3, requisito: "Métodos y Técnicas de Intervención Cualitativa" },
    { nombre: "Métodos de Análisis Cuantitativo en Intervención Social", creditos: 3, requisito: "Métodos y Técnicas de Intervención Cuantitativa" },
    { nombre: "Planificación Social y Políticas Públicas", creditos: 3 },
    { nombre: "Derecho de Familia", creditos: 3 },
    { nombre: "Formación Fundamental", creditos: 2 }
  ],
  "Sexto Semestre": [
    { nombre: "Salud Mental", creditos: 3, requisito: "Psicología Social" },
    { nombre: "Práctica Integrada 2", creditos: 6, requisito: "Práctica Integrada 1" },
    { nombre: "Enfoques Teóricos y Estrategia en Intervención Social 2", creditos: 4, requisito: "Enfoques Teóricos y Estrategia en Intervención Social 1" },
    { nombre: "Ética", creditos: 3 },
    { nombre: "Inglés 3", creditos: 2, requisito: "Inglés 2" },
    { nombre: "Formación Fundamental" }
  ],
  "Séptimo Semestre": [
    { nombre: "Práctica Integrada 3", creditos: 6, requisito: "Práctica Integrada 2" },
    { nombre: "Derecho del Trabajo", creditos: 3 },
    { nombre: "Teorías Administrativas", creditos: 3 },
    { nombre: "Gestión y Evaluación de Proyectos Sociales", creditos: 3, requisito: "Planificación Social y Políticas Públicas" },
    { nombre: "Inglés 4", creditos: 2, requisito: "Inglés 3" },
    { nombre: "Optativo 2" }
  ],
  "Octavo Semestre": [
    { nombre: "Práctica Integrada 4", creditos: 6, requisito: "Práctica Integrada 3" },
    { nombre: "Seguridad Social", creditos: 3, requisito: "Derecho del Trabajo" },
    { nombre: "Comportamiento Humano en el Trabajo", creditos: 3, requisito: "Teorías Administrativas" },
    { nombre: "Ética del Trabajo Social", creditos: 3, requisito: "Ética" },
    { nombre: "Optativo 3", creditos: 2 }
  ],
  "Noveno Semestre": [
    { nombre: "Taller de Tesis 1", creditos: 4, requisito: "Práctica Integrada 4" },
    { nombre: "Tesis 1", creditos: 10, requisito: "Práctica Integrada 4" },
    { nombre: "Optativo 4", creditos: 2 },
    { nombre: "Optativo 5", creditos: 2 },
    { nombre: "Formación Fundamental", creditos: 2 }
  ],
  "Décimo Semestre": [
    { nombre: "Taller de Tesis 2", creditos: 4, requisito: "Taller de Tesis 1" },
    { nombre: "Tesis 2", creditos: 10, requisito: "Tesis 1" }
  ]
};

function crearMalla() {
  const contenedor = document.getElementById("malla");

  for (let semestre in malla) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    divSemestre.appendChild(titulo);

    malla[semestre].forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.textContent = ramo.nombre;

      const detalle = document.createElement("div");
      detalle.className = "detalle";
      detalle.textContent = 
        (ramo.creditos ? `Créditos: ${ramo.creditos}` : "") + 
        (ramo.requisito ? ` | Requisito: ${ramo.requisito}` : "");

      divRamo.appendChild(detalle);
      divRamo.onclick = () => {
        detalle.style.display = (detalle.style.display === 'block') ? 'none' : 'block';
      };

      divSemestre.appendChild(divRamo);
    });

    contenedor.appendChild(divSemestre);
  }
}

crearMalla();
