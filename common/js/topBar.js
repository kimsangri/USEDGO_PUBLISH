//topBar script
$(document).ready(function () {
    $(".top_menu_area").mouseover(function () {
        $(".top_sub_menu_area").stop().fadeIn(150);
    });

    $(".top_menu_area").mouseout(function () {
        $(".top_sub_menu_area").stop().fadeOut(150);
    });

    $(".top_search_area .btn_close").on("click", function () {
        $(".top_search_area").css({
            top: '-269px'
        });
    });

    $(".top_func_area .btn_search").on("click", function () {
        $(".top_search_area").css({
            top: '0'
        });
    });
});
