alsharq.controller('HomeController', [
    '$scope',
    'Article',
    '$mdToast',
    function($scope, Article, $mdToast){

        // display all feedPAP
        $scope.articles = [];
        $scope.count = 1;

        function load(){
            Article.all($scope.count).then(function(data){
                data.data.results = data.data.results.reverse();
                $scope.articles = $scope.articles.concat(data.data.results);
                $scope.$broadcast('scroll.refreshComplete');
            }, function(e){
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('there is an error while loading, please try again.')
                    .hideDelay(3000)
                );
            });
        }
        load();

        $scope.more = function(){
            $scope.count++;
            load();
        };

        $scope.refresh = function(){
            $scope.count    = 1;
            $scope.articles = [];
            load();
        };
    }
]);
