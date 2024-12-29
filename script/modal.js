// Mostrar información del elemento en el modal
export function mostrarInfo(elemento) {
  const modal = document.getElementById("modal");
  const nombre = document.getElementById("elementoNombre");
  const info = document.getElementById("elementoInfo");
  const modalContent = modal.querySelector(".modal-content");

  nombre.textContent = elemento.nombre;
  info.innerHTML = `
                Símbolo: ${elemento.simbolo}<br>
                Número atómico: ${elemento.numeroAtomico}<br>
                Masa atómica: ${elemento.masaAtomica}<br>
                ${elemento.grupo ? "Grupo: " + elemento.grupo + "<br>" : ""}
                ${
                  elemento.periodo
                    ? "Periodo: " + elemento.periodo + "<br>"
                    : ""
                }
                ${elemento.tipo ? "Tipo: " + elemento.tipo : ""} <br>
            `;

  modalContent.style.backgroundColor = elemento.color;
  modal.style.display = "block";
}

const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];

span.onclick = () => (modal.style.display = "none");

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
