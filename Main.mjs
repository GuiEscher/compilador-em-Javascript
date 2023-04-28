import antlr4 from 'antlr4';

import MeuLexer from './MeuLexerLexer.mjs';


// criar um objeto de entrada para a análise léxica
const input = "1 + 2 * 3 / 34";

// criar um analisador léxico usando o objeto de entrada
const chars = new antlr4.InputStream(input);
const lexer = new MeuLexer(chars);

// iterar sobre os tokens gerados pelo analisador léxico
let token = lexer.nextToken();
while (token.type !== antlr4.Token.EOF) {
  console.log(`Tipo do token: ${token.type}, Texto: ${token.text}`);
  token = lexer.nextToken();
}
