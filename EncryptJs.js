let valor_adqui;
const arreglo = ["#inputOne","#inputTwo","#inputThree"];
//let new_parr = document.querySelector(arreglo[0]);
let default_oracle = ">User@WebPage: /Alura/Oracle$ "; 
let ind =0; 
//funcion display
function disp(n){
    
    if(n!=arreglo.length){
        document.querySelector(arreglo[n]).innerHTML = default_oracle;
    }
    
    else if(n === arreglo.length){
        ind =0; 
        for(let j =0; j < arreglo.length; j++){
            document.querySelector(arreglo[j]).innerHTML = ' ';
        }
    }
    return 
}
//Función del enter 
function buscar(elemento){
    if(event.keyCode == 13) {
        valor_adqui = elemento.value;
        //inicio de los comandos 
        if(valor_adqui == 'start' || 'Start'){
            document.querySelector(arreglo[0]).innerHTML = default_oracle +'started';
            ind++;
            disp(ind);
        }
        else{
            new_parr.innerHTML = default_oracle +'Command not recognized';
        }
        
        document.getElementById("myText").value ='';    
    }
}