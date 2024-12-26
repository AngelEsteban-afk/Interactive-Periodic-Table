import { elementos } from "./elementos.js";
import { elementosLantanidos } from "./elementosLan.js";
import { elementosActinidos } from "./elementosAct.js";
import { mostrarInfo } from "./modal.js";

function crearElemento(elemento, tabla, clase) {
  const div = document.createElement("div");
  div.id = "elemento";
  div.className = `elemento ${clase}`;
  div.style.gridColumn = elemento.grupo || "auto";
  div.style.gridRow = elemento.periodo || "auto";
  div.innerHTML = `
                <span class="numero">${elemento.numeroAtomico}</span>
                <span class="simbolo">${elemento.simbolo}</span>
                <span class="nombre">${elemento.nombre}</span>
                `;
  div.onclick = () => mostrarInfo(elemento);
  tabla.appendChild(div);
  div.style.backgroundColor = elemento.color;
}

//Asignacion de la tabla periodica
const tablaPeriodica = document.getElementById("tablaPeriodica");
const tablaExtra = document.getElementById("tablaExtra");
const tablaExtra2 = document.getElementById("tablaExtra2");

elementos.forEach((elemento) => crearElemento(elemento, tablaPeriodica));
elementosLantanidos.forEach((elemento) =>
  crearElemento(elemento, tablaExtra, "elemento-lantanido")
);
elementosActinidos.forEach((elemento) =>
  crearElemento(elemento, tablaExtra2, "elemento-actinido")
);

// Función para seleccionar elementos basados en el color del botón
function seleccionarPorColor(color) {
  // Remover cualquier selección previa
  document.querySelectorAll("[selected]").forEach((el) => {
    el.removeAttribute("selected");
  });

  // Seleccionar elementos cuyo color coincida
  document.querySelectorAll(".elemento").forEach((elemento) => {
    if (elemento.style.backgroundColor === color) {
      elemento.setAttribute("selected", "true");
    }
  });
}

// Asignar eventos a los botones
const botones = document.querySelectorAll(".btns button");

botones.forEach((boton) => {
  boton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevenir que el click en el botón deseleccione los elementos.

    // Mover el scroll hacia arriba
    window.scrollTo({
      top: 10, // Dirección en el eje Y
      behavior: "smooth", // Desplazamiento suave
    });

    const color = getComputedStyle(boton).backgroundColor;
    seleccionarPorColor(color);
  });
});

// Deseleccionar elementos cuando se hace clic en cualquier parte del DOM
document.addEventListener("click", () => {
  document.querySelectorAll("[selected]").forEach((el) => {
    el.removeAttribute("selected");
  });
});
