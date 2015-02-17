angular.module('dashboardApp').controller("dailyAverageMeetingCostsChartCtrl", function ($scope) {
    var data = {
        labels: ['1/16/2015', '1/17/2015', '1/18/2015', '1/19/2015', '1/20/2015', '1/21/2015', '1/22/2015',
            '1/23/2015', '1/24/2015', '1/25/2015', '1/26/2015', '1/27/2015', '1/28/2015', '1/29/2015', '1/30/2015',
            '1/31/2015', '2/1/2015', '2/2/2015', '2/3/2015', '2/4/2015', '2/5/2015', '2/6/2015', '2/7/2015',
            '2/8/2015', '2/9/2015', '2/10/2015', '2/11/2015', '2/12/2015', '2/13/2015', '2/14/2015', '2/15/2015'],
        datasets: [
            {
                label: "Average Meeting Cost",
                fillColor: "rgba(0,0,0,0)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.8)",
                data: [2240, 1960, 1750, 2380, 2310, 2170,
                    2100, 2310, 2310, 2450, 2100,
                    1890, 1960, 1610, 1400, 1000, 1008,
                    1260, 1008, 688, 770, 924, 1050, 756,
                    445, 770, 322, 450, 520, 592, 395
                    , 724, 592, 658, 526, 460, 592, 329]
            },
            {
                label: "Adjusted Average Meeting Cost",
                fillColor: "rgba(0,0,0,0)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,0.8)",
                data: [1155, 1100, 1140, 1120, 1400, 1000,
                    1050, 1100, 1200, 1000, 1300,
                    1250, 1200, 1225, 1100, 900, 800,
                    850, 800, 688, 770, 924, 1050, 756,
                    445, 770, 322, 450, 520, 592, 395
                    , 724, 592, 658, 526, 460, 592, 329]
            }
        ]
    };

    // Fix hit detection for tooltips and scale labels being cutoff.
    var options = {
        pointHitDetectionRadius: 1,
        scaleLabel: "<%= ' $' + Number(value).toLocaleString()%>",
        multiTooltipTemplate: "<%= datasetLabel %>: <%= '$' + Number(value).toLocaleString()%>",
        responsive: true,
        maintainAspectRatio: true,
        bezierCurve: false,
        legendTemplate : '<% for (var i=0; i<datasets.length; i++) { %>'
        +'<span><div style="width: 10px; height:10px; display: inline-block; background-color: <%=datasets[i].strokeColor%>;"></div>'
        +'<% if (datasets[i].label) { %>&nbsp;<%= datasets[i].label %>&nbsp;&nbsp;&nbsp;&nbsp;<% } %>'
        +'</span>'
        +'<% } %>'
    };


    // Adjust canvas size to parent container size
    var canvas = document.getElementById("dailyAverageMeetingCostsChart");
    //canvas.width = canvas.parentNode.clientWidth;
    //canvas.height = canvas.parentNode.clientHeight;

    var ctx = canvas.getContext("2d");
    var chart = new Chart(ctx).Line(data, options);

    var legend = chart.generateLegend();
    document.getElementById("dailyAverageMeetingCostsChartLegend").innerHTML = legend;
});