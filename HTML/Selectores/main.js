function resultado() {
    var result = document.getElementById('sel').options[document.getElementById('sel').selectedIndex].text;
    document.getElementById('resultado').innerHTML = `La ciudad seleccionada es: ${result}`            
};


////---------------------------------------

