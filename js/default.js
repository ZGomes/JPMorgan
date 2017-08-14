$(function () {
    init();
});


function init() {
    $("main").fullpage({
        onLeave: function (anchorIndex, index) {
            if (index === 5) {
                $(".fp-scrollable").data('iscrollInstance').scrollTo(0, 0);
            }
        }
    });
    menu();
}

function menu() {
    $('#menu-icon').on('click', function (click) {
        $('#menu-icon').toggleClass('active');
        $('#menu').toggleClass('active');
    });
}