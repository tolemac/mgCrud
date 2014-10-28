(function (window) {
    "use strict";
    
    window.myModule = window.angular.module('mgCrudSampleModule', ['ngRoute', 'mgCrud', "ngMaterial"]);

    window.myModule.config(function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {templateUrl: "list.html"})
            .when("/edit/:id", {templateUrl: "edit.html"})
            .when("/create", {templateUrl: "create.html"})
            .when("/delete/:id", { templateUrl: "delete.html" })
            .when("/about", { templateUrl: "about.html" })
            .otherwise("/");
    });
    
    window.myModule.config(function (mgHttpProvider) {
        mgHttpProvider.setDefaultConfig({ url: 'http://mgcrudserver.azurewebsites.net/api' }); //'/api' }); //
    });

    jrPeopleIndex.$inject = ['mgIndex'];
    function jrPeopleIndex(mgIndex) {
        return angular.extend(mgIndex, {
            init: 'index.filter={page:0,recordsPerPage:4}'
        });
    }

    window.myModule.factory('jrPeopleIndex', jrPeopleIndex);

}(window));