angular.module('dashboardApp').controller("dailyCountOfEmailsReadOutsideOfWorkChartCtrl", function ($scope) {
    var data = {
        labels: ['1/16/2015', '', '1/18/2015', '', '1/20/2015', '', '1/22/2015',
            '', '1/24/2015', '', '1/26/2015', '', '1/28/2015', '', '1/30/2015',
            '', '2/1/2015', '', '2/3/2015', '', '2/5/2015', '', '2/7/2015',
            '', '2/9/2015', '', '2/11/2015', '', '2/13/2015', '', '2/15/2015'],
        datasets: [
            {
                label: "Emails Read Late Evening",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [200, 210, 198, 201, 215, 
                    220, 210, 210, 200, 190, 
                    180, 185, 160, 162, 150,
                    140, 145, 130, 120, 110,
                    100, 90, 80, 70, 60,
                    50, 40, 30, 20, 10, 5]
            },
            {
                label: "Emails Read After Work",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [1000, 900, 1050, 950, 1025,
                    1000, 990, 1050, 900, 950,
                    800, 850, 700, 750, 600, 
                    650, 600, 500, 550, 525,
                    450, 475, 400, 350, 375,
                    300, 200, 250, 100, 150,
                    75]
            },
            {
                label: "Emails Read Before Work",
                fillColor: "rgba(247,70,74,0.2)",
                strokeColor: "rgba(247,70,74,1)",
                highlightFill: "#fff",
                highlightStroke: "rgba(247,70,74,0.8)",
                data: [1200, 1150, 1250, 1100, 1125, 
                    1175, 1210, 1150, 1100, 1110, 
                    1000, 950, 975, 800, 850, 
                    700, 750, 600, 650, 675, 
                    500, 550, 450, 500, 400, 
                    350, 375, 250, 200, 150,
                    100]
            },
            {
                label: "Emails Read in Early Morning",
                fillColor: "rgba(70,191,189,0.2)",
                strokeColor: "rgba(70,191,189,1)",
                highlightFill: "#fff",
                highlightStroke: "rgba(70,191,189,0.8)",
                data: [250, 225, 240, 260, 230,
                    250, 220, 225, 200, 150, 
                    180, 150, 140, 130, 120, 
                    100, 90, 80, 70, 60,
                    50, 40, 30, 20, 10, 
                    15, 10, 8, 7, 20, 4]
            }
        ]
    };

    // Fix hit detection for tooltips and scale labels being cutoff.
    var options = {
        scaleLabel: "<%= ' ' + value%>",
        responsive: true,
        maintainAspectRatio: true,
        legendTemplate : '<% for (var i=0; i<datasets.length; i++) { %>'
        +'<% if (i > 0 && i % 2 == 0) { %><br><% } %>'
        +'<span><div style="width: 10px; height:10px; display: inline-block; background-color: <%=datasets[i].strokeColor%>;"></div>'
        +'<% if (datasets[i].label) { %>'
        +'&nbsp;<%= datasets[i].label %>&nbsp;&nbsp;&nbsp;&nbsp;'
        +'<% } %>'
        +'</span>'
        +'<% } %>'
    }

    // Adjust canvas size to parent container size
    var canvas = document.getElementById("dailyCountOfEmailsReadOutsideOfWorkChart");
    //canvas.width = canvas.parentNode.clientWidth;
    //canvas.height = canvas.parentNode.clientHeight;

    var ctx = canvas.getContext("2d");
    var chart = new Chart(ctx).StackedBar(data, options);

    var legend = chart.generateLegend();
    document.getElementById("dailyCountOfEmailsReadOutsideOfWorkChartLegend").innerHTML = legend;
});