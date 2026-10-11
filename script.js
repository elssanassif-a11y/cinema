let age=document.getElementById("Age");
let numb1=document.getElementById("numb1");
let name=document.getElementById("name");
let ticketprice=0
let total=document.getElementById("total");
let name2=document.getElementById("name2");
let price=document.getElementById("price");
let numboftickets=document.getElementById("numboftickets");

function calculateTicket(){

if (age.value<12){
    ticketprice=5;
}
else if(age.value<=17){
    ticketprice=7;
}
else{
    ticketprice=10;
}

let total2=ticketprice*numb1.value;
document.getElementById("name2").innerHTML=name.value+"'s Ticket";
document.getElementById("price").innerHTML="Price per ticket:$"+ticketprice;
document.getElementById("numboftickets").innerHTML="Number of tickets:"+numb1.value;
document.getElementById("total").innerHTML="Total:$"+total2;
}
function clearTicket(){
    document.getElementById("name2").innerHTML=" Your Ticket";
document.getElementById("price").innerHTML="Price per ticket:0$";
document.getElementById("numboftickets").innerHTML="Number of tickets:0";
document.getElementById("total").innerHTML="Total:0$";

}