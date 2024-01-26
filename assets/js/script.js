// POPOVER
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl =>
    new bootstrap.Popover(popoverTriggerEl))

// TARJETAS OCULTAS


$('.card').click(function () {
    $(this).toggleClass('active');
    $('.card-text').css("visibility", "hidden");
    $('.card').css('height', '18rem');
    $('.card').css('border', 'solid');
});