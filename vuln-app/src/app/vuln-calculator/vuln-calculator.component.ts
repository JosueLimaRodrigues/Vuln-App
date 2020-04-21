import { Component, OnInit, Input } from '@angular/core';
import { flag } from '../flag';


@Component({
  selector: 'app-vuln-calculator',
  templateUrl: './vuln-calculator.component.html',
  styleUrls: ['./vuln-calculator.component.css']
})
export class VulnCalculatorComponent implements OnInit {

  flag: string = "not_the_ctf_flag";
  output: string = "";
  @Input() userInput: string;

  constructor() { }

  ngOnInit(): void {  }

  calculate(input: string): void {
    let actualflag = flag;
    var expressions = require("angular-expressions"); // vulnerable library

    // compiles code without sanitizing input
    var evaluate = expressions.compile(input);
    var test = evaluate();

    if (test == true) {
      this.output = actualflag;
      console.log(actualflag);
    } else {
      this.output = test;
      console.log(test)
    }

  }

}
