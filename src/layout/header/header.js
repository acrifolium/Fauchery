class headerCtrl {
    constructor () {
        console.log('header component');
    }
}

angular
    .module('app')
    .component('header', {
        bindings: {

        },
        templateUrl: 'header.html',
        controller: headerCtrl
    });