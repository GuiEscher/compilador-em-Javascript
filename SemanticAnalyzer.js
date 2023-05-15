class Symbol{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}
// quando uma instancia de Symbol for criada, será add na class SymbolTable no array/lista 
class SymbolTable{
    constructor(){
        this.symbols=[]; //Lista para armazenamento de simbolos
    }
    
    Insercao(symbol){
        this.symbols.push(symbol);
    }

    Verificacao(name){
        for(let i = this.symbols.length - 1; i >=0; i--){
            if(this.symbols[i].name == name){
                return this.symbol[i].type;
            }
        }
        return null;
    }
    
    Remocao(name){
        for(let i = this.symbols.length - 1; i >=0; i--){
            if(this.symbols[i].name == name){
                this.symbols[i].splice(i, 1); //Splice usado como removedor 
                break;
            }
        }
    }
}

class SemanticAnalyzer {
    constructor(){
        this.symbolTable = new SymbolTable();
    }

    Analisador(node){ //cada node seria gerado no parser, na arvore sintática
        
    }
}

//n será necessario tabl simbolos 
// estudar visitante (serve para qualquer operação que percorra a arvore), para visitas em nós da arvore sintatica
//passar um comando personalizado para gerar coisas com o antlr ai usar um npm run