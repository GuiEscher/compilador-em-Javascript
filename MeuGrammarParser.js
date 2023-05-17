// Generated from MeuGrammar.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import MeuGrammarListener from './MeuGrammarListener.js';
import MeuGrammarVisitor from './MeuGrammarVisitor.js';

const serializedATN = [4,1,10,75,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,1,1,1,1,5,1,25,8,1,10,1,
12,1,28,9,1,1,2,1,2,1,2,5,2,33,8,2,10,2,12,2,36,9,2,1,3,1,3,1,3,1,3,1,3,
1,3,3,3,44,8,3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,5,6,54,8,6,10,6,12,6,57,9,
6,1,7,1,7,1,7,5,7,62,8,7,10,7,12,7,65,9,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,73,
8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,2,1,0,4,5,1,0,6,7,73,0,18,1,0,0,0,
2,21,1,0,0,0,4,29,1,0,0,0,6,43,1,0,0,0,8,45,1,0,0,0,10,48,1,0,0,0,12,50,
1,0,0,0,14,58,1,0,0,0,16,72,1,0,0,0,18,19,3,2,1,0,19,20,5,0,0,1,20,1,1,0,
0,0,21,26,3,4,2,0,22,23,7,0,0,0,23,25,3,4,2,0,24,22,1,0,0,0,25,28,1,0,0,
0,26,24,1,0,0,0,26,27,1,0,0,0,27,3,1,0,0,0,28,26,1,0,0,0,29,34,3,6,3,0,30,
31,7,1,0,0,31,33,3,6,3,0,32,30,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,
1,0,0,0,35,5,1,0,0,0,36,34,1,0,0,0,37,44,5,2,0,0,38,39,5,8,0,0,39,40,3,2,
1,0,40,41,5,9,0,0,41,44,1,0,0,0,42,44,3,8,4,0,43,37,1,0,0,0,43,38,1,0,0,
0,43,42,1,0,0,0,44,7,1,0,0,0,45,46,5,3,0,0,46,47,5,1,0,0,47,9,1,0,0,0,48,
49,3,2,1,0,49,11,1,0,0,0,50,55,3,4,2,0,51,52,7,0,0,0,52,54,3,4,2,0,53,51,
1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,13,1,0,0,0,57,55,1,
0,0,0,58,63,3,6,3,0,59,60,7,1,0,0,60,62,3,6,3,0,61,59,1,0,0,0,62,65,1,0,
0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,15,1,0,0,0,65,63,1,0,0,0,66,73,5,2,0,
0,67,68,5,8,0,0,68,69,3,2,1,0,69,70,5,9,0,0,70,73,1,0,0,0,71,73,3,8,4,0,
72,66,1,0,0,0,72,67,1,0,0,0,72,71,1,0,0,0,73,17,1,0,0,0,6,26,34,43,55,63,
72];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MeuGrammarParser extends antlr4.Parser {

    static grammarFileName = "MeuGrammar.g4";
    static literalNames = [ null, null, null, "'variavel'", "'+'", "'-'", 
                            "'*'", "'/'", "'('", "')'" ];
    static symbolicNames = [ null, "ID", "INTEGER", "VAR", "PLUS", "MINUS", 
                             "MUL", "DIV", "LPAREN", "RPAREN", "WS" ];
    static ruleNames = [ "start", "expr", "term", "factor", "decl", "visitStart", 
                         "visitExpr", "visitTerm", "visitFactor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MeuGrammarParser.ruleNames;
        this.literalNames = MeuGrammarParser.literalNames;
        this.symbolicNames = MeuGrammarParser.symbolicNames;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MeuGrammarParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.expr();
	        this.state = 19;
	        this.match(MeuGrammarParser.EOF);
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
	    this.enterRule(localctx, 2, MeuGrammarParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.term();
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===5) {
	            this.state = 22;
	            _la = this._input.LA(1);
	            if(!(_la===4 || _la===5)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 23;
	            this.term();
	            this.state = 28;
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
	    this.enterRule(localctx, 4, MeuGrammarParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.factor();
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 30;
	            _la = this._input.LA(1);
	            if(!(_la===6 || _la===7)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 31;
	            this.factor();
	            this.state = 36;
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
	    this.enterRule(localctx, 6, MeuGrammarParser.RULE_factor);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.match(MeuGrammarParser.INTEGER);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.match(MeuGrammarParser.LPAREN);
	            this.state = 39;
	            this.expr();
	            this.state = 40;
	            this.match(MeuGrammarParser.RPAREN);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 42;
	            this.decl();
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



	decl() {
	    let localctx = new DeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MeuGrammarParser.RULE_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(MeuGrammarParser.VAR);
	        this.state = 46;
	        this.match(MeuGrammarParser.ID);
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



	visitStart() {
	    let localctx = new VisitStartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MeuGrammarParser.RULE_visitStart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.expr();
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



	visitExpr() {
	    let localctx = new VisitExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MeuGrammarParser.RULE_visitExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.term();
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===5) {
	            this.state = 51;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===4 || _la===5)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 52;
	            localctx.right = this.term();
	            this.state = 57;
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



	visitTerm() {
	    let localctx = new VisitTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MeuGrammarParser.RULE_visitTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.factor();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 59;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===6 || _la===7)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 60;
	            localctx.right = this.factor();
	            this.state = 65;
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



	visitFactor() {
	    let localctx = new VisitFactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MeuGrammarParser.RULE_visitFactor);
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.match(MeuGrammarParser.INTEGER);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.match(MeuGrammarParser.LPAREN);
	            this.state = 68;
	            this.expr();
	            this.state = 69;
	            this.match(MeuGrammarParser.RPAREN);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 71;
	            this.decl();
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

MeuGrammarParser.EOF = antlr4.Token.EOF;
MeuGrammarParser.ID = 1;
MeuGrammarParser.INTEGER = 2;
MeuGrammarParser.VAR = 3;
MeuGrammarParser.PLUS = 4;
MeuGrammarParser.MINUS = 5;
MeuGrammarParser.MUL = 6;
MeuGrammarParser.DIV = 7;
MeuGrammarParser.LPAREN = 8;
MeuGrammarParser.RPAREN = 9;
MeuGrammarParser.WS = 10;

MeuGrammarParser.RULE_start = 0;
MeuGrammarParser.RULE_expr = 1;
MeuGrammarParser.RULE_term = 2;
MeuGrammarParser.RULE_factor = 3;
MeuGrammarParser.RULE_decl = 4;
MeuGrammarParser.RULE_visitStart = 5;
MeuGrammarParser.RULE_visitExpr = 6;
MeuGrammarParser.RULE_visitTerm = 7;
MeuGrammarParser.RULE_visitFactor = 8;

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
        this.ruleIndex = MeuGrammarParser.RULE_start;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EOF() {
	    return this.getToken(MeuGrammarParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.exitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MeuGrammarVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = MeuGrammarParser.RULE_expr;
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
	        return this.getTokens(MeuGrammarParser.PLUS);
	    } else {
	        return this.getToken(MeuGrammarParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MeuGrammarParser.MINUS);
	    } else {
	        return this.getToken(MeuGrammarParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MeuGrammarVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = MeuGrammarParser.RULE_term;
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

	MUL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MeuGrammarParser.MUL);
	    } else {
	        return this.getToken(MeuGrammarParser.MUL, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MeuGrammarParser.DIV);
	    } else {
	        return this.getToken(MeuGrammarParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MeuGrammarVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = MeuGrammarParser.RULE_factor;
    }

	INTEGER() {
	    return this.getToken(MeuGrammarParser.INTEGER, 0);
	};

	LPAREN() {
	    return this.getToken(MeuGrammarParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(MeuGrammarParser.RPAREN, 0);
	};

	decl() {
	    return this.getTypedRuleContext(DeclContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MeuGrammarVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MeuGrammarParser.RULE_decl;
    }

	VAR() {
	    return this.getToken(MeuGrammarParser.VAR, 0);
	};

	ID() {
	    return this.getToken(MeuGrammarParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.enterDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.exitDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MeuGrammarVisitor ) {
	        return visitor.visitDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VisitStartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MeuGrammarParser.RULE_visitStart;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.enterVisitStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.exitVisitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MeuGrammarVisitor ) {
	        return visitor.visitVisitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VisitExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MeuGrammarParser.RULE_visitExpr;
        this.op = null;
        this.right = null;
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
	        return this.getTokens(MeuGrammarParser.PLUS);
	    } else {
	        return this.getToken(MeuGrammarParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MeuGrammarParser.MINUS);
	    } else {
	        return this.getToken(MeuGrammarParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.enterVisitExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.exitVisitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MeuGrammarVisitor ) {
	        return visitor.visitVisitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VisitTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MeuGrammarParser.RULE_visitTerm;
        this.op = null;
        this.right = null;
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

	MUL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MeuGrammarParser.MUL);
	    } else {
	        return this.getToken(MeuGrammarParser.MUL, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MeuGrammarParser.DIV);
	    } else {
	        return this.getToken(MeuGrammarParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.enterVisitTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.exitVisitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MeuGrammarVisitor ) {
	        return visitor.visitVisitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VisitFactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MeuGrammarParser.RULE_visitFactor;
    }

	INTEGER() {
	    return this.getToken(MeuGrammarParser.INTEGER, 0);
	};

	LPAREN() {
	    return this.getToken(MeuGrammarParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(MeuGrammarParser.RPAREN, 0);
	};

	decl() {
	    return this.getTypedRuleContext(DeclContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.enterVisitFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MeuGrammarListener ) {
	        listener.exitVisitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MeuGrammarVisitor ) {
	        return visitor.visitVisitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MeuGrammarParser.StartContext = StartContext; 
MeuGrammarParser.ExprContext = ExprContext; 
MeuGrammarParser.TermContext = TermContext; 
MeuGrammarParser.FactorContext = FactorContext; 
MeuGrammarParser.DeclContext = DeclContext; 
MeuGrammarParser.VisitStartContext = VisitStartContext; 
MeuGrammarParser.VisitExprContext = VisitExprContext; 
MeuGrammarParser.VisitTermContext = VisitTermContext; 
MeuGrammarParser.VisitFactorContext = VisitFactorContext; 
