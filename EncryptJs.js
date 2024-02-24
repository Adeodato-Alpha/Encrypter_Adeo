let valor_adqui;
let new_parr = document.querySelector("#User_input");
let default_oracle = ">User@WebPage: /Alura/Oracle$ "; 
function buscar(elemento){
    if(event.keyCode == 13) {
        valor_adqui = elemento.value;
        if(valor_adqui == 'start'){
            new_parr.innerHTML = default_oracle + 'Empieza la encriptación';
            
        }
        else{
            new_parr.innerHTML = default_oracle+ 'try again ';
        }
        document.getElementById("myText").value ='';    
    }
}