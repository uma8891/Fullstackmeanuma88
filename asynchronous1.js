

//callback funtions are called after completion of a task
funtion readData()
{
    // here will read the data from a file.
    setTimeout(funtion(){
        return "file data";

    },1000);
}


var data= readData();
console.log(data);

funtion readDataCallback(x){
    setTimeout(cuntion(){
        var data="file data";
        x(data);
    })
}

funtion print(data){
    console.log(data);

}


funtion abc(callback1){
    var data ="file data";
    xyz(data);

}

funtion xyz(data_x){
    console.log(data_x);
}

abc(xyz);



getTodoCallback()

