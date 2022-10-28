// CARGA DE ALUMNO

function cargaNotas(){

    let alumno = prompt("Ingrese el nombre del alumno a cargar.");
    let n = parseInt(prompt("Ingrese la cantidad de notas a cargar."));
    // VALIDACION DE POSITIVO
    while(n < 1){
        alert("Numero invalido.")
        n = parseInt(prompt("Ingrese la cantidad de notas a cargar."));
    }
    let suma = 0;
    for (let index = 0; index < n; index++) {
        let nota = parseInt(prompt(`Ingrese la nota Nº${index+1}`))
        // VALIDACION DE NOTA 
        while(nota < 0 || nota > 10 ){
            alert("Ingreso una nota invalida!")
            nota = parseInt(prompt(`Ingrese la nota Nº${index+1}`))
        }  
        suma += nota;
    }
    // PROMEDIO 
    let promedio = suma / n;
    promedio = promedio.toFixed(2);
    let mensaje = condicion(promedio);
    alert(`El alumno ${alumno} tiene un promedio de ${promedio} \n\nPor lo cual esta en condicion de ${mensaje}`);
    
}
// CONDICION DE SEGUN NOTA
function condicion(promedio){
    let mensaje = "";
    if (promedio < 6){
         mensaje = "DESAPROBADO.";      
    }
    else if(promedio < 7){
         mensaje = "REGULAR.";
    }
    else{
         mensaje = "PROMOCIONADO."
    }
    return mensaje;

}



    
