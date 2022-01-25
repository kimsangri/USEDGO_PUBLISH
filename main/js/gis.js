//gis script
$(document).ready(function () {
    //map_type_box active
    $(".map_type_box").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //map_setting_frame show
    $(".btn_map_setting").click(function () {
        $(this).addClass("active"); //추가
        $(".map_setting_frame").fadeIn(150);
    });

    //map_setting_frame hide
    // $(".btn_map_setting_close").click(function () {
    //     $(".map_setting_frame").fadeOut(150);
    // });  //삭제

    //mCustomScrollbar
    $(".search_list_area").mCustomScrollbar();

    //search_list_frame show
    $(".search_area .btn_search").click(function () {
        $(".search_list_frame").fadeIn(150);
    });
});