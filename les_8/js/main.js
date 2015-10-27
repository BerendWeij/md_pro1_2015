window.addEventListener("load", function () {
    // Define our data object
    var addressData = {
        "city": "London",
        "street": "Baker Street",
        "number": "221B"
    };

    // Grab the template script
    var addressTemplateSrc = document.querySelector("#address-template").innerHTML;

    // Compile the template
    var addressTemplate = Handlebars.compile(addressTemplateSrc);

    // Pass our data to the template
    var addressHTML = addressTemplate(addressData);

    document.querySelector("#container").innerHTML = addressHTML;


});