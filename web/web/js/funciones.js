//Función para calcular el peso ideal
function calcularPesoIdeal(){
    //Obtenemos la edad desde el formulario
    var edad = document.getElementById("txt_edad").value;
    
    //Calculamos el peso ideal
    var pesoIdeal = edad * 2 + 8 ;

    //Mostramos resultado
    document.getElementById("cnt_peso_ideal").innerHTML = "Peso ideal es "+pesoIdeal+" kilos.";

    //Invocamos método para mostrar el estado
    calcularEstadoPeso(pesoIdeal);
}
function calcularEstadoPeso(pesoIdeal){
    //Obtenemos el peso actual
    var pesoActual = document.getElementById("txt_peso_actual").value;
    //Comparamos pesoActual y pesoIdeal para determinar estado
    var estado ="";
    var estadoImagen = "";
    if(pesoActual == pesoIdeal){
        estado = "Peso ideal";
        estadoImagen ="pesoideal_128x128.png";
    }else{
        if(pesoActual > pesoIdeal){
            estado ="Sobrepeso";
            estadoImagen ="sobrepeso_128x128.png";
        }else{
            estado ="Bajo peso";
            estadoImagen = "bajopeso_128x128.png";
        }
    }
    document.getElementById("cnt_estado_peso").innerHTML = "Estado de peso es " + estado + ".";
    document.getElementById("cnt_estado_imagen").innerHTML = "<img src=img/"+estadoImagen+">";
    

}