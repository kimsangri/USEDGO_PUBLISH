//CCTV 통계 차트//

//CCTV제공 월별 통계
function drawCctvMonthlyStatisticsColumn(_id) {
    Highcharts.chart(_id, {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
            spacingTop: 71,
            spacingBottom: 49,
            spacingLeft: 30,
            spacingRight: 54,
        },
        title: {
            text: '',
        },
        subtitle: {
            text: ''
        },
        credits: {
            enabled: false
        },
        tooltip: {
            style: {
                fontFamily: 'NotoSansCJKR',
                color: '#f0f3f7',
                fontSize: 12,
            },
            backgroundColor: '#14171a',
            borderColor: '#17ad50',
            borderRadius: 5,
        },
        xAxis: {
            tickColor: 'transparent',
            lineColor: '#42474a',
            lineWidth: 2,
            labels: {
                style: {
                    fontFamily: 'NotoSansCJKR',
                    color: '#a3aebf',
                    fontSize: 11,
                }
            },
            categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineColor: '#363b3d',
            gridLineWidth: 1,
            labels: {
                style: {
                    fontFamily: 'NotoSansCJKR',
                    color: '#a3aebf',
                    fontSize: 10,
                }
            },
            tickPositions: [0, 50, 100, 150, 200, 250],
        },
        legend: {
            enabled: false
        },
        series: [{
            name: '집계',
            data: [115, 122, 110, 120, 120, 125, 122, 120, 120, 125, 122, 120],
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#0da152'],
                    [1, '#163869']
                ]
            }
        }],
        plotOptions: {
            column: {
                borderWidth: 0,
                pointPadding: 0,
                borderRadius: 0,
            },
            series: {
                pointWidth: 14,
            },
        },
    });
}

//CCTV제공 년별 통계
function drawCctvYearStatisticsColumn(_id) {
    Highcharts.chart(_id, {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
            spacingTop: 71,
            spacingBottom: 49,
            spacingLeft: 30,
            spacingRight: 54,
        },
        title: {
            text: '',
        },
        subtitle: {
            text: ''
        },
        credits: {
            enabled: false
        },
        tooltip: {
            style: {
                fontFamily: 'NotoSansCJKR',
                color: '#f0f3f7',
                fontSize: 12,
            },
            backgroundColor: '#14171a',
            borderColor: '#17ad50',
            borderRadius: 5,
        },
        xAxis: {
            tickColor: 'transparent',
            lineColor: '#42474a',
            lineWidth: 2,
            labels: {
                style: {
                    fontFamily: 'NotoSansCJKR',
                    color: '#a3aebf',
                    fontSize: 11,
                }
            },
            categories: ['2012년', '2013년', '2014년', '2015년', '2016년', '2017년', '2018년', '2019년', '2020년', '2021년']
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineColor: '#363b3d',
            gridLineWidth: 1,
            labels: {
                style: {
                    fontFamily: 'NotoSansCJKR',
                    color: '#a3aebf',
                    fontSize: 10,
                }
            },
            tickPositions: [0, 50, 100, 150, 200, 250],
        },
        legend: {
            enabled: false
        },
        series: [{
            name: '집계',
            data: [115, 122, 110, 120, 120, 125, 122, 120, 120, 125],
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#0da152'],
                    [1, '#163869']
                ]
            }
        }],
        plotOptions: {
            column: {
                borderWidth: 0,
                pointPadding: 0,
                borderRadius: 0,
            },
            series: {
                pointWidth: 14,
            },
        },
    });
}

$(document).ready(function () {
    //CCTV제공 월별 통계
    drawCctvMonthlyStatisticsColumn("cctvMonthlyStatisticsColumn");
    //CCTV제공 년별 통계
    drawCctvYearStatisticsColumn("cctvYearStatisticsColumn");
})