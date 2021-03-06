/*시세 차트*/
function drawRecentPriceLine(_id) {
    Highcharts.chart(_id, {
        chart: {
            backgroundColor: 'transparent',
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0,
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
                fontFamily: 'PretendardR',
                color: '#e4eef7',
                fontSize: 11,
            },
            backgroundColor: 'rgba(56, 64, 107,0.5)',
            borderColor: 'rgba(196, 196, 196, 0.5)',
            borderRadius: 10,
        },
        xAxis: {
            tickColor: 'transparent',
            lineColor: 'transparent',
            labels: {
                style: {
                    fontFamily: 'PretendardL',
                    color: '#c5d1ee',
                    fontSize: 0,
                }
            },
            categories: ['2022/01/01', '2022/01/02', '2022/01/03', '2022/01/04', '2022/01/05', '2022/01/06', '2022/01/07', '2022/01/08', '2022/01/09', '2022/01/10']
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineColor: 'transparent',
            gridLineWidth: 1,
            labels: {
                style: {
                    fontFamily: 'PretendardL',
                    color: '#c5d1ee',
                    fontSize: 0,
                }
            },
            tickPositions: [0, 30, 80, 150, 200],
        },
        legend: {
            floating: true,
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: {
                fontFamily: 'PretendardEL',
                color: '#e8eefa',
                fontSize: 10,
            },
            symbolRadius: 2,
            symbolWidth: 4,
            symbolHeight: 9,
            y: 41,
        },
        series: [{
            name: '집계',
            data: [30, 20, 10, 10, 30, 20, 10, 10, 10, 10],
            lineColor: '#EE8AFF',
            color: '#EE8AFF',
        }],
        plotOptions: {
            series: {
                lineWidth: 3,
                label: {
                    connectorAllowed: false
                },
                marker: {
                    radius: 0,
                    symbol: 'circle'
                }
            }
        },
    });
}

$(document).ready(function () {
    /*시세 차트*/
    drawRecentPriceLine("recentPriceLine");
})