const args = process.argv.slice(2);

let num1 = Number(args[0]);
let operator = args[1];
let num2 = Number(args[2]);

let result;
switch(operator){ 
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1*num2;
        break;
    case '/':
        result = num2!==0 ? num1/num2 : "Cannot divide by 0";
        break;
    default:
        result = "Unknowen operatot";

}
console.log(`${num1} ${operator} ${num2} = ${result} `);
