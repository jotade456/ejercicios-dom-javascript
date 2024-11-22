function buscar() {
    const palabra = document.getElementById("palabra").value.toLowerCase();
    const tabla = document.getElementById("diccionario");
    const filas = tabla.getElementsByTagName("tr");
    let contador = 0;


    for (let i = 1; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName("td");
        let encontrado = false;

        for (let j = 0; j < celdas.length; j++) {
            if (celdas[j].textContent.toLowerCase().includes(palabra)) {
                encontrado = true;
            }
        }
        if (encontrado) {
            filas[i].style.display = "";
            contador++;
        } else {
            filas[i].style.display = "none";
        }
    }
    document.getElementById("resultado").innerHTML = `Se encontraron ${contador} resultado(s).`;
}
