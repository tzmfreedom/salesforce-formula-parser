.PHONY: test
test:
	npx mocha --require intelli-espower-loader

.PHONY: build
build:
	java -jar /usr/local/bin/antlr4 -Dlanguage=JavaScript -visitor lib/formula.g4
