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
  // Puedes agregar más semestres igual que arriba
};

const aprobados = new Set();

function actualizarDesbloqueos() {
  const ramosDivs = document.querySelectorAll('.ramo');

  ramosDivs.forEach(div => {
    const nombreRamo = div.dataset.nombre;

    // Buscar ramo en malla para obtener requisito
    let requisito = null;
    outer:
    for (const semestre in malla) {
      for (const ramo of malla[semestre]) {
        if (ramo.nombre === nombreRamo) {
          requisito = ramo.requisito || null;
          break outer;
        }
      }
    }

    // Si requisito existe y no está aprobado, bloquear
    if (requisito && !aprobados.has(requisito)) {
      div.style.pointerEvents = 'none';
      div.style.opacity = '0.5';
      div.title = `Requiere aprobar: ${requisito}`;
    } else {
      div.style.pointerEvents = 'auto';
      div.style.opacity = '1';
      div.title = '';
    }

    // Cambiar estilo si está aprobado
    if (aprobados.has(nombreRamo)) {
      div.style.backgroundColor = '#a8e6a3'; // verde claro
    } else {
      div.style.backgroundColor = '#eef'; // color normal
    }
  });
}

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = ''; // Limpiar contenido previo si hay

  for (let semestre in malla) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    divSemestre.appendChild(titulo);

    malla[semestre].forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.dataset.nombre = ramo.nombre; // guardamos nombre en atributo data

      divRamo.textContent = ramo.nombre;

      const detalle = document.createElement("div");
      detalle.className = "detalle";
      detalle.textContent = 
        (ramo.creditos ? `Créditos: ${ramo.creditos}` : "") + 
        (ramo.requisito ? ` | Requisito: ${ramo.requisito}` : "");

      divRamo.appendChild(detalle);

      divRamo.onclick = () => {
        // Si está bloqueado no hacer nada
        if (divRamo.style.pointerEvents === 'none') return;

        // Mostrar/ocultar detalle
        detalle.style.display = (detalle.style.display === 'block') ? 'none' : 'block';

        // Marcar o desmarcar como aprobado al hacer doble clic
        // Pero para evitar conflicto con clic simple, usamos click normal para toggle aprobado:
        if (aprobados.has(ramo.nombre)) {
          aprobados.delete(ramo.nombre);
        } else {
          aprobados.add(ramo.nombre);
        }
        actualizarDesbloqueos();
      };

      divSemestre.appendChild(divRamo);
    });

    contenedor.appendChild(divSemestre);
  }

  actualizarDesbloqueos();
}

crearMalla();
