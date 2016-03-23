$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function() {
    var wall = new Freewall("#freewall");
    wall.reset({
        selector: '.brick',
        draggable: false,
        animate: true,
        cellW: 20,
        cellH: 200,
        onResize: function() {
            wall.fitWidth();
        }
    });

    wall.filter("");
    $(".filter-label").click(function() {
        $(".filter-label").removeClass("active");
        var filter = $(this).addClass('active').data('filter');
        if (filter) {
            wall.filter(filter);
        } else {
            wall.unFilter();
        }
    });

    wall.fitWidth();
});