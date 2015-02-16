angular.module('dashboardApp').controller("lineCtrl", function ($scope) {
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.dailyProductivityRatingLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.dailyProductivityRatingSeries = ['Series A', 'Series B'];
    $scope.dailyProductivityRatingData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.dailyAverageMeetingCostsLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.dailyAverageMeetingCostsSeries = ['Series A', 'Series B'];
    $scope.dailyAverageMeetingCostsData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.dailyAverageMeetingSizeLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.dailyAverageMeetingSizeSeries = ['Series A', 'Series B'];
    $scope.dailyAverageMeetingSizeData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
});