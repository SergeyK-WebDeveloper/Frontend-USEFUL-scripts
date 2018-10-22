//applying arrows that indicates nested items
$('#mm-toggle > ul > li').has("ul").addClass("has-sub");
$('#mm-toggle ul li:not(.has-sub)').has("ul").addClass("has-inner-sub");

// required only for mobile version
$('#mm-toggle li.has-inner-sub, #mm-toggle li.has-sub').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).children('ul').toggleClass('show');
});