// Generated from formula.g4 by ANTLR 4.7.1
// jshint ignore: start
const antlr4 = require('antlr4/index');
const FormulaVisitor = require('./formulaVisitor').formulaVisitor;

// This class defines a complete generic visitor for a parse tree produced by formulaParser.

function formulaAstBuilder() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

formulaAstBuilder.prototype = Object.create(FormulaVisitor.prototype);
formulaAstBuilder.prototype.constructor = formulaAstBuilder;

// Visit a parse tree produced by formulaParser#compilationUnit.
formulaAstBuilder.prototype.visitCompilationUnit = function(ctx) {
  return ctx.expression().accept(this)
};


// Visit a parse tree produced by formulaParser#expression.
formulaAstBuilder.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx)[0]
};


// Visit a parse tree produced by formulaParser#functionCall.
formulaAstBuilder.prototype.visitFunctionCall = function(ctx) {
  return {
    type: 'function',
    name: ctx.Identifier().getText(),
    arguments: ctx.arguments().accept(this)
  }
};


formulaAstBuilder.prototype.visitFieldReference = function(ctx) {
  return ctx.Identifier().map((identifier) => {
    return identifier.getText()
  })
};


// Visit a parse tree produced by formulaParser#arguments.
formulaAstBuilder.prototype.visitArguments = function(ctx) {
  return ctx.expression().map((expression) => {
    return expression.accept(this)
  })
};

// Visit a parse tree produced by formulaParser#literal.
formulaAstBuilder.prototype.visitLiteral = function(ctx) {
  if (ctx.StringLiteral()) {
    const text = ctx.StringLiteral().getText()
    return {
      type: 'string',
      value: text.substring(1, text.length - 1)
    }
  } else if (ctx.IntegerLiteral()) {
    return {
      type: 'integer',
      value: ctx.IntegerLiteral().getText().to_i
    }
  } else if (ctx.BooleanLiteral()) {
    return {
      type: 'boolean',
      value: ctx.BooleanLiteral().getText().toUpperCase() == 'TRUE',
    }
  }
  return ctx.getText()
};



exports.formulaAstBuilder = formulaAstBuilder;