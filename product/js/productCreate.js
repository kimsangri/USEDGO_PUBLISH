//productCreate script
$(document).ready(function () {
    //color_block show
    $(".color_block").on('click', function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //btn_grade active
    $(".btn_grade").on('click', function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //selectric
    $("#selectCategory01").selectric();
    $("#selectCategory02").selectric();
    $("#selectSize").selectric();
});