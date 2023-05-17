grammar MeuGrammar;

start: expr EOF;

expr: term ((PLUS | MINUS) term)*;

term: factor ((MUL | DIV) factor)*;

factor: INTEGER | LPAREN expr RPAREN | decl;

decl: VAR ID;

ID: [a-zA-Z]+;

INTEGER: [0-9]+;

VAR: 'variavel';

PLUS: '+';

MINUS: '-';

MUL: '*';

DIV: '/';

LPAREN: '(';

RPAREN: ')';

WS: [ \t\r\n]+ -> skip;

// Regras de visitantes
// ---------------------

// Regra de visitante para a regra 'start'
visitStart: expr;

// Regra de visitante para a regra 'expr'
visitExpr: term (op=(PLUS | MINUS) right=term)*;

// Regra de visitante para a regra 'term'
visitTerm: factor (op=(MUL | DIV) right=factor)*;

// Regra de visitante para a regra 'factor'
visitFactor: INTEGER | LPAREN expr RPAREN | decl;
