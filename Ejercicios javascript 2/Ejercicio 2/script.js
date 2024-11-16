function agregar_tarea(){
    const tarea=document.getElementById("tarea");
    const lista=document.getElementById("lista");
    const agregar=document.createElement("li");

    if (tarea.value.trim() === ""){
        alert("Ingrese una tarea");
        return;
    }
    else{
        alert("Datos ingresados correctamente");
    }

    agregar.textContent = tarea.value.trim();
    lista.appendChild(agregar);
}