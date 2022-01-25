//pastEvtHistoryPopup script

$(document).ready(function () {
    //datepicker
    $("#fromCalendar").datepicker({
        dateFormat: "yy/mm/dd"
    });
    $("#toCalendar").datepicker({
        dateFormat: "yy/mm/dd"
    });

    //modalPopup show
    $(".btn_past_history").click(function () {
        $(".past_evt_history_popup").fadeIn(150);
    });

    //mCustomScrollbar
    $(".cctv_list_body").mCustomScrollbar();
});