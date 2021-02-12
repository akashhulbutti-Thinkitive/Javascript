class calculator{
    add(a,b):number{
        return a+b;
    }
    sub(a,b):number{
        return a-b;
    }
    mul(a,b):number{
        return a*b;
    }
    div(a,b):number{
        return a/b;
    }
}

class AdvCalculator extends calculator{}

var cal =new AdvCalculator();

console.log("Addidtion 8+9 : "+cal.add(8,9));
console.log("Subtraction 8-9 : "+cal.sub(8,9));
console.log("Multiplication 8*9 : "+cal.mul(8,9));
console.log("Division 10/5 : "+cal.div(10,5));