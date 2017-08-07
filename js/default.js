var menuButton;
var menu;

window.addEventListener('load', function () {
    init();
});

function init() {
    onePageScroll("main");
    menuButton = document.querySelector('#menu-icon');
    menu = document.querySelector('#menu');
    menuButton.addEventListener('click', function () {
        if (menuButton.classList.contains('active')){
            menuButton.classList.remove('active');
            menu.classList.remove('active');
        }else{
            menuButton.classList.add('active');
            menu.classList.add('active');
        }
    });
    window.addEventListener('scroll',function (e) {
        console.log(e);
    });
}