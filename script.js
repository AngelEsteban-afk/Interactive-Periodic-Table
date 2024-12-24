const elementos = [
  {
    simbolo: "H",
    nombre: "Hidrógeno",
    numeroAtomico: 1,
    grupo: 1,
    periodo: 1,
    color: "#728a9c",
  },
  {
    simbolo: "He",
    nombre: "Helio",
    numeroAtomico: 2,
    grupo: 18,
    periodo: 1,
    color: "#7a568f",
  },
  {
    simbolo: "Li",
    nombre: "Litio",
    numeroAtomico: 3,
    grupo: 1,
    periodo: 2,
    color: "#de7254",
  },
  {
    simbolo: "Be",
    nombre: "Berilio",
    numeroAtomico: 4,
    grupo: 2,
    periodo: 2,
    color: "#e39e30",
  },
  {
    simbolo: "B",
    nombre: "Boro",
    numeroAtomico: 5,
    grupo: 13,
    periodo: 2,
    color: "#5685d1",
  },
  {
    simbolo: "C",
    nombre: "Carbono",
    numeroAtomico: 6,
    grupo: 14,
    periodo: 2,
    color: "#728a9c",
  },
  {
    simbolo: "N",
    nombre: "Nitrogeno",
    numeroAtomico: 7,
    grupo: 15,
    periodo: 2,
    color: "#728a9c",
  },
  {
    simbolo: "O",
    nombre: "Oxigeno",
    numeroAtomico: 8,
    grupo: 16,
    periodo: 2,
    color: "#728a9c",
  },
  {
    simbolo: "F",
    nombre: "Fluor",
    numeroAtomico: 9,
    grupo: 17,
    periodo: 2,
    color: "#729c99",
  },
  {
    simbolo: "Ne",
    nombre: "Neon",
    numeroAtomico: 10,
    grupo: 18,
    periodo: 2,
    color: "#7a568f",
  },
  {
    simbolo: "Na",
    nombre: "Sodio",
    numeroAtomico: 11,
    grupo: 1,
    periodo: 3,
    color: "#de7254",
  },
  {
    simbolo: "Mg",
    nombre: "Magnesio",
    numeroAtomico: 12,
    grupo: 2,
    periodo: 3,
    color: "#e39e30",
  },
  {
    simbolo: "Al",
    nombre: "Aluminio",
    numeroAtomico: 13,
    grupo: 13,
    periodo: 3,
    color: "#4d9e77",
  },
  {
    simbolo: "Si",
    nombre: "Silicio",
    numeroAtomico: 14,
    grupo: 14,
    periodo: 3,
    color: "#5685d1",
  },
  {
    simbolo: "P",
    nombre: "Fósforo",
    numeroAtomico: 15,
    grupo: 15,
    periodo: 3,
    color: "#728a9c",
  },
  {
    simbolo: "S",
    nombre: "Azufre",
    numeroAtomico: 16,
    grupo: 16,
    periodo: 3,
    color: "#728a9c",
  },
  {
    simbolo: "Cl",
    nombre: "Cloro",
    numeroAtomico: 17,
    grupo: 17,
    periodo: 3,
    color: "#729c99",
  },
  {
    simbolo: "Ar",
    nombre: "Argón",
    numeroAtomico: 18,
    grupo: 18,
    periodo: 3,
    color: "#7a568f",
  },
  {
    simbolo: "K",
    nombre: "Potasio",
    numeroAtomico: 19,
    grupo: 1,
    periodo: 4,
    color: "#de7254",
  },
  {
    simbolo: "Ca",
    nombre: "Calcio",
    numeroAtomico: 20,
    grupo: 2,
    periodo: 4,
    color: "#e39e30",
  },
  {
    simbolo: "Sc",
    nombre: "Escandio",
    numeroAtomico: 21,
    grupo: 3,
    periodo: 4,
    color: "#e6c730",
  },
  {
    simbolo: "Ti",
    nombre: "Titanio",
    numeroAtomico: 22,
    grupo: 4,
    periodo: 4,
    color: "#e6c730",
  },
  {
    simbolo: "V",
    nombre: "Vanadio",
    numeroAtomico: 23,
    grupo: 5,
    periodo: 4,
    color: "#e6c730",
  },
  {
    simbolo: "Cr",
    nombre: "Cromo",
    numeroAtomico: 24,
    grupo: 6,
    periodo: 4,
    color: "#e6c730",
  },
  {
    simbolo: "Mn",
    nombre: "Manganeso",
    numeroAtomico: 25,
    grupo: 7,
    periodo: 4,
    color: "#e6c730",
  },
  {
    simbolo: "Fe",
    nombre: "Hierro",
    numeroAtomico: 26,
    grupo: 8,
    periodo: 4,
    color: "#e6c730",
  },
  {
    simbolo: "Co",
    nombre: "Cobalto",
    numeroAtomico: 27,
    grupo: 9,
    periodo: 4,
    color: "#e6c730",
  },
  {
    simbolo: "Ni",
    nombre: "Niquel",
    numeroAtomico: 28,
    grupo: 10,
    periodo: 4,
    color: "#e6c730",
  },
  {
    simbolo: "Cu",
    nombre: "Cobre",
    numeroAtomico: 29,
    grupo: 11,
    periodo: 4,
    color: "#e6c730",
  },
  {
    simbolo: "Zn",
    nombre: "Zinc",
    numeroAtomico: 30,
    grupo: 12,
    periodo: 4,
    color: "#e6c730",
  },
  {
    simbolo: "Ga",
    nombre: "Galio",
    numeroAtomico: 31,
    grupo: 13,
    periodo: 4,
    color: "#4d9e77",
  },
  {
    simbolo: "Ge",
    nombre: "Germanio",
    numeroAtomico: 32,
    grupo: 14,
    periodo: 4,
    color: "#5685d1",
  },
  {
    simbolo: "As",
    nombre: "Arsénico",
    numeroAtomico: 33,
    grupo: 15,
    periodo: 4,
    color: "#5685d1",
  },
  {
    simbolo: "Se",
    nombre: "Selenio",
    numeroAtomico: 34,
    grupo: 16,
    periodo: 4,
    color: "#728a9c",
  },
  {
    simbolo: "Br",
    nombre: "Bromo",
    numeroAtomico: 35,
    grupo: 17,
    periodo: 4,
    color: "#729c99",
  },
  {
    simbolo: "Kr",
    nombre: "Kriptón",
    numeroAtomico: 36,
    grupo: 18,
    periodo: 4,
    color: "#7a568f",
  },
  {
    simbolo: "Rb",
    nombre: "Rubidio",
    numeroAtomico: 37,
    grupo: 1,
    periodo: 5,
    color: "#de7254",
  },
  {
    simbolo: "Sr",
    nombre: "Estroncio",
    numeroAtomico: 38,
    grupo: 2,
    periodo: 5,
    color: "#e39e30",
  },
  {
    simbolo: "Y",
    nombre: "Itrio",
    numeroAtomico: 39,
    grupo: 3,
    periodo: 5,
    color: "#e6c730",
  },
  {
    simbolo: "Zr",
    nombre: "Circonio",
    numeroAtomico: 40,
    grupo: 4,
    periodo: 5,
    color: "#e6c730",
  },
  {
    simbolo: "Nb",
    nombre: "Niobio",
    numeroAtomico: 41,
    grupo: 5,
    periodo: 5,
    color: "#e6c730",
  },
  {
    simbolo: "Mo",
    nombre: "Molibdeno",
    numeroAtomico: 42,
    grupo: 6,
    periodo: 5,
    color: "#e6c730",
  },
  {
    simbolo: "Tc",
    nombre: "Tecnecio",
    numeroAtomico: 43,
    grupo: 7,
    periodo: 5,
    color: "#e6c730",
  },
  {
    simbolo: "Ru",
    nombre: "Rutenio",
    numeroAtomico: 44,
    grupo: 8,
    periodo: 5,
    color: "#e6c730",
  },
  {
    simbolo: "Rh",
    nombre: "Rodio",
    numeroAtomico: 45,
    grupo: 9,
    periodo: 5,
    color: "#e6c730",
  },
  {
    simbolo: "Pd",
    nombre: "Paladio",
    numeroAtomico: 46,
    grupo: 10,
    periodo: 5,
    color: "#e6c730",
  },
  {
    simbolo: "Ag",
    nombre: "Plata",
    numeroAtomico: 47,
    grupo: 11,
    periodo: 5,
    color: "#e6c730",
  },
  {
    simbolo: "Cd",
    nombre: "Cadmio",
    numeroAtomico: 48,
    grupo: 12,
    periodo: 5,
    color: "#e6c730",
  },
  {
    simbolo: "In",
    nombre: "Indio",
    numeroAtomico: 49,
    grupo: 13,
    periodo: 5,
    color: "#4d9e77",
  },
  {
    simbolo: "Sn",
    nombre: "Estaño",
    numeroAtomico: 50,
    grupo: 14,
    periodo: 5,
    color: "#4d9e77",
  },
  {
    simbolo: "Sb",
    nombre: "Antimonio",
    numeroAtomico: 51,
    grupo: 15,
    periodo: 5,
    color: "#5685d1",
  },
  {
    simbolo: "Te",
    nombre: "Telurio",
    numeroAtomico: 52,
    grupo: 16,
    periodo: 5,
    color: "#5685d1",
  },
  {
    simbolo: "I",
    nombre: "Yodo",
    numeroAtomico: 53,
    grupo: 17,
    periodo: 5,
    color: "#729c99",
  },
  {
    simbolo: "Xe",
    nombre: "Xenón",
    numeroAtomico: 54,
    grupo: 18,
    periodo: 5,
    color: "#7a568f",
  },
  {
    simbolo: "Cs",
    nombre: "Cesio",
    numeroAtomico: 55,
    grupo: 1,
    periodo: 6,
    color: "#de7254",
  },
  {
    simbolo: "Ba",
    nombre: "Bario",
    numeroAtomico: 56,
    grupo: 2,
    periodo: 6,
    color: "#e39e30",
  },
  {
    simbolo: "La",
    nombre: "Lantano",
    numeroAtomico: 57,
    grupo: 3,
    periodo: 6,
    color: "#bd77b6",
  },
  {
    simbolo: "Hf",
    nombre: "Hafnio",
    numeroAtomico: 72,
    grupo: 4,
    periodo: 6,
    color: "#e6c730",
  },
  {
    simbolo: "Ta",
    nombre: "Tántalo",
    numeroAtomico: 73,
    grupo: 5,
    periodo: 6,
    color: "#e6c730",
  },
  {
    simbolo: "W",
    nombre: "Wolframio",
    numeroAtomico: 74,
    grupo: 6,
    periodo: 6,
    color: "#e6c730",
  },
  {
    simbolo: "Re",
    nombre: "Renio",
    numeroAtomico: 75,
    grupo: 7,
    periodo: 6,
    color: "#e6c730",
  },
  {
    simbolo: "Os",
    nombre: "Osmio",
    numeroAtomico: 76,
    grupo: 8,
    periodo: 6,
    color: "#e6c730",
  },
  {
    simbolo: "Ir",
    nombre: "Iridio",
    numeroAtomico: 77,
    grupo: 9,
    periodo: 6,
    color: "#e6c730",
  },
  {
    simbolo: "Pt",
    nombre: "Platino",
    numeroAtomico: 78,
    grupo: 10,
    periodo: 6,
    color: "#e6c730",
  },
  {
    simbolo: "Au",
    nombre: "Oro",
    numeroAtomico: 79,
    grupo: 11,
    periodo: 6,
    color: "#e6c730",
  },
  {
    simbolo: "Hg",
    nombre: "Mercurio",
    numeroAtomico: 80,
    grupo: 12,
    periodo: 6,
    color: "#e6c730",
  },
  {
    simbolo: "Tl",
    nombre: "Talio",
    numeroAtomico: 81,
    grupo: 13,
    periodo: 6,
    color: "#4d9e77",
  },
  {
    simbolo: "Pb",
    nombre: "Plomo",
    numeroAtomico: 82,
    grupo: 14,
    periodo: 6,
    color: "#4d9e77",
  },
  {
    simbolo: "Bi",
    nombre: "Bismuto",
    numeroAtomico: 83,
    grupo: 15,
    periodo: 6,
    color: "#4d9e77",
  },
  {
    simbolo: "Po",
    nombre: "Polonio",
    numeroAtomico: 84,
    grupo: 16,
    periodo: 6,
    color: "#5685d1",
  },
  {
    simbolo: "At",
    nombre: "Astato",
    numeroAtomico: 85,
    grupo: 17,
    periodo: 6,
    color: "#729c99",
  },
  {
    simbolo: "Rn",
    nombre: "Radón",
    numeroAtomico: 86,
    grupo: 18,
    periodo: 6,
    color: "#7a568f",
  },
  {
    simbolo: "Fr",
    nombre: "Francio",
    numeroAtomico: 87,
    grupo: 1,
    periodo: 7,
    color: "#de7254",
  },
  {
    simbolo: "Ra",
    nombre: "Radio",
    numeroAtomico: 88,
    grupo: 2,
    periodo: 7,
    color: "#e39e30",
  },
  {
    simbolo: "Ac",
    nombre: "Actinio",
    numeroAtomico: 89,
    grupo: 3,
    periodo: 7,
    color: "#c994d6",
  },
  {
    simbolo: "Rf",
    nombre: "Rutherfordio",
    numeroAtomico: 104,
    grupo: 4,
    periodo: 7,
    color: "#e6c730",
  },
  {
    simbolo: "Db",
    nombre: "Dubnio",
    numeroAtomico: 105,
    grupo: 5,
    periodo: 7,
    color: "#e6c730",
  },
  {
    simbolo: "Sg",
    nombre: "Seaborgio",
    numeroAtomico: 106,
    grupo: 6,
    periodo: 7,
    color: "#e6c730",
  },
  {
    simbolo: "Bh",
    nombre: "Bohrio",
    numeroAtomico: 107,
    grupo: 7,
    periodo: 7,
    color: "#e6c730",
  },
  {
    simbolo: "Hs",
    nombre: "Hasio",
    numeroAtomico: 108,
    grupo: 8,
    periodo: 7,
    color: "#e6c730",
  },
  {
    simbolo: "Mt",
    nombre: "Meitnerio",
    numeroAtomico: 109,
    grupo: 9,
    periodo: 7,
    color: "#e6c730",
  },
  {
    simbolo: "Ds",
    nombre: "Darmstatio",
    numeroAtomico: 110,
    grupo: 10,
    periodo: 7,
    color: "#e6c730",
  },
  {
    simbolo: "Rg",
    nombre: "Roentgenio",
    numeroAtomico: 111,
    grupo: 11,
    periodo: 7,
    color: "#e6c730",
  },
  {
    simbolo: "Cn",
    nombre: "Copernicio",
    numeroAtomico: 112,
    grupo: 12,
    periodo: 7,
    color: "#e6c730",
  },
  {
    simbolo: "Nh",
    nombre: "Nihonio",
    numeroAtomico: 113,
    grupo: 13,
    periodo: 7,
    color: "#4d9e77",
  },
  {
    simbolo: "Fl",
    nombre: "Flerovio",
    numeroAtomico: 114,
    grupo: 14,
    periodo: 7,
    color: "#4d9e77",
  },
  {
    simbolo: "Mc",
    nombre: "Moscovio",
    numeroAtomico: 115,
    grupo: 15,
    periodo: 7,
    color: "#4d9e77",
  },
  {
    simbolo: "Lv",
    nombre: "Livermorio",
    numeroAtomico: 116,
    grupo: 16,
    periodo: 7,
    color: "#4d9e77",
  },
  {
    simbolo: "Ts",
    nombre: "Teneso",
    numeroAtomico: 117,
    grupo: 17,
    periodo: 7,
    color: "#729c99",
  },
  {
    simbolo: "Og",
    nombre: "Oganesón",
    numeroAtomico: 118,
    grupo: 18,
    periodo: 7,
    color: "#7a568f",
  },
  // Añade más elementos aquí...
];

const elementosLantanidos = [
  {
    simbolo: "Ce",
    nombre: "Cerio",
    numeroAtomico: 58,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Pr",
    nombre: "Praseodimio",
    numeroAtomico: 59,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Nd",
    nombre: "Neodimio",
    numeroAtomico: 60,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Pm",
    nombre: "Prometio",
    numeroAtomico: 61,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Sm",
    nombre: "Samario",
    numeroAtomico: 62,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Eu",
    nombre: "Europio",
    numeroAtomico: 63,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Gd",
    nombre: "Gadolinio",
    numeroAtomico: 64,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Tb",
    nombre: "Terbio",
    numeroAtomico: 65,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Dy",
    nombre: "Disprosio",
    numeroAtomico: 66,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Ho",
    nombre: "Holmio",
    numeroAtomico: 67,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Er",
    nombre: "Erbio",
    numeroAtomico: 68,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Tm",
    nombre: "Tulio",
    numeroAtomico: 69,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Yb",
    nombre: "Iterbio",
    numeroAtomico: 70,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
  {
    simbolo: "Lu",
    nombre: "Lutecio",
    numeroAtomico: 71,
    tipo: "Lantánido",
    color: "#bd77b6",
  },
];

const elementosActinidos = [
  {
    simbolo: "Th",
    nombre: "Torio",
    numeroAtomico: 90,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "Pa",
    nombre: "Protactinio",
    numeroAtomico: 91,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "U",
    nombre: "Uranio",
    numeroAtomico: 92,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "Np",
    nombre: "Neptunio",
    numeroAtomico: 93,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "Pu",
    nombre: "Plutonio",
    numeroAtomico: 94,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "Am",
    nombre: "Americio",
    numeroAtomico: 95,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "Cm",
    nombre: "Curio",
    numeroAtomico: 96,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "Bk",
    nombre: "Berkelio",
    numeroAtomico: 97,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "Cf",
    nombre: "Californio",
    numeroAtomico: 98,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "Es",
    nombre: "Einstenio",
    numeroAtomico: 99,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "Fm",
    nombre: "Fermio",
    numeroAtomico: 100,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "Md",
    nombre: "Mendelevio",
    numeroAtomico: 101,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "No",
    nombre: "Nobelio",
    numeroAtomico: 102,
    tipo: "Actínido",
    color: "#c994d6",
  },
  {
    simbolo: "Lr",
    nombre: "Lawrencio",
    numeroAtomico: 103,
    tipo: "Actínido",
    color: "#c994d6",
  },
];

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

  /* if (elemento.numeroAtomico === 1) {
    div.style.background = "white"; 
  }
  if (elemento.numeroAtomico === 2) {
    div.style.background = "purple";
  } */
}

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

// Mostrar información del elemento en el modal
function mostrarInfo(elemento) {
  const modal = document.getElementById("modal");
  const nombre = document.getElementById("elementoNombre");
  const info = document.getElementById("elementoInfo");
  const modalContent = modal.querySelector(".modal-content");

  nombre.textContent = elemento.nombre;
  info.innerHTML = `
                Símbolo: ${elemento.simbolo}<br>
                Número atómico: ${elemento.numeroAtomico}<br>
                ${elemento.grupo ? "Grupo: " + elemento.grupo + "<br>" : ""}
                ${
                  elemento.periodo
                    ? "Periodo: " + elemento.periodo + "<br>"
                    : ""
                }
                ${elemento.tipo ? "Tipo: " + elemento.tipo : ""}
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
