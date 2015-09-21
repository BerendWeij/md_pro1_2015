window.addEventListener("load", function(){

    // we maken 2 arrays aan
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var characters = ["a", "b", "c"];

    // we geven elke Array toegang tot de empty() functie
    Array.prototype.empty = function () {
        this.splice(0, this.length);
    };

    // we roepen de functie aan op de 2 arrays
    numbers.empty();
    characters.empty();

    console.log(numbers.length);
    console.log(characters.length);

})