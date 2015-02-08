angular.module('dashboardApp').config(function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $routeProvider.
            when('/', {
                templateUrl: 'views/charts/charts.html',
                controller: 'navCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
        //    .when('/register', {
        //    controller: 'RegisterCtrl',
        //    templateUrl: 'views/register.html'
        //}).when('/posts', {
        //    controller: 'PostsCtrl',
        //    templateUrl: 'views/register.html'
        //}).when('/meetingareas', {
        //    controller: 'MeetingAreasCtrl',
        //    templateUrl: 'views/meetingAreas.html'
        //}).when('/logout', {
        //    controller: 'LogoutCtrl',
        //    templateUrl: 'views/logout.html'
        //}).when('/login', {
        //    controller: 'LoginCtrl',
        //    templateUrl: 'views/login.html'
        //})
    }
)




