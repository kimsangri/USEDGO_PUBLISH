//재난타입별 이벤트발생 통계 차트//

//재난타입별 이벤트발생 월별 통계
function drawEvtMonthlyStatisticsColumn(_id) {
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
            floating: true,
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'top',
            itemStyle: {
                fontFamily: 'NotoSansCJKR',
                color: '#adb2ba',
                fontSize: 10.5,
            },
            symbolRadius: 2,
            symbolWidth: 10,
            symbolHeight: 10,
            y: -50
        },
        series: [{
            name: '구조',
            data: [100, 200, 250, 100, 200, 250, 100, 200, 250, 100, 200, 250],
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#e8c15f'],
                    [1, '#272c30']
                ]
            }
        }, {
            name: '화재',
            data: [100, 200, 250, 100, 200, 250, 100, 200, 250, 100, 200, 250],
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#eb6157'],
                    [1, '#272c30']
                ]
            }
        }, {
            name: '구급',
            data: [100, 200, 250, 100, 200, 250, 100, 200, 250, 100, 200, 250],
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#108f6d'],
                    [1, '#272c30']
                ]
            }
        }, {
            name: '기타',
            data: [100, 200, 250, 100, 200, 250, 100, 200, 250, 100, 200, 250],
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#6791e6'],
                    [1, '#272c30']
                ]
            }
        }],
        plotOptions: {
            column: {
                borderWidth: 0,
                pointPadding: 0,
                borderRadius: 3,
            },
            series: {
                pointWidth: 5,
            },
        },
    });
}

//재난타입별 이벤트발생 년별 통계
function drawEvtYearStatisticsColumn(_id) {
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
            floating: true,
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'top',
            itemStyle: {
                fontFamily: 'NotoSansCJKR',
                color: '#adb2ba',
                fontSize: 10.5,
            },
            symbolRadius: 2,
            symbolWidth: 10,
            symbolHeight: 10,
            y: -50
        },
        series: [{
            name: '구조',
            data: [100, 200, 250, 100, 200, 250, 100, 200, 250, 100],
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#e8c15f'],
                    [1, '#272c30']
                ]
            }
        }, {
            name: '화재',
            data: [100, 200, 250, 100, 200, 250, 100, 200, 250, 100],
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#eb6157'],
                    [1, '#272c30']
                ]
            }
        }, {
            name: '구급',
            data: [100, 200, 250, 100, 200, 250, 100, 200, 250, 100],
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#108f6d'],
                    [1, '#272c30']
                ]
            }
        }, {
            name: '기타',
            data: [100, 200, 250, 100, 200, 250, 100, 200, 250, 100],
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#6791e6'],
                    [1, '#272c30']
                ]
            }
        }],
        plotOptions: {
            column: {
                borderWidth: 0,
                pointPadding: 0,
                borderRadius: 3,
            },
            series: {
                pointWidth: 5,
            },
        },
    });
}

$(document).ready(function () {
    //재난타입별 이벤트발생 월별 통계
    drawEvtMonthlyStatisticsColumn("evtMonthlyStatisticsColumn");
    //재난타입별 이벤트발생 년별 통계
    drawEvtYearStatisticsColumn("evtYearStatisticsColumn");
})