//funtion returning funtion

funtion greeting(){
    let message='hi';

    funtion sayHi()
    {
        console.log(message);
    }

    return sayHi;


}

let  hi = greeting();
hi();

const add=(funtion(){
    let counter =0;
    return {
        increment: funtion(){
            counter+=1;
            return counter;
        },

        decrement : funtion(){
            counter -=1;
            return counter;
        }
    }

        })();
    
    console.log(add.increment());
    console.log(add.increment());
    console.log(add.decrement());
    //console.log(add());

//console.log(counter);


//IIFE
//funtion statement
funtion abc(){
    }
abc();





//funtion expression

(funtion(param){
    console.log(param);

})("parameter1");
//iife(); //no need to call explicitly
//console.log(add());

for (var index=1; index<=3; index++)
{(funtion(index){
    setTimeout(funtion(){
        console.log('after'  + index +'seconds' + index); 
    },index*1000)})(index);
    
}

for (let index=1; index<=3; index++)
{(funtion(index){
    setTimeout(funtion(){
        console.log('after'  + index +'seconds' + index); 
    },index*1000);
    
}