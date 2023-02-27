icon.onclick = function myFunction() {
    var x = document.getElementById('myNavLeft');
    if(x.className === "navmenu-left")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "navmenu-left"; 
    }
}