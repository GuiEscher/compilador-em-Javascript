import antlr4 from 'antlr4'
import SemanticVisitor from './SemanticVisitor.mjs';

export class SymbolTable extends SemanticVisitor{
    constructor(){
        super(); // Chamada ao construtor da classe pai SemanticVisitor
        this.variaveis = []; //lista para armazenar as vars
    };

    insertVar(name, tipo){ //insere a variavel
        var tupla = [name,tipo];
        this.variaveis.push(tupla);
    }
    RemoveVar(name){ //remove a variavel
        if(this.VerificaExistencia(name) === true){ //Se existe na lista
            this.variaveis = this.variaveis.filter(function(variavel) {
                return variavel[0] !== name; // Mantém as tuplas cujo nome seja diferente do argumento "name"
            });
              
            console.log("Variável removida com sucesso");    
        }else{
            console.log("Elemento não está na lista");
            return;
        }
    }

    BuscaVar(name){ //busca a variavel e a retorna
        let Encontrou = false; //se encontrar passa pra true
        for(let i = 0; i < this.variaveis.length; i++){
            if (this.variaveis[i][0] === name){//se estiver na lista (busca pelo nome) tupla[i][0] - [i] nro tupla na lista e [0] primeiro termo da tupla
                Encontrou = true;
                console.log('variavel existe na lista');
                return this.variaveis[i];
            }
        }
        return;
    }
    VerificaExistencia(name){
        let Encontrou = false; //se encontrar passa pra true
        for(let i = 0; i < this.variaveis.length; i++){
            if (this.variaveis[i][0] === name){//se estiver na lista (busca pelo nome) tupla[i][0] - [i] nro tupla na lista e [0] primeiro termo da tupla
                Encontrou = true;
                console.log('variavel existe na lista');
                
            }
        }
        return Encontrou;
    }
    exibirLista(lista){
        console.log("Lista de variaveis (" + lista + ")");
    }
}
