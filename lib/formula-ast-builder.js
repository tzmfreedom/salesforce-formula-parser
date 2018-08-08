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
formulaAstBuilder.prototype.visitPrimaryExpression = function(ctx) {
  return ctx.primary().accept(this)
};


formulaAstBuilder.prototype.visitPrimary = function(ctx) {
  if (ctx.literal()) {
    return ctx.literal().accept(this)
  } else if (ctx.expression()) {
    return ctx.expression().accept(this)
  }
};


formulaAstBuilder.prototype.visitBinaryExpression = function(ctx) {
  const left = ctx.expression()[0].accept(this)
  const right = ctx.expression()[1].accept(this)
  return {
    type: 'operator',
    operator: ctx.op.text,
    left,
    right,
  }
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
  const path = ctx.Identifier().map((identifier) => {
    return identifier.getText()
  })
  return {
    type: 'reference',
    path: path,
  }
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
      value: parseInt(ctx.IntegerLiteral().getText())
    }
  } else if (ctx.BooleanLiteral()) {
    return {
      type: 'boolean',
      value: ctx.BooleanLiteral().getText().toUpperCase() == 'TRUE',
    }
  } else if (ctx.FloatingPointLiteral()) {
    return {
      type: 'double',
      value: parseFloat(ctx.FloatingPointLiteral().getText())
    }
  }
  return ctx.getText()
};



exports.formulaAstBuilder = formulaAstBuilder;