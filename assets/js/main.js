var elmt = document.getElementById("count");
var width= 0;
var id = setInterval(function() {
    if (width >=100) {
        clearInterval(id);
        window.open('statement.html','_self');
    }else{
        width++;
    elmt.style.width = width + '%';
    document.getElementById("progress").innerHTML = width * 1 + '%';
    }
},50)