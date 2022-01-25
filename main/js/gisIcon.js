//gisIcon script
$(document).ready(function () {
    //gis_icon active
    $(".gis_icon").click(function () {
        $(this).addClass("active");
    });

    //gis_cctv_popup show
    $(".gis_icon.cctv_icon").click(function () {
        $(".gis_cctv_popup.cctv_normal_popup").show();
    });

    //gis_cluster_name active
    $(".gis_cluster_popup .gis_cluster_name").click(function () {
        $(this).removeClass("active");
        $(this).siblings().each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    //mCustomScrollbar
    $(".gis_cluster_popup .gis_cluster_list").mCustomScrollbar();

    //gis_cctv_popup show
    $(".gis_icon.cluster_icon").click(function () {
        $(".gis_cluster_popup").show();
    });

    //cctv_normal_popup show
    $(".gis_cluster_popup .gis_cluster_name").click(function () {
        $(".gis_cctv_popup.cctv_normal_popup").show();
    });


});