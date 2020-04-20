var expressions = require("angular-expressions");

let input = "fuck";

evaluate = expressions.compile(input);
var test = evaluate();
if (test == true) {
    console.log("ctf-flag");
}

console.log(test);