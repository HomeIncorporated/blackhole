(function() {
    'use strict';
    angular
        .module('blackholeApp')
        .factory('GenLedger', GenLedger);

    GenLedger.$inject = ['$resource', 'DateUtils'];

    function GenLedger ($resource, DateUtils) {
        var resourceUrl =  'api/gen-ledger-entries/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.entrydate = DateUtils.convertDateTimeFromServer(data.entrydate);
                    }
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                      data.entrydate = DateUtils.convertDateTimeFromServer(data.entrydate);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                      //data.entrydate = DateUtils.convertLocalDateToServer(data.entrydate);
                    data.entrydate = DateUtils.convertDateTimeFromServer(data.entrydate);
                    return angular.toJson(data);
                }
            }
        });
    }
})();
