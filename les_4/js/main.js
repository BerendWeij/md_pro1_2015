function initializePage(result){
    var data = JSON.parse(result);

    // document.querySelector();
}

window.addEventListener("load", function(){

    // we maken een xmlHTTPRequest aan
    var req = new XMLHttpRequest();
    // welke url moet er worden opgehaald?
    req.open('GET', 'js/student.json', true);

    // we voegen een 'listener' toe om te kijken of de pagina geladen is
    req.addEventListener('readystatechange', function () {
        //console.log('readyState: ' + req.readyState);
        if (req.readyState == 4) {
            if(req.status == 200){
                initializePage(req.responseText);
            } else {
                console.log("Error loading page\n");
            }
        }
    });
    // we starten het laden van de pagina
    req.send();



});