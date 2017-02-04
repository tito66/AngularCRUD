(function() {
    'use strict';

    angular
        .module('app.user')
        .factory('UserForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'user',
                    type: 'input',
                    templateOptions: {
                        label: 'User:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'email',
                    type: 'input',
                    templateOptions: {
                        label: 'Email:',
                        disabled: disabled,
                        required: true
                    }
                },                
                {
                    key: 'password',
                    type: 'input',
                    templateOptions: {
                        label: 'Password:',
                        disabled: disabled
                    }
                }
            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
