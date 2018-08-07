// Generated from formula.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var formulaListener = require('./formulaListener').formulaListener;
var formulaVisitor = require('./formulaVisitor').formulaVisitor;

var grammarFileName = "formula.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\f/\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0014\n",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0019\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    " \n\u0005\f\u0005\u000e\u0005#\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0007\u0006(\n\u0006\f\u0006\u000e\u0006+\u000b\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0002\u0002\b\u0002\u0004\u0006\b\n\f\u0002",
    "\u0003\u0003\u0002\u0007\t\u0002-\u0002\u000e\u0003\u0002\u0002\u0002",
    "\u0004\u0013\u0003\u0002\u0002\u0002\u0006\u0015\u0003\u0002\u0002\u0002",
    "\b\u001c\u0003\u0002\u0002\u0002\n$\u0003\u0002\u0002\u0002\f,\u0003",
    "\u0002\u0002\u0002\u000e\u000f\u0005\u0004\u0003\u0002\u000f\u0003\u0003",
    "\u0002\u0002\u0002\u0010\u0014\u0005\f\u0007\u0002\u0011\u0014\u0005",
    "\u0006\u0004\u0002\u0012\u0014\u0005\b\u0005\u0002\u0013\u0010\u0003",
    "\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0013\u0012\u0003",
    "\u0002\u0002\u0002\u0014\u0005\u0003\u0002\u0002\u0002\u0015\u0016\u0007",
    "\n\u0002\u0002\u0016\u0018\u0007\u0003\u0002\u0002\u0017\u0019\u0005",
    "\n\u0006\u0002\u0018\u0017\u0003\u0002\u0002\u0002\u0018\u0019\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001b\u0007",
    "\u0004\u0002\u0002\u001b\u0007\u0003\u0002\u0002\u0002\u001c!\u0007",
    "\n\u0002\u0002\u001d\u001e\u0007\u0005\u0002\u0002\u001e \u0007\n\u0002",
    "\u0002\u001f\u001d\u0003\u0002\u0002\u0002 #\u0003\u0002\u0002\u0002",
    "!\u001f\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\"\t\u0003",
    "\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002$)\u0005\u0004\u0003\u0002",
    "%&\u0007\u0006\u0002\u0002&(\u0005\u0004\u0003\u0002\'%\u0003\u0002",
    "\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*",
    "\u0003\u0002\u0002\u0002*\u000b\u0003\u0002\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002,-\t\u0002\u0002\u0002-\r\u0003\u0002\u0002\u0002\u0006",
    "\u0013\u0018!)"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'.'", "','", null, null, null, 
                     null, null, "'\"'" ];

var symbolicNames = [ null, null, null, null, null, "StringLiteral", "IntegerLiteral", 
                      "BooleanLiteral", "Identifier", "WS", "QUOTE" ];

var ruleNames =  [ "compilationUnit", "expression", "functionCall", "fieldReference", 
                   "arguments", "literal" ];

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
formulaParser.StringLiteral = 5;
formulaParser.IntegerLiteral = 6;
formulaParser.BooleanLiteral = 7;
formulaParser.Identifier = 8;
formulaParser.WS = 9;
formulaParser.QUOTE = 10;

formulaParser.RULE_compilationUnit = 0;
formulaParser.RULE_expression = 1;
formulaParser.RULE_functionCall = 2;
formulaParser.RULE_fieldReference = 3;
formulaParser.RULE_arguments = 4;
formulaParser.RULE_literal = 5;

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
        this.state = 12;
        this.expression();
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

ExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ExpressionContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

ExpressionContext.prototype.fieldReference = function() {
    return this.getTypedRuleContext(FieldReferenceContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof formulaListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof formulaVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




formulaParser.ExpressionContext = ExpressionContext;

formulaParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, formulaParser.RULE_expression);
    try {
        this.state = 17;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 14;
            this.literal();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 15;
            this.functionCall();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 16;
            this.fieldReference();
            break;

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

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = formulaParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

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




formulaParser.FunctionCallContext = FunctionCallContext;

formulaParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, formulaParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        this.match(formulaParser.Identifier);
        this.state = 20;
        this.match(formulaParser.T__0);
        this.state = 22;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << formulaParser.StringLiteral) | (1 << formulaParser.IntegerLiteral) | (1 << formulaParser.BooleanLiteral) | (1 << formulaParser.Identifier))) !== 0)) {
            this.state = 21;
            this.arguments();
        }

        this.state = 24;
        this.match(formulaParser.T__1);
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

function FieldReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = formulaParser.RULE_fieldReference;
    return this;
}

FieldReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldReferenceContext.prototype.constructor = FieldReferenceContext;

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




formulaParser.FieldReferenceContext = FieldReferenceContext;

formulaParser.prototype.fieldReference = function() {

    var localctx = new FieldReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, formulaParser.RULE_fieldReference);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(formulaParser.Identifier);
        this.state = 31;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===formulaParser.T__2) {
            this.state = 27;
            this.match(formulaParser.T__2);
            this.state = 28;
            this.match(formulaParser.Identifier);
            this.state = 33;
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
    this.enterRule(localctx, 8, formulaParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.expression();
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===formulaParser.T__3) {
            this.state = 35;
            this.match(formulaParser.T__3);
            this.state = 36;
            this.expression();
            this.state = 41;
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

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(formulaParser.BooleanLiteral, 0);
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
    this.enterRule(localctx, 10, formulaParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << formulaParser.StringLiteral) | (1 << formulaParser.IntegerLiteral) | (1 << formulaParser.BooleanLiteral))) !== 0))) {
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


exports.formulaParser = formulaParser;
