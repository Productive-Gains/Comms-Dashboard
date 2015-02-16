angular.module('dashboardApp').controller("dailyEmailCountByTypeChartCtrl", function ($scope) {
    var data = {
        labels: ['1/16/2015', '1/17/2015', '1/18/2015', '1/19/2015', '1/20/2015', '1/21/2015', '1/22/2015',
            '1/23/2015', '1/24/2015', '1/25/2015', '1/26/2015', '1/27/2015', '1/28/2015', '1/29/2015', '1/30/2015',
            '1/31/2015', '2/1/2015', '2/2/2015', '2/3/2015', '2/4/2015', '2/5/2015', '2/6/2015', '2/7/2015',
            '2/8/2015', '2/9/2015', '2/10/2015', '2/11/2015', '2/12/2015', '2/13/2015', '2/14/2015', '2/15/2015'],
        datasets: [
            {
                label: "External Email",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [4959, 4204, 5556, 4830, 4118, 2970, 2744, 4504, 4104, 3724, 2944, 4244, 4500, 4264, 4910, 4264,
                    4368, 4316, 4200, 4176, 4026, 4002, 4118, 3841, 3685, 3776, 3685, 3604, 3717, 3657, 3408]
            },
            {
                label: "Internal Email",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [6061, 7807, 4554, 5670, 7182, 6930, 7056, 5505, 5906, 6076, 6256, 4576, 4500, 3936, 4590, 3936, 
                    3432, 3984, 3300, 3024, 2574, 2898, 2982, 2160, 1815, 2124, 1815, 1916, 2183, 1643, 1363]
            }
        ]
    };

    // Fix hit detection for tooltips and scale labels being cutoff.
    var options = {
        scaleLabel: "<%= ' ' + value%>",
        responsive: true,
        maintainAspectRatio: true
    }

    // Adjust canvas size to parent container size
    var canvas = document.getElementById("dailyEmailCountByTypeChart");
    //canvas.width = canvas.parentNode.clientWidth;
    //canvas.height = canvas.parentNode.clientHeight;

    var ctx = canvas.getContext("2d");
    new Chart(ctx).StackedBar(data, options);
});