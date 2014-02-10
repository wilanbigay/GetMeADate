(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', datacontext]);

    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            var people = [
                { firstName: 'Eldridge', lastName: 'Martinez', age: 25, location: 'Auckland' },
                { firstName: 'Wilan', lastName: 'Bigay', age: 31, location: 'Sta. Catalina' },
                { firstName: 'Christian', lastName: 'Dennis', age: 21, location: 'Sydney' },
                { firstName: 'Kisna', lastName: 'Jumamil', age: 18, location: 'New South Wales' },
                { firstName: 'Duncan', lastName: 'McIntyre', age: 18, location: 'Ropes Crossing' }
            ];
            return $q.when(people);
        }
    }
})();