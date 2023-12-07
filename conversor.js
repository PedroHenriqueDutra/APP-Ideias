
function main()     {
    var binario=document.getElementById("bin").textContent;

    for(let i=0;i<=binario.length;i++){
        if(binario[i]!= 1 || binario[i]!= 0){
            alert("Digito diferente de 1 e 0 digitado");
        }
    }
    
    convert(binario);
}