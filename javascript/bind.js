const person = {
    firstName:'uma',
    lasTName:'maheswari',
    fullName:function(){
        return this.firstName + this.lasTName;
    }
}}





const member= {
    firstName:'ABC',
    lasTName:'XYZ'
}


let fullName = person.fullName.bind(member);
console.log(fullName());
