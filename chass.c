#include <stdio.h>
#include <stdlib.h>
typedef struct peca{
    int vazio;
    int b;
    int tipo;

}peca;
typedef struct jogo{
    peca tabuleiro[8][8];
    int pecab;
    int pecap;
}jogo;
jogo start(){
    jogo init;
    init.pecab=init.pecap=16
    for(int i=0; i < 8; i++){
        if(i == 0 || i == 1 || i == 6 || i == 7 ){
            for( int j = 0 ; j < 8 ; j++ ){
                init.tabuleiro[i][j]->vazio=0;
                if(i < 2){
                    init.tabuleiro[i][j]->b = 1;
                }else{
                    init.tabuleiro[i][j]->b = 0;
                }
            }
        }
        
    }
}
void main(){
   jogo init = start();
}