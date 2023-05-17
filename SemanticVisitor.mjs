/*import MeuSemantico from './MeuSemantico.mjs';

class MeuSemanticoVisitor extends MeuSemantico {
  // O método visitExpr é chamado quando visitamos um nó da regra "expr" na árvore de análise sintática
  visitExpr(ctx) { //contexto atual da arvore sintática
    
    //obter a lista de termos da expressão

    const listaTermos = ctx.term();

    //verificando se existe mais de um termo na expressão

    if (listaTermos.length > 1 ){
        const TipoTermo1 = this.visitTerm(listaTermos[0]); //obtem tipo termo 1

        //validando o tipo do termo 1
        if(TipoTermo1 !== 'int'){
            throw new Error("Erro na Semântica: Tipo de variavel inválido! Deve ser inteiro!")
        }
        //lógica para percorrer a lista a partir do segundo termo
        for (let i = 1; i < listaTermos.length; i++){
            const operador = listaTermos[i-1].children[1].symbol.tree //retorna o simbolo do operador
            const tipo = this.visitTerm(listaTermos[i]); //const?
            
            if (tipo !== 'int'){
                throw new Error(`Erro semântico: Termo ${i+1} não é do tipo inteiro`);
            }
            
            if (!this.isCompatible(TipoTermo1, tipo, operador)){
                throw new Error(`Erro semântico: Tipos incompatíveis na expressão ${operador}`);

            }
        }
    } else {
        this.visitTerm(listaTermos[0]); //1 termo -> visita-lo
    }

    return 'int'; //tipo da expressão
  }

  // O método visitTerm é chamado quando visitamos um nó da regra "term" na árvore de análise sintática
  visitTerm(ctx) {
 
  }

  visitFactor(ctx) {

  }

  visitDecl(ctx) {
 
  }
}

export default MeuSemanticoVisitor;*/

import MeuGrammarVisitor from './MeuGrammarVisitor.mjs';

export default class SemanticVisitor extends MeuGrammarVisitor {
  visitExpr(ctx) {
    let left = this.visit(ctx.term(0)); //valor inicial da expressão

    for (let i = 1; i < ctx.term().length; i++) { //loop do 2nd termo até o numero de termos da expressão
      const op = ctx.getChild(i * 2 - 1).getText();//getChild obtem o nó filho do op e getText o texto
      //i*2-1 - formula que sempre retorna o índice do operador na expressão ex: 3+3+3+3+3 
      //const right = i===1 ? this.visit(ctx.term(i+1)) : this.visit(ctx.term(i*2)); //valor a direita do operador atual
      const right = this.visit(ctx.term(i)) //valor a direita
      if (op === '+') {
        if (typeof left !== 'number' || typeof right !== 'number') {
          throw new Error("Erro semântico: Operando inválido na expressão, espera-se int");
        }
        left += right;
      } else if (op === '-') {
        if (typeof left !== 'number' || typeof right !== 'number') {
          throw new Error("Erro semântico: Operandos devem ser números na operação -");
        }
        left -= right;
      }
    }

    return left;
  }

  visitTerm(ctx) {
    let left = this.visit(ctx.factor(0));

    for (let i = 1; i < ctx.factor().length; i++) {
      const op = ctx.getChild(i * 2 - 1).getText();
      const right = this.visit(ctx.factor(i));

      if (op === '*') {
        if (typeof left !== 'number' || typeof right !== 'number') {
          throw new Error("Erro semântico: Operandos devem ser números na operação *");
        }
        left *= right;
      } else if (op === '/') {
        if (typeof left !== 'number' || typeof right !== 'number') {
          throw new Error("Erro semântico: Operandos devem ser números na operação /");
        }
        left /= right;
      }
    }

    return left;
  }

  visitFactor(ctx) {
    if (ctx.INTEGER()) {
      return parseInt(ctx.INTEGER().getText());//verifica se o nó é do tipo "INTEGER" retorna o valor numérico
    } else if (ctx.expr()) { //se o nó for uma expr, chama visit.expr
      return this.visit(ctx.expr());
    } else if (ctx.decl()) {//decls são invalidas
      throw new Error("Erro semântico: Uso inválido de declaração");
    }

    return null;
  }

  visitDecl(ctx) {
    const id = ctx.ID().getText(); //decls nao sao tratadas ainda
    throw new Error(`Erro semântico: Uso inválido de declaração "${id}"`);
  }
}




  
  
  
  
  
  
