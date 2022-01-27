//common script
$(document).ready(function () {
    //btn_like active
    $(".btn_like").on('click', function () {
        $(this).addClass("active");
    });

    //sort_list show
    $(".btn_sort").on('click', function () {
        $("ul.sort_list").fadeIn(250);
    });
});