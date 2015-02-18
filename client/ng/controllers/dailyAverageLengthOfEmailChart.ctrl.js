angular.module('dashboardApp').controller("dailyAverageLengthOfEmailChartCtrl", function ($scope) {
    var data = {
        labels: ['1/16/2015', '', '1/18/2015', '', '1/20/2015', '', '1/22/2015',
            '', '1/24/2015', '', '1/26/2015', '', '1/28/2015', '', '1/30/2015',
            '', '2/1/2015', '', '2/3/2015', '', '2/5/2015', '', '2/7/2015',
            '', '2/9/2015', '', '2/11/2015', '', '2/13/2015', '', '2/15/2015'],
        datasets: [
            {
                label: "Email Average Length",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.8)",
                data: [499, 590, 450, 575, 620,
                    640, 550, 500, 525, 575, 
                    600, 525, 480, 450, 420, 
                    490, 450, 390, 400, 380, 
                    390, 370, 360, 365, 358, 
                    355, 350, 357, 340, 345, 338]
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
    var canvas = document.getElementById("dailyAverageLengthOfEmailChart");
    //canvas.width = canvas.parentNode.clientWidth;
    //canvas.height = canvas.parentNode.clientHeight;

    var ctx = canvas.getContext("2d");
    var chart = new Chart(ctx).Line(data, options);

    var legend = chart.generateLegend();
    document.getElementById("dailyAverageLengthOfEmailChartLegend").innerHTML = legend;
});