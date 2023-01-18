var global ="global";

funcion display()
{
    alert("hi");
    display1();
var x=10;
x="Hello";
x=true;


x=10;
y=20;

console.log(x/y);
document.write(x);

x=x+10;
//or

x+=10;
x-=10;


x*=10;


x=10;
y=20;


//comparison operators


x==y;

x!=y;

x>y;
x>=y;


x<y;
x<=y;


if<x!=y|| x>10)
{
    console.log("x is equal to y");
}


let z=10;

}

funtion display1(){
    alert("called from display");

    var x=10;
    return x;

}

funtion variable_scope(x,y){

    //two types of scope:
    //1. block scope=let
    //2. funtion scope=var


    //1. block scope means the variable is accessible only within the block
    //we define a block by curly braces


    /*var greeter ="Hey";
    var x=10;



if(x==10)
{
    var greeter="say hello instead";
}
    


    console.log(greeter);*/



    //var variable can be redeclared in the current scope

    
var x=20;
var x=20;

let greeter="Hey";
varx=10;


//let variable can't be redeclared in the current scope
let y=10;
y=20;


if(x==10){
    let greeter="stay hello instead";

}

console.log(greeter);


const z=20;
const pi=3.14;


//z=30; -will give error as it is constant value
}


variable_scope();



function print(param1, param2){
    var x;//function scope
    let y;//block scope
    const z;//block scope

    return x;
}



//funtion calling
print("hello", "World");