// Generated from MeuLexer.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import MeuLexerListener from './MeuLexerListener.js';
const serializedATN = [4,1,8,35,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
1,0,1,1,1,1,1,1,5,1,15,8,1,10,1,12,1,18,9,1,1,2,1,2,1,2,5,2,23,8,2,10,2,
12,2,26,9,2,1,3,1,3,1,3,1,3,1,3,3,3,33,8,3,1,3,0,0,4,0,2,4,6,0,2,1,0,2,3,
1,0,4,5,33,0,8,1,0,0,0,2,11,1,0,0,0,4,19,1,0,0,0,6,32,1,0,0,0,8,9,3,2,1,
0,9,10,5,0,0,1,10,1,1,0,0,0,11,16,3,4,2,0,12,13,7,0,0,0,13,15,3,4,2,0,14,
12,1,0,0,0,15,18,1,0,0,0,16,14,1,0,0,0,16,17,1,0,0,0,17,3,1,0,0,0,18,16,
1,0,0,0,19,24,3,6,3,0,20,21,7,1,0,0,21,23,3,6,3,0,22,20,1,0,0,0,23,26,1,
0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,5,1,0,0,0,26,24,1,0,0,0,27,33,5,1,0,
0,28,29,5,6,0,0,29,30,3,2,1,0,30,31,5,7,0,0,31,33,1,0,0,0,32,27,1,0,0,0,
32,28,1,0,0,0,33,7,1,0,0,0,3,16,24,32];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MeuLexerParser extends antlr4.Parser {

    static grammarFileName = "MeuLexer.g4";
    static literalNames = [ null, null, "'+'", "'-'", "'*'", "'/'", "'('", 
                            "')'" ];
    static symbolicNames = [ null, "INTEGER", "PLUS", "MINUS", "TIMES", 
                             "DIV", "LPAREN", "RPAREN", "WS" ];
    static ruleNames = [ "start", "expr", "term", "factor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MeuLexerParser.ruleNames;
        this.literalNames = MeuLexerParser.literalNames;
        this.symbolicNames = MeuLexerParser.symbolicNames;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MeuLexerParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.expr();
	        this.state = 9;
	        this.match(MeuLexerParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MeuLexerParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this.term();
	        this.state = 16;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2 || _la===3) {
	            this.state = 12;
	            _la = this._input.LA(1);
	            if(!(_la===2 || _la===3)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 13;
	            this.term();
	            this.state = 18;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MeuLexerParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.factor();
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===5) {
	            this.state = 20;
	            _la = this._input.LA(1);
	            if(!(_la===4 || _la===5)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 21;
	            this.factor();
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MeuLexerParser.RULE_factor);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.match(MeuLexerParser.INTEGER);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.match(MeuLexerParser.LPAREN);
	            this.state = 29;
	            this.expr();
	            this.state = 30;
	            this.match(MeuLexerParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MeuLexerParser.EOF = antlr4.Token.EOF;
MeuLexerParser.INTEGER = 1;
MeuLexerParser.PLUS = 2;
MeuLexerParser.MINUS = 3;
MeuLexerParser.TIMES = 4;
MeuLexerParser.DIV = 5;
MeuLexerParser.LPAREN = 6;
MeuLexerParser.RPAREN = 7;
MeuLexerParser.WS = 8;

MeuLexerParser.RULE_start = 0;
MeuLexerParser.RULE_expr = 1;
MeuLexerParser.RULE_term = 2;
MeuLexerParser.RULE_factor = 3;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MeuLexerParser.RULE_start;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EOF() {
	    return this.getToken(MeuLexerParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MeuLexerListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuLexerListener ) {
	        listener.exitStart(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MeuLexerParser.RULE_expr;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MeuLexerParser.PLUS);
	    } else {
	        return this.getToken(MeuLexerParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MeuLexerParser.MINUS);
	    } else {
	        return this.getToken(MeuLexerParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MeuLexerListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuLexerListener ) {
	        listener.exitExpr(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MeuLexerParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	TIMES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MeuLexerParser.TIMES);
	    } else {
	        return this.getToken(MeuLexerParser.TIMES, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MeuLexerParser.DIV);
	    } else {
	        return this.getToken(MeuLexerParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MeuLexerListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuLexerListener ) {
	        listener.exitTerm(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MeuLexerParser.RULE_factor;
    }

	INTEGER() {
	    return this.getToken(MeuLexerParser.INTEGER, 0);
	};

	LPAREN() {
	    return this.getToken(MeuLexerParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(MeuLexerParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MeuLexerListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuLexerListener ) {
	        listener.exitFactor(this);
		}
	}


}




MeuLexerParser.StartContext = StartContext; 
MeuLexerParser.ExprContext = ExprContext; 
MeuLexerParser.TermContext = TermContext; 
MeuLexerParser.FactorContext = FactorContext; 
