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
        anchors: ['bem-vindo','a-iniciativa','o-curso','grade-curricular','linha-do-tempo','inscreva-se','nossa-equipe','nossos-parceiros','contate-nos'],
        menu: '#menu',
        scrollOverflowReset: true,
        onLeave: function (anchorIndex, index) {
            if (index === 5) {
                $(".fp-scrollable").data('iscrollInstance').scrollTo(0, 0);
            }
        }
    });
}
function menu() {
    $('#menu-icon').on('click', function () {
        $('#menu-icon').toggleClass('active');
        $('#menu').toggleClass('active');
    });
    $('#menu ul li a').on('click',function () {
        $('#menu-icon').toggleClass('active');
        $('#menu').toggleClass('active');
    });
}

function curso() {
    $(".grades").on("click",function(){
        switch ($(this).data("grade")){
            case 'mobile':
                $(".e110ae3c-3bd4-46cc-ba7e-afe58f8ac555,.824ae0ee-1a7f-4baf-ae7a-7240550d8a25,.82096e82-3989-4728-ac0b-46d2741652ec").css("stroke","#fff");
                $(".407a2a06-c78b-41c3-b335-6e64d5e03ed8").css("stroke","#634893");
                $(".33b0ff79-7e11-45b9-930e-11f75c62810c").css({
                    "stroke":"transparent",
                    "fill":"#634893"
                })
                break;
            case 'web':
                $(".15d8a20b-15b2-44bf-87e0-5d4a39094ddb,.f1549859-ac4c-451f-8678-e3b89bcc96cb").css("stroke","#51b9b5");
                $(".126865aa-eafc-4ca2-9cda-0b202f09e0ba,.f8e6edab-d375-45d2-bedb-d46693705fdc,.32c7e67c-07fb-42f7-8b20-e62f393691b2,.f8e6edab-d375-45d2-bedb-d46693705fdc").css("stroke","#fff");
                $(".a0d1b0f9-69f3-49fd-9826-d04c84d6e0e8").css({
                    "stroke":"transparent",
                    "fill":"#51b9b5"
                })
                break;
            case 'back':
                break;
            case 'iot':
                break;
        }
        $(".curso").css('opacity','0');
        $("#" + $(this).data("grade") + "View").css('opacity','1');
    })
}
