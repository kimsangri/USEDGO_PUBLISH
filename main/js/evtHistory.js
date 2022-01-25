//evtHistory script
$(document).ready(function () {
    //evt_history_block active
    $(".evt_history_block").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //cctv_info_area show
    $(".gis_icon.cctv_icon").click(function () {
        $(".evt_info_area.evt_history_area").css("height", "690px");
        $(".cctv_info_area").fadeIn();
    });

    //cctv_info_area hide
    $(".gis_icon.cctv_icon .btn_popup_close").click(function () {
        $(".evt_info_area.evt_history_area").css("height", "971px");
        $(".evt_info_area.cctv_info_area").fadeOut();
    });

    //mCustomScrollbar
    $(".evt_history_area .evt_history_body").mCustomScrollbar();
});