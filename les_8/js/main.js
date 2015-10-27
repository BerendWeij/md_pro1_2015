$(function () {
    // Grab the template script
    var addressTemplateSrc = $("#address-template").html();

    // Compile the template
    var addressTemplate = Handlebars.compile(addressTemplateSrc);

    // Define our data object
    var addressData = {
        "city": "London",
        "street": "Baker Street",
        "number": "221B"
    };

    var studentAddress = {
        "city": "Amsterdam",
        "street": "Contactweg",
        "number": "35"
    };

    // Pass our data to the template
    var addressHTML = addressTemplate(addressData);
    var schoolAddressHTML = addressTemplate(studentAddress);

    // Add the compiled html to the page
    $('.content-placeholder').html(addressHTML + schoolAddressHTML);

});
