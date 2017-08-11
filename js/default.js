$(function () {
    init();
});


function init() {
    $("main").fullpage({
            onLeave: (anchorIndex, index) => {
                if(index === 5){

                  /*  $('#tempo .fp-scroller').css({
                        transform: 'translate(0px, 21px) translateZ(0px)',
                        "transition-timing-function": 'cubic-bezier(0.1, 0.57, 0.1, 1)',
                        "transition-duration": '0ms',
                        position: "relative",
                        left: "0px",
                        top: "0px"
                    });
                    $('#tempo .iScrollIndicator').css({
                        "box-sizing": "border-box",
                        "position": "absolute",
                        "background": "rgba(0, 0, 0, 0.5)",
                        "border": "1px solid rgba(255, 255, 255, 0.9)",
                        "border-radius": "3px; width: 7px",
                        "transition-duration": "0ms",
                        "display": "block",
                        "height": "674px",
                        "transform": "translate(0px, 0px) translateZ(0px)",
                        "transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        "z-index": "9999",
                        "bottom": "2px",
                        "top": "2px",
                        "right": "1px",
                        "overflow": "hidden"
                    });*/
                }
            }
    });
}
