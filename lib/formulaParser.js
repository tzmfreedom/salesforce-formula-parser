// Generated from lib/formula.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var formulaListener = require('./formulaListener').formulaListener;
var formulaVisitor = require('./formulaVisitor').formulaVisitor;

var grammarFileName = "formula.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001eF\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u0014\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u0003\u001a\n\u0003\f\u0003\u000e\u0003\u001d\u000b\u0003\u0005\u0003",
    "\u001f\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u00030",
    "\n\u0003\f\u0003\u000e\u00033\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004:\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005?\n\u0005\f\u0005\u000e\u0005B\u000b\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0003\u0004\u0007\u0002\u0004",
    "\u0006\b\n\u0002\b\u0003\u0002\u0006\u0007\u0003\u0002\b\t\u0003\u0002",
    "\n\u000b\u0003\u0002\f\u0013\u0003\u0002\u0014\u0015\u0003\u0002\u0017",
    "\u001b\u0002K\u0002\f\u0003\u0002\u0002\u0002\u0004\u001e\u0003\u0002",
    "\u0002\u0002\u00069\u0003\u0002\u0002\u0002\b;\u0003\u0002\u0002\u0002",
    "\nC\u0003\u0002\u0002\u0002\f\r\u0005\u0004\u0003\u0002\r\u0003\u0003",
    "\u0002\u0002\u0002\u000e\u000f\b\u0003\u0001\u0002\u000f\u001f\u0005",
    "\u0006\u0004\u0002\u0010\u0011\u0007\u001c\u0002\u0002\u0011\u0013\u0007",
    "\u0003\u0002\u0002\u0012\u0014\u0005\b\u0005\u0002\u0013\u0012\u0003",
    "\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0015\u0003",
    "\u0002\u0002\u0002\u0015\u001f\u0007\u0004\u0002\u0002\u0016\u001b\u0007",
    "\u001c\u0002\u0002\u0017\u0018\u0007\u0005\u0002\u0002\u0018\u001a\u0007",
    "\u001c\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u001a\u001d\u0003",
    "\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003",
    "\u0002\u0002\u0002\u001c\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003",
    "\u0002\u0002\u0002\u001e\u000e\u0003\u0002\u0002\u0002\u001e\u0010\u0003",
    "\u0002\u0002\u0002\u001e\u0016\u0003\u0002\u0002\u0002\u001f1\u0003",
    "\u0002\u0002\u0002 !\f\u0007\u0002\u0002!\"\t\u0002\u0002\u0002\"0\u0005",
    "\u0004\u0003\b#$\f\u0006\u0002\u0002$%\t\u0003\u0002\u0002%0\u0005\u0004",
    "\u0003\u0007&\'\f\u0005\u0002\u0002\'(\t\u0004\u0002\u0002(0\u0005\u0004",
    "\u0003\u0006)*\f\u0004\u0002\u0002*+\t\u0005\u0002\u0002+0\u0005\u0004",
    "\u0003\u0005,-\f\u0003\u0002\u0002-.\t\u0006\u0002\u0002.0\u0005\u0004",
    "\u0003\u0004/ \u0003\u0002\u0002\u0002/#\u0003\u0002\u0002\u0002/&\u0003",
    "\u0002\u0002\u0002/)\u0003\u0002\u0002\u0002/,\u0003\u0002\u0002\u0002",
    "03\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002",
    "\u00022\u0005\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u00024:\u0005",
    "\n\u0006\u000256\u0007\u0003\u0002\u000267\u0005\u0004\u0003\u00027",
    "8\u0007\u0004\u0002\u00028:\u0003\u0002\u0002\u000294\u0003\u0002\u0002",
    "\u000295\u0003\u0002\u0002\u0002:\u0007\u0003\u0002\u0002\u0002;@\u0005",
    "\u0004\u0003\u0002<=\u0007\u0016\u0002\u0002=?\u0005\u0004\u0003\u0002",
    "><\u0003\u0002\u0002\u0002?B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002",
    "\u0002@A\u0003\u0002\u0002\u0002A\t\u0003\u0002\u0002\u0002B@\u0003",
    "\u0002\u0002\u0002CD\t\u0007\u0002\u0002D\u000b\u0003\u0002\u0002\u0002",
    "\t\u0013\u001b\u001e/19@"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'.'", "'&'", "'^'", "'*'", "'/'", 
                     "'+'", "'-'", "'<'", "'>'", "'<='", "'>='", "'='", 
                     "'=='", "'!='", "'<>'", "'&&'", "'||'", "','", null, 
                     null, null, null, null, null, null, "'\"'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "StringLiteral", "IntegerLiteral", 
                      "FloatingPointLiteral", "BooleanLiteral", "NullLiteral", 
                      "Identifier", "WS", "QUOTE" ];

var ruleNames =  [ "compilationUnit", "expression", "primary", "arguments", 
                   "literal" ];

function formulaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

formulaParser.prototype = Object.create(antlr4.Parser.prototype);
formulaParser.prototype.constructor = formulaParser;

Object.defineProperty(formulaParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

formulaParser.EOF = antlr4.Token.EOF;
formulaParser.T__0 = 1;
formulaParser.T__1 = 2;
formulaParser.T__2 = 3;
formulaParser.T__3 = 4;
formulaParser.T__4 = 5;
formulaParser.T__5 = 6;
formulaParser.T__6 = 7;
formulaParser.T__7 = 8;
formulaParser.T__8 = 9;
formulaParser.T__9 = 10;
formulaParser.T__10 = 11;
formulaParser.T__11 = 12;
formulaParser.T__12 = 13;
formulaParser.T__13 = 14;
formulaParser.T__14 = 15;
formulaParser.T__15 = 16;
formulaParser.T__16 = 17;
formulaParser.T__17 = 18;
formulaParser.T__18 = 19;
formulaParser.T__19 = 20;
formulaParser.StringLiteral = 21;
formulaParser.IntegerLiteral = 22;
formulaParser.FloatingPointLiteral = 23;
formulaParser.BooleanLiteral = 24;
formulaParser.NullLiteral = 25;
formulaParser.Identifier = 26;
formulaParser.WS = 27;
formulaParser.QUOTE = 28;

formulaParser.RULE_compilationUnit = 0;
formulaParser.RULE_expression = 1;
formulaParser.RULE_primary = 2;
formulaParser.RULE_arguments = 3;
formulaParser.RULE_literal = 4;

function CompilationUnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = formulaParser.RULE_compilationUnit;
    return this;
}

CompilationUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompilationUnitContext.prototype.constructor = CompilationUnitContext;

CompilationUnitContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CompilationUnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.enterCompilationUnit(this);
	}
};

CompilationUnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.exitCompilationUnit(this);
	}
};

CompilationUnitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof formulaVisitor ) {
        return visitor.visitCompilationUnit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




formulaParser.CompilationUnitContext = CompilationUnitContext;

formulaParser.prototype.compilationUnit = function() {

    var localctx = new CompilationUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, formulaParser.RULE_compilationUnit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.expression(0);
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
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = formulaParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function PrimaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
PrimaryExpressionContext.prototype.constructor = PrimaryExpressionContext;

formulaParser.PrimaryExpressionContext = PrimaryExpressionContext;

PrimaryExpressionContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};
PrimaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.enterPrimaryExpression(this);
	}
};

PrimaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.exitPrimaryExpression(this);
	}
};

PrimaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof formulaVisitor ) {
        return visitor.visitPrimaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BinaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BinaryExpressionContext.prototype.constructor = BinaryExpressionContext;

formulaParser.BinaryExpressionContext = BinaryExpressionContext;

BinaryExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BinaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.enterBinaryExpression(this);
	}
};

BinaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.exitBinaryExpression(this);
	}
};

BinaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof formulaVisitor ) {
        return visitor.visitBinaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionCallContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionCallContext.prototype = Object.create(ExpressionContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

formulaParser.FunctionCallContext = FunctionCallContext;

FunctionCallContext.prototype.Identifier = function() {
    return this.getToken(formulaParser.Identifier, 0);
};

FunctionCallContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.exitFunctionCall(this);
	}
};

FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof formulaVisitor ) {
        return visitor.visitFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FieldReferenceContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FieldReferenceContext.prototype = Object.create(ExpressionContext.prototype);
FieldReferenceContext.prototype.constructor = FieldReferenceContext;

formulaParser.FieldReferenceContext = FieldReferenceContext;

FieldReferenceContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(formulaParser.Identifier);
    } else {
        return this.getToken(formulaParser.Identifier, i);
    }
};

FieldReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.enterFieldReference(this);
	}
};

FieldReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.exitFieldReference(this);
	}
};

FieldReferenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof formulaVisitor ) {
        return visitor.visitFieldReference(this);
    } else {
        return visitor.visitChildren(this);
    }
};



formulaParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, formulaParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PrimaryExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 13;
            this.primary();
            break;

        case 2:
            localctx = new FunctionCallContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 14;
            this.match(formulaParser.Identifier);
            this.state = 15;
            this.match(formulaParser.T__0);
            this.state = 17;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << formulaParser.T__0) | (1 << formulaParser.StringLiteral) | (1 << formulaParser.IntegerLiteral) | (1 << formulaParser.FloatingPointLiteral) | (1 << formulaParser.BooleanLiteral) | (1 << formulaParser.NullLiteral) | (1 << formulaParser.Identifier))) !== 0)) {
                this.state = 16;
                this.arguments();
            }

            this.state = 19;
            this.match(formulaParser.T__1);
            break;

        case 3:
            localctx = new FieldReferenceContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 20;
            this.match(formulaParser.Identifier);
            this.state = 25;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 21;
                    this.match(formulaParser.T__2);
                    this.state = 22;
                    this.match(formulaParser.Identifier); 
                }
                this.state = 27;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
            }

            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 47;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 45;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, formulaParser.RULE_expression);
                    this.state = 30;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 31;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===formulaParser.T__3 || _la===formulaParser.T__4)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 32;
                    this.expression(6);
                    break;

                case 2:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, formulaParser.RULE_expression);
                    this.state = 33;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 34;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===formulaParser.T__5 || _la===formulaParser.T__6)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 35;
                    this.expression(5);
                    break;

                case 3:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, formulaParser.RULE_expression);
                    this.state = 36;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 37;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===formulaParser.T__7 || _la===formulaParser.T__8)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 38;
                    this.expression(4);
                    break;

                case 4:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, formulaParser.RULE_expression);
                    this.state = 39;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 40;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << formulaParser.T__9) | (1 << formulaParser.T__10) | (1 << formulaParser.T__11) | (1 << formulaParser.T__12) | (1 << formulaParser.T__13) | (1 << formulaParser.T__14) | (1 << formulaParser.T__15) | (1 << formulaParser.T__16))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 41;
                    this.expression(3);
                    break;

                case 5:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, formulaParser.RULE_expression);
                    this.state = 42;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 43;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===formulaParser.T__17 || _la===formulaParser.T__18)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 44;
                    this.expression(2);
                    break;

                } 
            }
            this.state = 49;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = formulaParser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

PrimaryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrimaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.enterPrimary(this);
	}
};

PrimaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.exitPrimary(this);
	}
};

PrimaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof formulaVisitor ) {
        return visitor.visitPrimary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




formulaParser.PrimaryContext = PrimaryContext;

formulaParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, formulaParser.RULE_primary);
    try {
        this.state = 55;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case formulaParser.StringLiteral:
        case formulaParser.IntegerLiteral:
        case formulaParser.FloatingPointLiteral:
        case formulaParser.BooleanLiteral:
        case formulaParser.NullLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.literal();
            break;
        case formulaParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.match(formulaParser.T__0);
            this.state = 52;
            this.expression(0);
            this.state = 53;
            this.match(formulaParser.T__1);
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
};

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = formulaParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.exitArguments(this);
	}
};

ArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof formulaVisitor ) {
        return visitor.visitArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




formulaParser.ArgumentsContext = ArgumentsContext;

formulaParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, formulaParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.expression(0);
        this.state = 62;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===formulaParser.T__19) {
            this.state = 58;
            this.match(formulaParser.T__19);
            this.state = 59;
            this.expression(0);
            this.state = 64;
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
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = formulaParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(formulaParser.StringLiteral, 0);
};

LiteralContext.prototype.IntegerLiteral = function() {
    return this.getToken(formulaParser.IntegerLiteral, 0);
};

LiteralContext.prototype.FloatingPointLiteral = function() {
    return this.getToken(formulaParser.FloatingPointLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(formulaParser.BooleanLiteral, 0);
};

LiteralContext.prototype.NullLiteral = function() {
    return this.getToken(formulaParser.NullLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof formulaVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




formulaParser.LiteralContext = LiteralContext;

formulaParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, formulaParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << formulaParser.StringLiteral) | (1 << formulaParser.IntegerLiteral) | (1 << formulaParser.FloatingPointLiteral) | (1 << formulaParser.BooleanLiteral) | (1 << formulaParser.NullLiteral))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


formulaParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

formulaParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		case 4:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.formulaParser = formulaParser;
