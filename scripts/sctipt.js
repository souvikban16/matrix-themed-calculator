var answer="";
var exp="";
var initial="0 + "

function clr(){
    document.getElementById("answer").innerHTML="";
    answer=0;
    initial="0 + ";

}

function one(){
    document.getElementById("answer").innerHTML+="1";
    exp+="1"
}
function two(){
    document.getElementById("answer").innerHTML+="2";
    exp+="2"
}
function three(){
    document.getElementById("answer").innerHTML+="3";
    exp+="3";
}
function four(){
    document.getElementById("answer").innerHTML+="4";
    exp+="4";
}
function five(){
    document.getElementById("answer").innerHTML+="5";
    exp+="5";
}
function six(){
    document.getElementById("answer").innerHTML+="6";
    exp+="6";
}
function seven(){
    document.getElementById("answer").innerHTML+="7";
    exp+="7"; 
}
function eight(){
    document.getElementById("answer").innerHTML+="8";
    exp+="8";
}
function nine(){
    document.getElementById("answer").innerHTML+="9";
    exp+="9";
}
function zero(){
    document.getElementById("answer").innerHTML+="0";
    exp+="0"
}
function plus(){
    document.getElementById("answer").innerHTML+="+";
    exp+="+";
}
function minus(){
    document.getElementById("answer").innerHTML+="-";
    exp+="-";
}
function multiply(){
    document.getElementById("answer").innerHTML+="*";
    exp+="*";
}
function divide(){
    document.getElementById("answer").innerHTML+="/";
    exp+="/";
}
function equal(){
    document.getElementById("answer").innerHTML="";
    var ans = eval(initial + exp);
    document.getElementById("answer").innerHTML=String(ans);
    initial=String(ans);
    exp=""
}




