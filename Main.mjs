import antlr4 from 'antlr4';
import MeuGrammarLexer from './MeuGrammarLexer.mjs';
import MeuGrammarParser from './MeuGrammarParser.mjs';
import SemanticVisitor from './SemanticVisitor.mjs';

// Criar um objeto de entrada para a análise sintática
const input = "s+3";

// Criar um analisador léxico usando o objeto de entrada
const chars = new antlr4.InputStream(input);
const lexer = new MeuGrammarLexer(chars);

// Imprimir os tokens obtidos na análise léxica
let token = lexer.nextToken();
while (token.type !== antlr4.Token.EOF) {
  console.log(`<Tipo do token, Texto>: < ${token.type}, ${token.text} >`);
  token = lexer.nextToken();
}

// Reiniciar o fluxo de tokens
lexer.reset();
const tokens = new antlr4.CommonTokenStream(lexer);

// Criar um analisador sintático usando os tokens gerados pelo analisador léxico
const parser = new MeuGrammarParser(tokens);

// Analisar a entrada e obter a árvore de análise sintática
const tree = parser.start();
console.log('\nÁrvore sintática:', tree.toStringTree(parser.ruleNames));

// Criar o visitante semântico
const semanticVisitor = new SemanticVisitor();

try {
  // Realizar a análise semântica
  const result = semanticVisitor.visit(tree);

  console.log('\nResultado:', result, '\n');
} catch (error) {
  console.log('\n', error.message, '\n');
}
