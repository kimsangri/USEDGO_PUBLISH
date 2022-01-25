//alertPopup script
$(document).ready(function () {
    $(".evt_history_area .btn_reload").click(function () {
        $(".alert_popup").fadeIn(150);
    });

    $(".alert_popup .btn_confirm").click(function () {
        $(".modal_popup").fadeOut(150);
    });
});