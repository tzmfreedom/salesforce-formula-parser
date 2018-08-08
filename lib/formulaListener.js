// Generated from lib/formula.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by formulaParser.
function formulaListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

formulaListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
formulaListener.prototype.constructor = formulaListener;

// Enter a parse tree produced by formulaParser#compilationUnit.
formulaListener.prototype.enterCompilationUnit = function(ctx) {
};

// Exit a parse tree produced by formulaParser#compilationUnit.
formulaListener.prototype.exitCompilationUnit = function(ctx) {
};


// Enter a parse tree produced by formulaParser#primaryExpression.
formulaListener.prototype.enterPrimaryExpression = function(ctx) {
};

// Exit a parse tree produced by formulaParser#primaryExpression.
formulaListener.prototype.exitPrimaryExpression = function(ctx) {
};


// Enter a parse tree produced by formulaParser#binaryExpression.
formulaListener.prototype.enterBinaryExpression = function(ctx) {
};

// Exit a parse tree produced by formulaParser#binaryExpression.
formulaListener.prototype.exitBinaryExpression = function(ctx) {
};


// Enter a parse tree produced by formulaParser#functionCall.
formulaListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by formulaParser#functionCall.
formulaListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by formulaParser#fieldReference.
formulaListener.prototype.enterFieldReference = function(ctx) {
};

// Exit a parse tree produced by formulaParser#fieldReference.
formulaListener.prototype.exitFieldReference = function(ctx) {
};


// Enter a parse tree produced by formulaParser#primary.
formulaListener.prototype.enterPrimary = function(ctx) {
};

// Exit a parse tree produced by formulaParser#primary.
formulaListener.prototype.exitPrimary = function(ctx) {
};


// Enter a parse tree produced by formulaParser#arguments.
formulaListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by formulaParser#arguments.
formulaListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by formulaParser#literal.
formulaListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by formulaParser#literal.
formulaListener.prototype.exitLiteral = function(ctx) {
};



exports.formulaListener = formulaListener;