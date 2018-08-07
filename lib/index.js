const antlr4 = require('antlr4');
const FormulaParser = require('./formulaParser').formulaParser;
const FormulaLexer = require('./formulaLexer').formulaLexer;
const FormulaAstBuilder = require('./formula-ast-builder').formulaAstBuilder;

module.exports = (input) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new FormulaLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new FormulaParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.compilationUnit()

  const visitor = new FormulaAstBuilder();

  return visitor.visit(tree)
}
