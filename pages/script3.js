let inputdata = document.getElementById("inputdata")
let amount = document.getElementById('amount')
let btn = document.getElementById("btn")
let table    = document.getElementById('table')

let array =[];

function addrow(){
let data = inputdata.value;


let tr = document.createElement('tr');
let td = document.createElement('td');
 let text1 = document.createTextNode(data);


 

td.appendChild  (text1);

tr. appendChild (td);

table.appendChild(tr);
inputdata.value= ""

        


array.push({
  value:  data,


})






localStorage.setItem("array",JSON.stringify(array,));






}
function runtodo(arrayindex){
    array.forEach(function(array,arrayindex){
        let tr = document.createElement('tr');
        let td = document.createElement('td');

         let text1 = document.createTextNode(array.value);
      
    
         
         
        td.appendChild  (text1);
       
        tr. appendChild (td);
      
     
        
        table.appendChild(tr);
        let deletbtn = document.createElement("i");
deletbtn.setAttribute("class","ri-delete-bin-fill");
let editbtn = document.createElement("i");
editbtn.setAttribute("class","ri-pencil-fill" );

td.appendChild(editbtn)
td.appendChild(deletbtn)



editbtn .addEventListener('click',function(e){


let edittext = prompt("edit the select",e.nodevalue);
e.nodevalue = edittext;



})
deletbtn.addEventListener('click',function(event){
    event.target.parentElement.remove();
    console.log(event.target)

    
array.splice( array.indexof,  1)


localStorage.setItem("array",JSON.stringify(array));
})


    })
    
}
let store = localStorage.getItem("array");
if(store){
    let parse = JSON.parse(store)
    array = parse;
    console.log(parse);
    runtodo(array);
}










btn.addEventListener('click' ,addrow);


