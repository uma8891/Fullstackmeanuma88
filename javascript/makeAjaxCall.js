funtion makeAjaxCall(url, methodType, callback){
    var xhr= new XMLHttPRequest();
        }
xhr.open(methodType, url);
xhr.send();

xhr.onreadystatechange = funtion(){
    if(xhr.readystate==4){
        if(xhr.status==200){
            callback(xhr.response);
        }
}
        
    }
}



funtion display(data){
    document.getElementById("demo").innerHTML= data;
}
var URL = " ";
makeAjaxCall(URL, "GET" , display)