angular.module('dashboardApp').controller('navCtrl', function ($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});