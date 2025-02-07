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
    console.log(`a value indide block `, a)
    }
    console.log(`a value inside function`, a)
}
deep()