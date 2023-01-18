funtion getPromise(URL){
    let promise = new Promise(funtion(resolve,reject){
        let req = new XMLHttpRequest();

        req.open("GET",URL);

        req.onload = funtion(){
            if(req.status ==200){
                resolve(req.response);
            }
            else{
                reject("There is an error");
            }
            
        }
    
    req.send();
})


return promise;

var URL ="https";

let promise = getPromise(URL);

const consumer = funtion(){
    promose.then(funtion(data){
        console.log(data);
        document.getElementById("demo").innerHTML=data;
    }).catch(funtion(error){
        console.log(error);
        document.getElementById).innerHTML =error;
    
    })




    })
}