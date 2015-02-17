angular.module('dashboardApp').controller("dailyAverageMeetingSizeChartCtrl", function ($scope) {
    var data = {
        labels: ['1/16/2015', '1/17/2015', '1/18/2015', '1/19/2015', '1/20/2015', '1/21/2015', '1/22/2015',
            '1/23/2015', '1/24/2015', '1/25/2015', '1/26/2015', '1/27/2015', '1/28/2015', '1/29/2015', '1/30/2015',
            '1/31/2015', '2/1/2015', '2/2/2015', '2/3/2015', '2/4/2015', '2/5/2015', '2/6/2015', '2/7/2015',
            '2/8/2015', '2/9/2015', '2/10/2015', '2/11/2015', '2/12/2015', '2/13/2015', '2/14/2015', '2/15/2015'],
        datasets: [
            {
                label: "Average Meeting Size",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.8)",
                data: [34, 32, 28, 25, 30, 
                    34, 34, 30, 34, 34, 
                    35, 30, 36, 28, 23, 
                    20, 14, 18, 12, 11, 
                    15, 13, 10, 8, 11, 
                    5, 6, 9, 6, 11, 
                    9, 10, 8, 7, 9, 5]
            }
        ]
    };

    // Fix hit detection for tooltips and scale labels being cutoff.
    var options = {
        pointHitDetectionRadius : 1,
        scaleLabel: "<%= ' ' + value%>",
        responsive: true,
        maintainAspectRatio: true,
        bezierCurve: false,
        legendTemplate : '<% for (var i=0; i<datasets.length; i++) { %>'
        +'<span><div style="width: 10px; height:10px; display: inline-block; background-color: <%=datasets[i].strokeColor%>;"></div>'
        +'<% if (datasets[i].label) { %>&nbsp;<%= datasets[i].label %>&nbsp;&nbsp;&nbsp;&nbsp;<% } %>'
        +'</span>'
        +'<% } %>'
    }

    // Adjust canvas size to parent container size
    var canvas = document.getElementById("dailyAverageMeetingSizeChart");
    //canvas.width = canvas.parentNode.clientWidth;
    //canvas.height = canvas.parentNode.clientHeight;

    var ctx = canvas.getContext("2d");
    var chart = new Chart(ctx).Line(data, options);

    var legend = chart.generateLegend();
    document.getElementById("dailyAverageMeetingSizeChartLegend").innerHTML = legend;
});