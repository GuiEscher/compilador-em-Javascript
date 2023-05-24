// Generated from MeuGrammar.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import MeuGrammarListener from './MeuGrammarListener.mjs';
import MeuGrammarVisitor from './MeuGrammarVisitor.mjs';

const serializedATN = [4,1,12,44,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,1,1,1,1,1,1,5,1,17,8,1,10,1,12,1,20,9,1,1,2,1,2,1,2,5,2,25,8,
2,10,2,12,2,28,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,37,8,3,1,4,1,4,1,4,1,
4,1,4,1,4,0,0,5,0,2,4,6,8,0,2,1,0,5,6,1,0,7,8,43,0,10,1,0,0,0,2,13,1,0,0,
0,4,21,1,0,0,0,6,36,1,0,0,0,8,38,1,0,0,0,10,11,3,2,1,0,11,12,5,0,0,1,12,
1,1,0,0,0,13,18,3,4,2,0,14,15,7,0,0,0,15,17,3,4,2,0,16,14,1,0,0,0,17,20,
1,0,0,0,18,16,1,0,0,0,18,19,1,0,0,0,19,3,1,0,0,0,20,18,1,0,0,0,21,26,3,6,
3,0,22,23,7,1,0,0,23,25,3,6,3,0,24,22,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,
0,26,27,1,0,0,0,27,5,1,0,0,0,28,26,1,0,0,0,29,37,5,3,0,0,30,37,5,2,0,0,31,
32,5,9,0,0,32,33,3,2,1,0,33,34,5,10,0,0,34,37,1,0,0,0,35,37,3,8,4,0,36,29,
1,0,0,0,36,30,1,0,0,0,36,31,1,0,0,0,36,35,1,0,0,0,37,7,1,0,0,0,38,39,5,4,
0,0,39,40,5,1,0,0,40,41,5,11,0,0,41,42,3,2,1,0,42,9,1,0,0,0,3,18,26,36];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MeuGrammarParser extends antlr4.Parser {

    static grammarFileName = "MeuGrammar.g4";
    static literalNames = [ null, null, null, null, "'variavel'", "'+'", 
                            "'-'", "'*'", "'/'", "'('", "')'", "'='" ];
    static symbolicNames = [ null, "ID", "INTEGER", "FLOAT", "VAR", "PLUS", 
                             "MINUS", "MUL", "DIV", "LPAREN", "RPAREN", 
                             "EQUAL", "WS" ];
    static ruleNames = [ "start", "expr", "term", "factor", "decl" ];

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
	        this.state = 10;
	        this.expr();
	        this.state = 11;
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
	        this.state = 13;
	        this.term();
	        this.state = 18;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 14;
	                localctx.op = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===5 || _la===6)) {
	                    localctx.op = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 15;
	                this.term(); 
	            }
	            this.state = 20;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
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
	        this.state = 21;
	        this.factor();
	        this.state = 26;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 22;
	                _la = this._input.LA(1);
	                if(!(_la===7 || _la===8)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 23;
	                this.factor(); 
	            }
	            this.state = 28;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.match(MeuGrammarParser.FLOAT);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.match(MeuGrammarParser.INTEGER);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 31;
	            this.match(MeuGrammarParser.LPAREN);
	            this.state = 32;
	            this.expr();
	            this.state = 33;
	            this.match(MeuGrammarParser.RPAREN);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 35;
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
	        this.state = 38;
	        this.match(MeuGrammarParser.VAR);
	        this.state = 39;
	        this.match(MeuGrammarParser.ID);
	        this.state = 40;
	        this.match(MeuGrammarParser.EQUAL);
	        this.state = 41;
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


}

MeuGrammarParser.EOF = antlr4.Token.EOF;
MeuGrammarParser.ID = 1;
MeuGrammarParser.INTEGER = 2;
MeuGrammarParser.FLOAT = 3;
MeuGrammarParser.VAR = 4;
MeuGrammarParser.PLUS = 5;
MeuGrammarParser.MINUS = 6;
MeuGrammarParser.MUL = 7;
MeuGrammarParser.DIV = 8;
MeuGrammarParser.LPAREN = 9;
MeuGrammarParser.RPAREN = 10;
MeuGrammarParser.EQUAL = 11;
MeuGrammarParser.WS = 12;

MeuGrammarParser.RULE_start = 0;
MeuGrammarParser.RULE_expr = 1;
MeuGrammarParser.RULE_term = 2;
MeuGrammarParser.RULE_factor = 3;
MeuGrammarParser.RULE_decl = 4;

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
        this.op = null;
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

	FLOAT() {
	    return this.getToken(MeuGrammarParser.FLOAT, 0);
	};

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

	EQUAL() {
	    return this.getToken(MeuGrammarParser.EQUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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




MeuGrammarParser.StartContext = StartContext; 
MeuGrammarParser.ExprContext = ExprContext; 
MeuGrammarParser.TermContext = TermContext; 
MeuGrammarParser.FactorContext = FactorContext; 
MeuGrammarParser.DeclContext = DeclContext; 
