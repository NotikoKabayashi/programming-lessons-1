let a=42;
console.log (typeofa,a);

let b='hello'
console.log (typeofb,b);

let c = true;
console.log (typeofc,c); // "boolean"

let d = undefined
console.log (typeofd,d); // "undefined"

let e = Symbol('klyg')
console.log (typeofe,e); // "symbol"
let f = new Object(123);
console.log (typeoff,f); // "object"
let g=null;
console.log (typeofg,g); // "object"

function showMessage(){
}
console.log·typeof ; // "function"

function pow(a, b) {
    let result = a;
    let a=2;
    let b=3;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  }
  console.log(); 