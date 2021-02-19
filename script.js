var persona = [];
function nuevapersona() {
var persona = {}
persona.nombre = prompt("Nombre :")
persona.apellido = prompt("Apellido :")
persona.cedula = prompt("cedula :")
persona.rne = prompt("rne: ")
return persona;
}


while (true){
persona.push(nuevapersona())
if (prompt("deseas registrar otra persona") === 'n'){
    break
}


}

persona

console.table(
   
    { "Nombre ":  persona.nombre,
    "Apellido ": persona.apellido,
    "Cedula" : persona.cedula,
    "RNE": persona.rne
    }

);



console.log(persona);
