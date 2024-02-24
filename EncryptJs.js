let valor_adqui;
let new_parr = document.querySelector("#User_input");
function buscar(elemento){
    if(event.keyCode == 13) {
        valor_adqui = elemento.value;
        new_parr.innerHTML = ">User@WebPage: /Alura/Oracle$ " + valor_adqui;     
    }
}