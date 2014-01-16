describe('templates', function () {
    beforeEach(module('test-app'));

    describe('given there are templates in the cache', function () {
        beforeEach(inject(function ($templateCache) {
            $templateCache.put('key', 'value');
            $templateCache.put('another key', 'another value');
        }));

        describe('and a route change start notification is raised', function () {
            beforeEach(inject(function ($rootScope) {
                $rootScope.$broadcast('$routeChangeStart');
            }));

            it('then cache should be empty', inject(function ($templateCache) {
                expect($templateCache.info().size).toEqual(0);
            }));
        });
    });
});

angular.module('test-app', ['templates'])
    .run(['clearTemplateCacheOnRouteChange', function(sweeper) {
        sweeper();
    }]);
