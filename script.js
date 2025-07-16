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
  // Puedes agregar los demás semestres aquí...
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

// Ejecutar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  crearMalla();
});
