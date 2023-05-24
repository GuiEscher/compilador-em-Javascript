import MeuGrammarVisitor from './MeuGrammarVisitor.mjs';

export default class SemanticVisitor extends MeuGrammarVisitor {
  visitExpr(ctx) {
    let left = this.visit(ctx.term(0)); //valor inicial da expressão

    for (let i = 1; i < ctx.term().length; i++) { //loop do 2nd termo até o numero de termos da expressão
      const op = ctx.getChild(i * 2 - 1).getText();//getChild obtem o nó filho do op e getText o texto //const op = ctx.op(i-1).getText();
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
      return parseInt(ctx.INTEGER().getText());
    } else if (ctx.FLOAT()) {
      return parseFloat(ctx.FLOAT().getText());
    } else if (ctx.expr()) {
      return this.visit(ctx.expr());
    } else if (ctx.decl()) {
      throw new Error("Erro semântico: Uso inválido de declaração");
    }
  
    return null;
  }
  

  visitDecl(ctx) {
    const id = ctx.ID().getText(); //decls nao sao tratadas ainda
    throw new Error(`Erro semântico: Uso inválido de declaração "${id}"`);
  }

  VerificaTipo(number){
    //true = float
    //false = int
    let FloatConfirma = false;
    if(typeof number === 'number' && !(Number.isInteger(number))) {
      FloatConfirma = true;
    }
    return FloatConfirma;
  }

  ObtemTipos(ctx) {
  const tipos = []; // vetor que será retornado
  const expr = ctx.expr(); // obter o nó da expressão

  // Chamar o visitante para obter o tipo da expressão (verificar se é uma string ou uma expressão com int/float)
  const exprTipo = this.visitExpr(expr);

  // Se a expressão possui apenas um termo, adiciona apenas um tipo "number"
  if (expr.term().length === 1) {
    tipos.push(this.VerificaTipo(exprTipo) ? 'float' : 'int');
  } else {
    // Obter o primeiro termo da expressão
    const primeiroTermo = expr.term(0);

    // Chamar o visitante para obter o tipo do primeiro termo
    const primeiroTermoTipo = this.visit(primeiroTermo);

    // Verificar se o tipo do primeiro termo é um número
    if (typeof primeiroTermoTipo !== 'number') {
      throw new Error("Erro semântico: O termo não é um número válido");
    }
    tipos.push(this.VerificaTipo(primeiroTermoTipo) ? 'float' : 'int');

    // Percorrer os termos restantes da expressão
    for (let i = 1; i < expr.term().length; i++) {
      const termo = expr.term(i);

      // Chamar o visitante para obter o tipo do termo
      const termoTipo = this.visit(termo);

      // Verificar se o tipo do termo é um número
      if (typeof termoTipo !== 'number') {
        throw new Error("Erro semântico: O termo não é um número válido");
      }
      tipos.push(this.VerificaTipo(termoTipo) ? 'float' : 'int');
    }
  }
  return tipos;
 }
}




  
  
  
  
  
  
