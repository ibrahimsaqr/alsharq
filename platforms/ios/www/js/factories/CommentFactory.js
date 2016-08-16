alsharq.factory('Comment', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            count: function(id)  { return $http.get( API.COMMENTS_COUNT, { params: { 'id': id } }); },
            all:   function(id)  { return $http.get( "http://sharq.premaerp.com/api/v1/comments/?id=" + Number(id) ); },
            add:   function(data){ return $http.post(API.ADD_COMMENTS, data); }
        }
    }
]);
