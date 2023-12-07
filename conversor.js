
function bin2dec(){
    //requisição
    var binario=document.getElementById("bin").value;
    var decimal=0;
    var verificado=0;
    var posicao=0;
    //iteração para garantir que o numero é binario
    for(let i=0;i<binario.length;i++){
        let parte = parseInt(binario[i]);
        if(parte != 1 && parte != 0){
            alert("Digito diferente de 1 e 0 digitado: "+ parte);
            return;
        }else{
            verificado+=1;
        }
    }
    //conversão de bin para dec
    if (verificado == binario.length){
        for(;verificado-1>=0;verificado--){
            if(binario[verificado-1]==1){
                decimal+=(2**posicao);
            }
            posicao++;
        }
    }
    //atribuindo o valor do decimal no documento
    document.getElementById("dec").value=decimal
    
    
}

function dec2bin(){

}
function start(){
    document.getElementById("frombin");
}
