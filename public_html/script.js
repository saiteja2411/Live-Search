/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var xx = function(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        var obj=JSON.parse(xhttp.responseText);
        var search=document.getElementById("search").value;
        var text="";
        
        document.getElementById("result").innerHTML=text;
        for(x=0;x<obj.length;x++){
            if(obj[x].name.search(search.toString()) !==-1 && search.toString().substring(0,1)===obj[x].name.toString().substring(0,1)){
                text+='<br>'+obj[x].name+'<br>'+obj[x].age;
                text+='<br>';
            }
        }
        if(search.length===0)
            document.getElementById("result").innerHTML="";
        else
            document.getElementById("result").innerHTML=text;
    };
    xhttp.open('GET','text.json',true);
    xhttp.send();
    
};
