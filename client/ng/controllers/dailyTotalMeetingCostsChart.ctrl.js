angular.module('dashboardApp').controller("dailyTotalMeetingCostsChartCtrl", function ($scope) {
    var data = {
        labels: ['1/16/2015', '1/17/2015', '1/18/2015', '1/19/2015', '1/20/2015', '1/21/2015', '1/22/2015',
            '1/23/2015', '1/24/2015', '1/25/2015', '1/26/2015', '1/27/2015', '1/28/2015', '1/29/2015', '1/30/2015',
            '1/31/2015', '2/1/2015', '2/2/2015', '2/3/2015', '2/4/2015', '2/5/2015', '2/6/2015', '2/7/2015',
            '2/8/2015', '2/9/2015', '2/10/2015', '2/11/2015', '2/12/2015', '2/13/2015', '2/14/2015', '2/15/2015'],
        datasets: [
            {
                label: "Total Meeting Costs for the Day",
                fillColor: "rgba(0,0,0,0)",
                strokeColor: "#97bbcd",
                pointColor: "#97bbcd",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.8)",
                data: [76230, 62720, 86240, 59500, 73780,
                    76230, 82460, 73500, 83160, 66150,
                    67200, 45360, 68600, 40250, 29400,
                    32340, 46620, 22730.40, 17671.50, 20328.00,
                    16632, 12485.20, 11911.90, 3542, 19835.20,
                    13028.40, 4737.60, 23161.60, 7106.40, 15134.00,
                    6316.80]
            },
            {
                label: "Adjusted Total Meeting Costs",
                fillColor: "rgba(0,0,0,0)",
                strokeColor: "#dcdcdc",
                pointColor: "#dcdcdc",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,0.8)",
                data: [38115, 28224, 47432, 35700, 42054.60,
                    32778.90, 40405.40, 38220.00, 47401.20, 31785.60,
                    40320, 24948, 41160, 26162.50, 20580,
                    24255.00, 37296.00, 22730.40, 17671.50, 20328.00,
                    16632, 12485.20, 11911.90, 3542, 19835.20,
                    13028.40, 4737.60, 23161.60, 7106.40, 15134.00,
                    6316.80]
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
    var canvas = document.getElementById("dailyTotalMeetingCostsChart");
    //canvas.width = canvas.parentNode.clientWidth;
    //canvas.height = canvas.parentNode.clientHeight;

    var ctx = canvas.getContext("2d");
    var chart = new Chart(ctx).Line(data, options);
    var legend = chart.generateLegend();
    document.getElementById("dailyTotalMeetingCostsChartLegend").innerHTML = legend;
});