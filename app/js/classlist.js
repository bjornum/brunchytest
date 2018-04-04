/*classList manipulate the css classes in an element*/

/*toggle turns a class on/off true/false*/
function classList_toggle () {
    var element = document.getElementById("classLists");
    element.classList.toggle("class to change");
}

/*add put an additional class into element*/
function classList_add() {
    var element = document.getElementById("classLists");
    element.classList.add("class to add");
}


/*remove  removes an class in an element **/
function classList_remove() {
    var element = document.getElementById("classLists");
    element.classList.remove("class to remove");
}