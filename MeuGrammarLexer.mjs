// Generated from MeuGrammar.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,76,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,
0,27,8,0,11,0,12,0,28,1,1,4,1,32,8,1,11,1,12,1,33,1,2,4,2,37,8,2,11,2,12,
2,38,1,2,1,2,4,2,43,8,2,11,2,12,2,44,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,4,11,71,8,
11,11,11,12,11,72,1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,
9,19,10,21,11,23,12,1,0,3,2,0,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,
80,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
1,0,0,0,1,26,1,0,0,0,3,31,1,0,0,0,5,36,1,0,0,0,7,46,1,0,0,0,9,55,1,0,0,0,
11,57,1,0,0,0,13,59,1,0,0,0,15,61,1,0,0,0,17,63,1,0,0,0,19,65,1,0,0,0,21,
67,1,0,0,0,23,70,1,0,0,0,25,27,7,0,0,0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,
1,0,0,0,28,29,1,0,0,0,29,2,1,0,0,0,30,32,7,1,0,0,31,30,1,0,0,0,32,33,1,0,
0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,4,1,0,0,0,35,37,7,1,0,0,36,35,1,0,0,0,
37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,42,5,46,0,0,41,
43,7,1,0,0,42,41,1,0,0,0,43,44,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,6,
1,0,0,0,46,47,5,118,0,0,47,48,5,97,0,0,48,49,5,114,0,0,49,50,5,105,0,0,50,
51,5,97,0,0,51,52,5,118,0,0,52,53,5,101,0,0,53,54,5,108,0,0,54,8,1,0,0,0,
55,56,5,43,0,0,56,10,1,0,0,0,57,58,5,45,0,0,58,12,1,0,0,0,59,60,5,42,0,0,
60,14,1,0,0,0,61,62,5,47,0,0,62,16,1,0,0,0,63,64,5,40,0,0,64,18,1,0,0,0,
65,66,5,41,0,0,66,20,1,0,0,0,67,68,5,61,0,0,68,22,1,0,0,0,69,71,7,2,0,0,
70,69,1,0,0,0,71,72,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,74,1,0,0,0,74,
75,6,11,0,0,75,24,1,0,0,0,6,0,28,33,38,44,72,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MeuGrammarLexer extends antlr4.Lexer {

    static grammarFileName = "MeuGrammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, "'variavel'", "'+'", "'-'", 
                         "'*'", "'/'", "'('", "')'", "'='" ];
	static symbolicNames = [ null, "ID", "INTEGER", "FLOAT", "VAR", "PLUS", 
                          "MINUS", "MUL", "DIV", "LPAREN", "RPAREN", "EQUAL", 
                          "WS" ];
	static ruleNames = [ "ID", "INTEGER", "FLOAT", "VAR", "PLUS", "MINUS", 
                      "MUL", "DIV", "LPAREN", "RPAREN", "EQUAL", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MeuGrammarLexer.EOF = antlr4.Token.EOF;
MeuGrammarLexer.ID = 1;
MeuGrammarLexer.INTEGER = 2;
MeuGrammarLexer.FLOAT = 3;
MeuGrammarLexer.VAR = 4;
MeuGrammarLexer.PLUS = 5;
MeuGrammarLexer.MINUS = 6;
MeuGrammarLexer.MUL = 7;
MeuGrammarLexer.DIV = 8;
MeuGrammarLexer.LPAREN = 9;
MeuGrammarLexer.RPAREN = 10;
MeuGrammarLexer.EQUAL = 11;
MeuGrammarLexer.WS = 12;



