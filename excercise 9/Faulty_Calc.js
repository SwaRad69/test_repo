function CALC(a, b, c) {
    d = Math.random();
    // let d = 0.05;
    console.log(d);
    if (d <= 0.1) {
        if (c == '+') {
            return a - b;

        }
        else if (c == '-') {
            return a / b;

        } else if (c == '*') {
            return a + b;

        } else if (c == '/') {
            return a ** b;

        }
    }
    else{
        if (c == '+') {
            return a + b;

        }
        else if (c == '-') {
            return a - b;

        } else if (c == '*') {
            return a * b;

        } else if (c == '/') {
            return a/b;

        }
    }
    if(!(c=='+'||c=='*'||c=='-'||c=='/')){
        console.log("BKL");

    }
  



}
D=CALC(3,5,'+')
console.log(D);

