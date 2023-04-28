// Generated from MeuLexer.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,41,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,19,8,0,11,0,12,0,20,1,1,1,1,1,2,1,2,
1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,4,7,36,8,7,11,7,12,7,37,1,7,1,7,0,0,
8,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,2,1,0,48,57,3,0,9,10,13,13,32,32,
42,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,18,1,0,0,0,3,22,1,0,0,0,5,24,1,0,0,0,7,26,
1,0,0,0,9,28,1,0,0,0,11,30,1,0,0,0,13,32,1,0,0,0,15,35,1,0,0,0,17,19,7,0,
0,0,18,17,1,0,0,0,19,20,1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,2,1,0,0,0,
22,23,5,43,0,0,23,4,1,0,0,0,24,25,5,45,0,0,25,6,1,0,0,0,26,27,5,42,0,0,27,
8,1,0,0,0,28,29,5,47,0,0,29,10,1,0,0,0,30,31,5,40,0,0,31,12,1,0,0,0,32,33,
5,41,0,0,33,14,1,0,0,0,34,36,7,1,0,0,35,34,1,0,0,0,36,37,1,0,0,0,37,35,1,
0,0,0,37,38,1,0,0,0,38,39,1,0,0,0,39,40,6,7,0,0,40,16,1,0,0,0,3,0,20,37,
1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MeuLexerLexer extends antlr4.Lexer {

    static grammarFileName = "MeuLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, "'+'", "'-'", "'*'", "'/'", "'('", 
                         "')'" ];
	static symbolicNames = [ null, "INTEGER", "PLUS", "MINUS", "TIMES", "DIV", 
                          "LPAREN", "RPAREN", "WS" ];
	static ruleNames = [ "INTEGER", "PLUS", "MINUS", "TIMES", "DIV", "LPAREN", 
                      "RPAREN", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MeuLexerLexer.EOF = antlr4.Token.EOF;
MeuLexerLexer.INTEGER = 1;
MeuLexerLexer.PLUS = 2;
MeuLexerLexer.MINUS = 3;
MeuLexerLexer.TIMES = 4;
MeuLexerLexer.DIV = 5;
MeuLexerLexer.LPAREN = 6;
MeuLexerLexer.RPAREN = 7;
MeuLexerLexer.WS = 8;



