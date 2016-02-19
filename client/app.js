var myApp = angular.module('myApp', ['ngRoute', 'angularMoment']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'static/partials/dashboard.html'
    })
    .when('/products',{
        templateUrl: 'static/partials/products.html'
    })
    .when('/customers',{
        templateUrl: 'static/partials/customers.html'
    })
    .when('/orders',{
        templateUrl: 'static/partials/orders.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
