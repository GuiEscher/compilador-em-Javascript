import antlr4 from 'antlr4';
import MeuParser from './MeuLexerParser.mjs';
import MeuLexer from './MeuLexerLexer.mjs';

// criar um objeto de entrada para a análise sintática
const input = "34*5+4-3+24*4";

// criar um analisador léxico usando o objeto de entrada
const chars = new antlr4.InputStream(input);
const lexer = new MeuLexer(chars);

// imprimir os tokens obtidos na análise léxica
let token = lexer.nextToken();
while (token.type !== antlr4.Token.EOF) {
  console.log(`<Tipo do token, Texto>: < ${token.type}, ${token.text} >`);
  token = lexer.nextToken();
}

// reiniciar o fluxo de tokens
lexer.reset();
const tokens = new antlr4.CommonTokenStream(lexer); // commonTokenStream implementa uma lista de tokens que podem ser consumidos por um analisador sintático.

// criar um analisador sintático usando os tokens gerados pelo analisador léxico
const parser = new MeuParser(tokens);

// analisar a entrada e obter a árvore de análise sintática
const tree = parser.start();

// imprimir a árvore de análise sintática
console.log(tree.toStringTree(parser.ruleNames));
