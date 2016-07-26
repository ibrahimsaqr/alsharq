alsharq.controller('ArticleController', [
    '$scope',
    '$routeParams',
    'Comment',
    'Popup',
    'Article',
    '$mdDialog',
    function($scope, $routeParams, Comment, Popup, Article, $mdDialog){
        $scope.article = {};
        $scope.articleJS = angular.element(document.getElementById('article'));

        // increase count of readinf for article, no need th retrieve any thing.
        Article.read($routeParams.id);

        Article.find({ "article_id": $routeParams.id }).then(function(data){
            $scope.article = data.data.results[0];
        }, function(e){
            Popup.showError('can\'t load the article', 'please try again.');
        });

        Comment.count($routeParams.id).then(function(data){
            $scope.commCount = data.data.message;
        }, function(e){
            Popup.showError('there is an error, please try again.');
        });



        $scope.share = function(){
            var options = {
                message: 'Share', // not supported on some apps (Facebook, Instagram)
                subject: 'Read this ' + $scope.article.title, // fi. for email
                url: $scope.article.url,
                chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
            };
            function onSuccess(data){
                console.log(data);
            };
            function onError(msg){
                console.log(msg);
            };
            window.plugins.socialsharing.share(options, onSuccess, onError);
        };

        $scope.favorite = function(){
            
            if ( $scope.articleJS.hasClass('favorite') ) {
                Article.favoriteRemove($scope.article.item_id).then(function(data){
                    $scope.articleJS.removeClass('favorite');
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('removed from favourite!')
                        .hideDelay(3000)
                    );
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            } else {
                Article.favoriteAdd($scope.article.item_id).then(function(data){
                    $scope.articleJS.addClass('favorite');
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('added to favourite!')
                        .hideDelay(3000)
                    );
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            }
        };

        $scope.later = function(){
            if ( $scope.articleJS.hasClass('later') ) {
                Article.laterRemove($scope.article.item_id).then(function(data){
                    $scope.articleJS.removeClass('later');
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('removed from Later!')
                        .hideDelay(3000)
                    );
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            } else {
                Article.laterAdd($scope.article.item_id).then(function(data){
                    $scope.articleJS.addClass('later');
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('added to later!')
                        .hideDelay(3000)
                    );
                }, function(e){
                    Popup.showError('there is an error, please try again.');
                });
            }
        };

        $scope.resize = function(num) {
            var body = document.getElementById('article-body');
            if (body.style.fontSize == "") {
                body.style.fontSize = "1.0em";
            }
            body.style.fontSize = parseFloat(body.style.fontSize) + (num * 0.2) + "em";
        }
        
        $scope.showComments = function(ev){
            $mdDialog.show({
                controller: 'CommentsController',
                templateUrl: 'views/comments.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:false,
                fullscreen: true,
                locals: {
                    article: $scope.article
                },
            }).then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
        };
    }
]);
