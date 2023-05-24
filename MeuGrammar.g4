grammar MeuGrammar;

start: expr EOF;

expr: term (op=(PLUS | MINUS) term)*;

term: factor ((MUL | DIV) factor)*;

factor: FLOAT | INTEGER | LPAREN expr RPAREN | decl;

decl: VAR ID EQUAL expr;

ID: [a-zA-Z]+;

INTEGER : [0-9]+;

FLOAT: [0-9]+ '.' [0-9]+;

VAR: 'variavel';

PLUS: '+';

MINUS: '-';

MUL: '*';

DIV: '/';

LPAREN: '(';

RPAREN: ')';

EQUAL: '=';

WS: [ \t\r\n]+ -> skip;
