grammar MeuLexer;

start: expr EOF;

expr: term ((PLUS | MINUS) term)*;

term: factor ((TIMES | DIV) factor)*;

factor: INTEGER | LPAREN expr RPAREN;

INTEGER: [0-9]+;

PLUS: '+';

MINUS: '-';

TIMES: '*';

DIV: '/';

LPAREN: '(';

RPAREN: ')';

WS: [ \t\r\n]+ -> skip;
