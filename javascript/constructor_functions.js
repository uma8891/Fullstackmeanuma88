

//ways to create objects
let animal={};
animal.name = "tiger";
animal.sound = "roar";

//second way
let animal1 ={
    name:"tiger",
    sound:"roar",
    eat:function(){

    }
}

let animal2 = {
    name:"Pig",
    sound:"Grunt"
    sleep: function(){

    }
}
animal2.name;

    funtion Animal (name, sound1){
        this.name=name1;
        this.sound = sound1;
        }

        let Tiger = new Animal("Tiger", "Roar");
        let  Pig  = new  Animal("Pig","Grunt");

        console.log(Tiger.name);
        console.log(pig.name);

