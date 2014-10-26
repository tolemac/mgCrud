(function (window, undefined) {
    
    window.myModule = angular.module('mgCrudSampleModule', ['ngRoute', 'ngMaterial', 'mgCrud']);
    
    window.myModule.config(function ($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {templateUrl:"list.html"})
            .when("/edit/:id", {templateUrl:"edit.html"})
            .when("/create", {templateUrl:"create.html"})
            .when("/delete/:id", {templateUrl:"delete.html"})
            .otherwise("/");
    });    
}(window));