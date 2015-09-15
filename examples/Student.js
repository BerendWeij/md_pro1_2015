// een functie is ook een object
// Zoek 'Student' maar eens op in de browser en bekijk zijn prototype chain
var Student = function()
{
    // dit is onze constructor functie
    // als we een nieuwe student aanmaken dan gaat automatisch deze functie af
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

/*

Opdrachten:
1) Maak 5 studenten aan en geef ze een eigen naam
2) Kijk d.m.v. breakpoints in het geheugen: welk object/prototype heeft nu een 'name' property?
3) Zorg dat elke student de functie .setAge(age) heeft
4) Zorg dat je als je een student aanmaakt, je ook gelijk zijn/haar naam door kunt geven
5) Kun je, nadat je studenten hebt aangemaakt, nog functies toevoegen die door alle studenten gebruikt kunnen worden?


 */