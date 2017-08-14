$(function () {
    init();
});


function init() {
    scroll();
    menu();
    curso();
}
function scroll() {
    $("main").fullpage({
        onLeave: function (anchorIndex, index) {
            if (index === 5) {
                $(".fp-scrollable").data('iscrollInstance').scrollTo(0, 0);
            }
        }
    });
}
function menu() {
    $('#menu-icon').on('click', function (click) {
        $('#menu-icon').toggleClass('active');
        $('#menu').toggleClass('active');
    });
}

function curso() {
    $(".grades").on("click",function(){

        console.log($(this).data("grade"));
    })
}