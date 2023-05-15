import antlr4 from 'antlr4';
import MeuParser from './MeuLexerParser.mjs';
import MeuLexer from './MeuLexerLexer.mjs';
import MeuSemanticoVisitor from './MeuSemanticoVisitor.mjs';

class MeuSemantico {
    visitExpr(ctx) {
      // Deixar vazio para implementação na subclasse
    }
  
    visitTerm(ctx) {
      // Deixar vazio para implementação na subclasse
    }
  
    visitFactor(ctx) {
      // Deixar vazio para implementação na subclasse
    }
  
    visitDecl(ctx) {
      // Deixar vazio para implementação na subclasse
    }
  }
  
  export default MeuSemantico;
  
