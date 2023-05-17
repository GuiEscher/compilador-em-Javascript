// Generated from MeuGrammar.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,59,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,23,8,0,11,0,12,0,24,
1,1,4,1,28,8,1,11,1,12,1,29,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,
1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,4,9,54,8,9,11,9,12,9,55,1,9,
1,9,0,0,10,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,1,0,3,2,0,65,90,
97,122,1,0,48,57,3,0,9,10,13,13,32,32,61,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,
0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,
1,0,0,0,0,19,1,0,0,0,1,22,1,0,0,0,3,27,1,0,0,0,5,31,1,0,0,0,7,40,1,0,0,0,
9,42,1,0,0,0,11,44,1,0,0,0,13,46,1,0,0,0,15,48,1,0,0,0,17,50,1,0,0,0,19,
53,1,0,0,0,21,23,7,0,0,0,22,21,1,0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,25,
1,0,0,0,25,2,1,0,0,0,26,28,7,1,0,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,
0,0,29,30,1,0,0,0,30,4,1,0,0,0,31,32,5,118,0,0,32,33,5,97,0,0,33,34,5,114,
0,0,34,35,5,105,0,0,35,36,5,97,0,0,36,37,5,118,0,0,37,38,5,101,0,0,38,39,
5,108,0,0,39,6,1,0,0,0,40,41,5,43,0,0,41,8,1,0,0,0,42,43,5,45,0,0,43,10,
1,0,0,0,44,45,5,42,0,0,45,12,1,0,0,0,46,47,5,47,0,0,47,14,1,0,0,0,48,49,
5,40,0,0,49,16,1,0,0,0,50,51,5,41,0,0,51,18,1,0,0,0,52,54,7,2,0,0,53,52,
1,0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,6,
9,0,0,58,20,1,0,0,0,4,0,24,29,55,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MeuGrammarLexer extends antlr4.Lexer {

    static grammarFileName = "MeuGrammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, "'variavel'", "'+'", "'-'", "'*'", 
                         "'/'", "'('", "')'" ];
	static symbolicNames = [ null, "ID", "INTEGER", "VAR", "PLUS", "MINUS", 
                          "MUL", "DIV", "LPAREN", "RPAREN", "WS" ];
	static ruleNames = [ "ID", "INTEGER", "VAR", "PLUS", "MINUS", "MUL", "DIV", 
                      "LPAREN", "RPAREN", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MeuGrammarLexer.EOF = antlr4.Token.EOF;
MeuGrammarLexer.ID = 1;
MeuGrammarLexer.INTEGER = 2;
MeuGrammarLexer.VAR = 3;
MeuGrammarLexer.PLUS = 4;
MeuGrammarLexer.MINUS = 5;
MeuGrammarLexer.MUL = 6;
MeuGrammarLexer.DIV = 7;
MeuGrammarLexer.LPAREN = 8;
MeuGrammarLexer.RPAREN = 9;
MeuGrammarLexer.WS = 10;



