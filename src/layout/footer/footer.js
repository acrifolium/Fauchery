class footerCtrl {
    constructor () {
        console.log('footer component');
    }
}

angular
    .module('app')
    .component('footer', {
        bindings: {

        },
        templateUrl: 'footer.html',
        controller: footerCtrl
    });