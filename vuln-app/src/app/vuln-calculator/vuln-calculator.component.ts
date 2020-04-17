import { Component, OnInit } from '@angular/core';
import { compile } from "angular-expressions";


@Component({
  selector: 'app-vuln-calculator',
  templateUrl: './vuln-calculator.component.html',
  styleUrls: ['./vuln-calculator.component.css']
})
export class VulnCalculatorComponent implements OnInit {

  flag: string = "ctf_flag";

  output: string = "";

  constructor() { }

  ngOnInit(): void {
    var exp = require("angular-expressions");

    var evaluate = exp.compile(this.flag);

    this.output = evaluate();

  }

}
