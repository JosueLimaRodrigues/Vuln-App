var expressions = require("angular-expressions");
evaluate = expressions.compile("1 + 1");
var test = evaluate();
console.log(test);