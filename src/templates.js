angular.module('templates', [])
    .factory('clearTemplateCacheOnRouteChange', ['$rootScope', '$templateCache', ClearTemplateCacheOnRouteChangeFactory]);

function ClearTemplateCacheOnRouteChangeFactory($rootScope, $templateCache) {
    return function() {
        $rootScope.$on('$routeChangeStart', function() {
            $templateCache.removeAll();
        });
    }
}