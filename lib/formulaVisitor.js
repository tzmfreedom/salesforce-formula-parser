// Generated from lib/formula.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by formulaParser.

function formulaVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

formulaVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
formulaVisitor.prototype.constructor = formulaVisitor;

// Visit a parse tree produced by formulaParser#compilationUnit.
formulaVisitor.prototype.visitCompilationUnit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by formulaParser#primaryExpression.
formulaVisitor.prototype.visitPrimaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by formulaParser#binaryExpression.
formulaVisitor.prototype.visitBinaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by formulaParser#functionCall.
formulaVisitor.prototype.visitFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by formulaParser#fieldReference.
formulaVisitor.prototype.visitFieldReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by formulaParser#primary.
formulaVisitor.prototype.visitPrimary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by formulaParser#arguments.
formulaVisitor.prototype.visitArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by formulaParser#literal.
formulaVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};



exports.formulaVisitor = formulaVisitor;