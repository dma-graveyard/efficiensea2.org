/**
 * The main EfficienSea2 directives
 */
angular.module('efficiensea2.app')

    .directive('partners', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: '/partials/partner-for-country.html',
            replace: true,
            scope: {
                partners: "=",
                country: "@",
                countryName: "@"
            },
            link: function(scope, element, attrs) {
                scope.partners = partners;
            }
        };
    }]);
