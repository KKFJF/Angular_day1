a = 15;
b= 24;
console.log(`a value is ${a}`);
console.log(`b value is ${b}`);

const arr = [10,20];
arr[0] = 15;
arr.push(30);
delete arr[1];
console.log(arr);
console.log(`---------------------------`);

function dee(){
    if (true){
        var a= 10;
    console.log(`a value inside block `, a)
    }
    console.log(`a value inside function`, a)
}
dee()
console.log(`------------------------`)

function test(){
    console.log(`b value inside `, b)
    if(true){
        var b = 40
        console.log(`b value inside function`, b)
    }
}
test()

let $ = "hello world!";
let $$ = 123;

let x = 5
x = 7
x = x+x
console.log(x);
console.log(`-------------------`)

function type(){
    console.log(`x value  inside `, x)
    if(true){
        //let x = 12
        let x = 23
        console.log(`x value inside block`, x)
    
        }
    }
    type()

console.log(t);// there is no error but it shows undefined
var t = 20;
console.log(t);//output :20

console.log(u);// can't  access 'u'  before initialization
let u = 30;
console.log(u);//after  you declare  the value it print the value.

//const c;  //   Missing initializer in const declaration
const d = 30;  //  Correct
console.log(d);  // Outputs: 30













