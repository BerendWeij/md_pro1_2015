// een functie is ook een object
// Zoek 'Student' maar eens op in de browser (break points) en bekijk zijn prototype chain
var Student = function()
{
    // dit is onze constructor functie
    // als we een nieuwe student aanmaken new Student() dan gaat automatisch deze functie af
    // hier kunnen we mooi de 'begin' settings instellen

    // hieronder maken we een property aan binnen de constructor
    // hierdoor is het een 'eigen' property van deze nieuwe student
    // en niet 1 die wordt inherited
    this.age = 10;

}

Student.prototype.name = "geen naam";

// we geven elke student toegang tot onderstaande functie
Student.prototype.setName = function(name)
{
    this.name = name;
}