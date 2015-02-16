//Chart.defaults.global.scaleLabel = function(label){
//    return "$" + label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//};

angular.module('dashboardApp').controller("dailyMoraleRatingChartCtrl", function ($scope) {
    var data = {
        labels: ['1/16/2015', '1/17/2015', '1/18/2015', '1/19/2015', '1/20/2015', '1/21/2015', '1/22/2015',
            '1/23/2015', '1/24/2015', '1/25/2015', '1/26/2015', '1/27/2015', '1/28/2015', '1/29/2015', '1/30/2015',
            '1/31/2015', '2/1/2015', '2/2/2015', '2/3/2015', '2/4/2015', '2/5/2015', '2/6/2015', '2/7/2015',
            '2/8/2015', '2/9/2015', '2/10/2015', '2/11/2015', '2/12/2015', '2/13/2015', '2/14/2015', '2/15/2015'],
        datasets: [
            {
                label: "Email Mood Rating",
                fillColor: "rgba(0,0,0,0)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.8)",
                data: [1, 2, 2, 1, 3, 1, 2, 2, 3, 2, 1, 2, 2, 3, 3, 2, 4, 4, 3, 5, 4, 5, 4, 4, 5, 4, 4, 5, 5, 4, 3]
            },
            {
                label: "Meeting Mood Rating",
                fillColor: "rgba(0,0,0,0)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,0.8)",
                data: [1, 2, 1, 1, 2, 2, 1, 2, 2, 2, 1, 3, 2, 3, 3, 4, 4, 3, 4, 4, 4, 5, 3, 4, 4, 5, 5, 5, 4, 4, 3]
            }
        ]
    };

    // Fix hit detection for tooltips and scale labels being cutoff.
    var options = {
        pointHitDetectionRadius : 1,
        scaleLabel: "<%= ' ' + value%>",
        responsive: true,
        maintainAspectRatio: true,
        bezierCurve : false
    }

    // Adjust canvas size to parent container size
    var canvas = document.getElementById("dailyMoraleRatingChart");
    //canvas.width = canvas.parentNode.clientWidth;
    //canvas.height = canvas.parentNode.clientHeight;

    var ctx = canvas.getContext("2d");
    new Chart(ctx).Line(data, options);
});