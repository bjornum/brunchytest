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

function ifToElse() {
    if (typeof(document.getElementById("cdiv5")) !== "undefined" && typeof(document.getElementById('div5input')) !== "undefined") {
        var el = document.getElementById("cdiv5");
    
        var input = document.getElementById('div5input');
        
        if (input.value == "Trond") {
            if (el.classList.contains("div5red") ) {
                el.classList.remove("div5red");
            }
        } else {
            el.classList.add("div5red");
        
        }  
    }
}

/*
function ifToElse(){
    var t = document.getElementsByClassName("div5")
    if([0] == "div5" ){
        document.getElementById("cdiv5").classList.toggle("div5red");
        else{
        document.getElementById("cdiv5").classList.toggle("div5");
        }
    }
   
}

*/