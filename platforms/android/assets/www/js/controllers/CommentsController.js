alsharq.controller('CommentsController', [
    '$rootScope',
    '$scope',
    '$mdDialog',
    'Comment',
    'Popup',
    'Storage',
    'article',
    function($rootScope, $scope, $mdDialog, Comment, Popup, Storage, article){
        $scope.article = article;
        $rootScope.commCount;
        $scope.commResults = [];
        $scope.commNew = {
            article_id: $scope.article.item_id,
            comment: ""
        };

        Comment.all($scope.article.item_id).then(function(data){
            $scope.commResults = data.data.results;
        }, function(e){
            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
        });

        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };


        $scope.count = function(){
            Comment.count($scope.article.item_id).then(function(data){
                $rootScope.commCount = data.message;
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        };

        $scope.add = function(){
            if ($scope.commNew.comment == "") {
                Popup.showError('اكتب تعليق اولا.');
                return;
            }

            Comment.add($scope.commNew).then(function(data){
                var user = JSON.parse( Storage.get('user') );
                $scope.$parent.commCount = $scope.$parent.commCount + 1;
                console.log($scope.$parent.commCount);
                $scope.commResults.unshift({
                    "comment": $scope.commNew.comment,
                    "user": {
                        "first_name":  user.first_name,
                        "last_name":   user.last_name,
                        "profile_pic": user.profile_pic
                    }
                });
                $scope.commNew.comment = "";
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        }
    }
]);