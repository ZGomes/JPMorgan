$(function () {
    init();
});


function init() {
    $("main").fullpage();
    menu();
}

function menu(){
    $('#menu-icon').on('click', function (click) {
       $('#menu-icon').toggleClass('active');
        $('#menu').toggleClass('active');
    });
}
