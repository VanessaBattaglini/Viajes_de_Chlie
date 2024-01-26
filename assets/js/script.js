// POPOVER
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl =>
    new bootstrap.Popover(popoverTriggerEl))

// TITULO CONTACTO 
// DOBLECLICK
$(document).ready(function () {
    $("h2").dblclick(function () {
        $(this).css("color", "red");
    });
});