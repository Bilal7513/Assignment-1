var a = 2; // 1
var b = 1; // 0
var result = --a - --b + ++b + b--;
/*Explain the output at each stage:
--a(1);
--a(1) - --b(0);
--a(1) - --b(0) + ++b(1);
--a(1) - --b(0) + ++b(1) + (1)b--;*/
document.write("a is " + a);
document.write("<br>b is " + b);
document.write("<br>result is " + result);
