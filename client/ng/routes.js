angular.module('dashboardApp').config(function ($routeProvider) {
        //$locationProvider.html5Mode(true);
        $routeProvider.
            when('/', {
                templateUrl: 'views/tabs/overview.html',
                controller: 'navCtrl'
            }).
            when('/overview', {
                templateUrl: 'views/tabs/overview.html',
                controller: 'navCtrl'
            }).
            when('/meeting', {
                templateUrl: 'views/tabs/meeting.html',
                controller: 'navCtrl'
            }).
            when('/email', {
                templateUrl: 'views/tabs/email.html',
                controller: 'navCtrl'
            }).
            when('/morale', {
                templateUrl: 'views/tabs/morale.html',
                controller: 'navCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
)




