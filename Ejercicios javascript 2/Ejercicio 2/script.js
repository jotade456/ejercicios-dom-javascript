function agregar_tarea() {
    const tarea = document.getElementById("tarea");
    const lista = document.getElementById("lista");
    const lista_tarea = document.createElement("li");
    const area_texto = document.createElement("span");
    const completar = document.createElement("button");
    const eliminar = document.createElement("button");

    if (tarea.value.trim() === "") {
        alert("Ingrese una tarea");
        return;
    }


    area_texto.textContent = tarea.value.trim();
    area_texto.style.marginRight = "10px";

    completar.textContent = "✔️";
    completar.style.marginRight = "5px";
    completar.addEventListener("click", () => {
        area_texto.style.textDecoration = "line-through";
        area_texto.style.color = "green";
    });

    eliminar.textContent = "🗑️";
    eliminar.addEventListener("click", () => {
        lista.removeChild(lista_tarea);
    });

    lista_tarea.appendChild(area_texto);
    lista_tarea.appendChild(completar);
    lista_tarea.appendChild(eliminar);
    lista.appendChild(lista_tarea);

}
