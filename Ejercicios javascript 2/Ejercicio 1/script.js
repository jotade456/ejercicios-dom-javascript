function validar_datos(){
    const nombre=document.getElementById("nombre").value;
    const correo=document.getElementById("correo").value;
    const contraseña=document.getElementById("contraseña").value;
    const error=document.getElementById("error");
    const datos=[];

    if (nombre === "" || correo === "" || contraseña === "") {
        error.innerHTML = "Debe llenar todos los campos";
    } else if (contraseña.length < 6) {
        error.innerHTML = "La contraseña es muy corta";
    } else {
        error.innerHTML = "Datos ingresados correctamente";
        error.style.color = "green";
        datos.push(nombre, correo, contraseña);
        console.log(datos)

    }
}
