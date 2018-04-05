/*div 2*/
function swapToBlue(){
    document.getElementById("cdiv2").classList.toggle("div2blue");
}

/*div 3*/
function swappy(){
    document.getElementById("cdiv3").classList.toggle("div3blue");
}

/*navbar login*/
function login(){
    let el = document.getElementById("loggingIn");
    el.classList.remove("logintext");
    el.innerHTML="bjorn";
}



/*div 1 to 4 and back*/

/*div5  if and else conditions*/
/**create css div5 and put cdiv5 to button **/

function ifToElse(){
    if("div5")
    document.getElementById("cdiv5").classList.toggle("div5red");
    else{
    document.getElementById("cdiv5").classList.toggle("div5");
    }
}

/*
function ifToElse(){
    var t = document.getElementsByClassName("cdiv5")
    if([0] == "div5" ){
        document.getElementById("cdiv5").classList.toggle("div5red");
        else{
        document.getElementById("cdiv5").classList.toggle("div5");
        }
    }
   
}

*/