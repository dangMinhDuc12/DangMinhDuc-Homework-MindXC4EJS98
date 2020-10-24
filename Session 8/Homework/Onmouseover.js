let yes = document.getElementById("yes");
let no = document.getElementById("no");
let i = 0;

yes.onmouseover = function(){
    yes.innerText = "Khong";
    i++;
    if (i > 5){
        alert("to biet ma");
        i = 0;
    }
}
yes.onmouseout = function(){
    yes.innerText = "Co";
}
no.onmouseover = function(){
    no.innerText = "Co";
    i++;
    if (i > 5){
        alert("to biet ma");
        i = 0;
    }
    
}
no.onmouseout = function(){
    no.innerText = "Khong";
    
}
