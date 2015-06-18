/**
 * The main EfficienSea2 controller
 */
angular.module('efficiensea2.app')

    .controller('MenuCtrl', ['$scope',
        function ($scope) {
            'use strict';

            $scope.countries = countries;

        }])

    .controller('HomeCtrl', ['$scope',
        function ($scope) {
            'use strict';

            $scope.partners = partners;

            $scope.init = function () {
            };

        }])

    .controller('PartnerCtrl', ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            'use strict';

            $scope.c = $routeParams.country;
            $scope.partners = partners;
            $scope.countries = countries;

        }]);

