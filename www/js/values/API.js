franchise.constant('API', (function(){

    var URL = "http://www.franchise.com/api/";

    // Update User Device -> don't forget it

    return {
        /**
         * @method POST
         * @send {
         *     email: "",
         *     fullname: "",
         *     password: ""
         * }
         * @return {
         *     token: "75eb9e7afaedd82653b4b5eed00a9ecfdb26d835",
         *     user: {}
         * }
         */
        "POST_REGISTER": URL + "user/register",

        /**
         * @method POST
         * @send {
         *     email: "",
         *     password: ""
         * }
         * @return {
         *     token: "75eb9e7afaedd82653b4b5eed00a9ecfdb26d835",
         *     user: {
         *         "email": "rakan.alhneiti123@gmail.com",
         *         "facebook_connected": false,
         *         "first_name": "Rakan",
         *         "google_connected": false,
         *         "id": 6,
         *         "is_registered": true,
         *         "last_name": "Alhneiti",
         *         "profile_pic": null
         *     }
         * }
         */
        "POST_LOGIN": URL + "user/login",

        /**
         * @method POST
         * @send {
         *     email: "",
         *     full_name: "",
         *     password: "",
         *     google_token: "",
         *     facebook_token: ""
         * }
         * @return {
         *     created: false,
         *     token: "75eb9e7afaedd82653b4b5eed00a9ecfdb26d835",
         *     user: {
         *         "email": "rakan.alhneiti123@gmail.com",
         *         "facebook_connected": false,
         *         "first_name": "Rakan",
         *         "google_connected": false,
         *         "id": 6,
         *         "is_registered": true,
         *         "last_name": "Alhneiti",
         *         "profile_pic": null
         *     }
         * }
         */
        "POST_LOGIN": URL + "user/register_social",

        /**
         * @method POST
         * @send {
         *     device_id: "",
         * }
         * @return {
         *     token: "75eb9e7afaedd82653b4b5eed00a9ecfdb26d835",
         *     user: {
         *         "email": "rakan.alhneiti123@gmail.com",
         *         "facebook_connected": false,
         *         "first_name": "Rakan",
         *         "google_connected": false,
         *         "id": 6,
         *         "is_registered": false,
         *         "last_name": "Alhneiti",
         *         "profile_pic": null
         *     }
         * }
         */
        "POST_LOGIN": URL + "user/guest",

        /**
         * @method POST
         * @send {}
         * @return {
         *     "message": "successfully logged out"
         * }
         */
        "POST_LOGIN": URL + "user/logout",

        /**
         * @method GET
         * @send {}
         * @return {
         *     "email": "rakan.alhneiti123@gmail.com",
         *     "facebook_connected": false,
         *     "first_name": "Rakan",
         *     "google_connected": false,
         *     "id": 6,
         *     "is_registered": true,
         *     "last_name": "Alhneiti",
         *     "profile_pic": null
         * }
         */
        "GET_PROFILE": URL + "user",

        /**
         * @method POST
         * @send {
         *     full_name: "",
         *     password: "".
         *     profile_pic: "" (File upload) (Content-Type: Multipart/form-data)
         * }
         * @return {
         *     "email": "rakan.alhneiti123@gmail.com",
         *     "facebook_connected": false,
         *     "first_name": "Rakan",
         *     "google_connected": false,
         *     "id": 6,
         *     "is_registered": true,
         *     "last_name": "Alhneiti",
         *     "profile_pic": null
         * }
         */
        "POST_PROFILE": URL + "user",

        /**
         * @method POST
         * @send {}
         * @return {
         *     "message": "password reseted"
         * }
         */
        "POST_RESET_PASSWORD": URL + "user/forgot_password",

        /**
         * @method GET
         * @send {
         *     page: 2,
         * }
         * @return {
         *     "count": 1,
         *     "next": null,
         *     "previous": null,
         *     "results": [
         *         {
         *             "code": "jo",
         *             "id": 1,
         *             "name": "Jordan"
         *         }
         *      ]
         * }
         */
        "GET_COUNTRIES": URL + "country/list",

        /**
         * @method GET
         * @send {
         *     page: 2,
         * }
         * @return {
         *     "count": 1,
         *     "next": null,
         *     "previous": null,
         *     "results": [
         *         {
         *             "code": "jo",
         *             "id": 1,
         *             "name": "Jordan"
         *         }
         *      ]
         * }
         */
        "GET_MY_COUNTRIES": URL + "country/mine",

        /**
         * @method POST
         * @send {
         *     ids: "2,5,6,7,8",
         * }
         * @return
         *     Status 200 on sucess
         *     Status 400 on fails
         */
        "POST_ADD_COUNTRY": URL + "country/add",

        /**
         * @method POST
         * @send {
         *     ids: "2,5,6,7,8",
         * }
         * @return
         *     Status 200 on sucess
         *     Status 400 on fails
         */
        "POST_REMOVE_COUNTRY": URL + "country/remove",

        /**
         * @method GET
         * @send {
         *     page: 2,
         * }
         * @return
         *     "count": 1,
         *     "next": null,
         *     "previous": null,
         *     "results": [
         *         {
         *             "id": 1,
         *             "name": "Jordan"
         *             "subscribed": "jo",
         *         }
         *      ]
         * }
         */
        "GET_INTERESTS": URL + "interest/list",

        /**
         * @method GET
         * @send {
         *     page: 2,
         * }
         * @return
         *     "count": 1,
         *     "next": null,
         *     "previous": null,
         *     "results": [
         *         {
         *             "id": 1,
         *             "name": "Jordan"
         *             "subscribed": "jo",
         *         }
         *      ]
         */
        "GET_MY_INTERESTS": URL + "interest/mine",

        /**
         * @method POST
         * @send {
         *     ids: "2,5,6,7,8",
         * }
         * @return
         *     Status 200 on sucess
         *     Status 400 on fails
         */
        "POST_INTEREST": URL + "interest/add",

        /**
         * @method POST
         * @send {
         *     ids: "2,5,6,7,8",
         * }
         * @return
         *     Status 200 on sucess
         *     Status 400 on fails
         */
        "POST_REMOVE_INTEREST": URL + "interest/remove",

        /**
         * @method GET
         * @send {
         *     page: 2,
         * }
         * @return
         *     "count": 1,
         *     "next": null,
         *     "previous": null,
         *     "results": [
         *         {
         *             "id": 1,
         *             "name": "Jordan"
         *             "image": {
         *                 "caption": "asdas",
         *                 "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
         *                 "height": 300,
         *                 "width": 200
         *              },
         *          }
         *      ]
         * }
         */
        "GET_WEBSITES": URL + "website/list",

        /**
         * @method GET
         * @send {
         *     page: 2,
         * }
         * @return
         *     "count": 1,
         *     "results": [
         *         {
         *             "id": 1,
         *             "is_subscribed": null,
         *             "title": "نبض الشارع",
         *             "type": "category",
         *             "name": "Khaberni"
         *             "website": {
         *                 "id": 1,
         *                 "image": {
         *                     "caption": "asdas",
         *                     "file": "http://192.168.0.10:8080/media/images/2016/06/18/image.gif",
         *                     "height": 300,
         *                     "width": 200
         *                 },
         *             }
         *         }
         *      ]
         * }
         */
        "GET_FEED": URL + "feed/list",

        /**
         * @method POST
         * @send {
         *     feed_id: 2,
         * }
         * @return
         *     Status 200 on sucess
         *     Status 400 on fails
         */
        "POST_FEED": URL + "feed/subscribe",

        /**
         * @method POST
         * @send {
         *     feed_id: 2,
         * }
         * @return
         *     Status 200 on sucess
         *     Status 400 on fails
         */
        "POST_NOTIFY_FEED": URL + "feed/notify",

        /**
         * @method POST
         * @send {
         *     filters = [
         *         {
         *             “type”: “country”,
         *             “name”: “jordan”
         *         },
         *         {
         *             “type”: “interest”,
         *             “name”: “local”
         *         },
         *         {
         *             “type”: “keyword”,
         *             “name”: “داعش”
         *         },
         *         {
         *             “type”: “category”,
         *             “id”: 2,
         *         }
         *     ]
         * }
         * @return {
         *     "count": 1,
         *     "results": [
         *         {
         *             "body": " ",
         *             "channel_id": 1,
         *             "channel_name": "نبض الشارع",
         *             "channel_type": "category",
         *             "country_id": [ 1 ],
         *             "country_name": [
         *                 "Jordan"
         *             ],
         *             "date_published": "2016-03-13T21:36:00",
         *             "interest_id": [ 1 ],
         *             "interest_name": [ "Local" ],
         *             "is_favorite": false,
         *             "is_readlater": false,
         *             "item_id": "336",
         *             "photos": [
         *                 "http://192.168.0.10:8080/media/images/2016/03/14/1457908553_JyY9BxE.jpg",
         *             ],
         *             "status": 1,
         *             "summary": "article content",
         *             "thumbnail": null,
         *             "title": "الطراونة: نفس حزبي بشعارات المعتصمين - فيديو",
         *             "url": "http://192.168.0.10:8080/article/336",
         *             "videos": null,
         *             "website_id": 1,
         *             "website_image": null,
         *             "website_name": "Khaberni"
         *         }
         *     ]
         * }
         */
        "POST_NEWSFEED": URL + "newsfeed",

        /**
         * @method GET
         * @send {
         *     feed_id: "",
         *     page: 2,
         *     OR
         *     article_id: "",
         * }
         * @return {
         *     "count": 2,
         *     "results": [
         *         {
         *             "body": " ",
         *             "channel_id": 1,
         *             "channel_name": "نبض الشارع",
         *             "channel_type": "category",
         *             "country_id": [ 1 ],
         *             "country_name": [
         *                 "Jordan"
         *             ],
         *             "date_published": "2016-03-13T21:36:00",
         *             "interest_id": [ 1 ],
         *             "interest_name": [ "Local" ],
         *             "is_favorite": false,
         *             "is_readlater": false,
         *             "item_id": "336",
         *             "photos": [
         *                 "http://192.168.0.10:8080/media/images/2016/03/14/1457908553_JyY9BxE.jpg",
         *             ],
         *             "status": 1,
         *             "summary": "article content",
         *             "thumbnail": null,
         *             "title": "الطراونة: نفس حزبي بشعارات المعتصمين - فيديو",
         *             "url": "http://192.168.0.10:8080/article/336",
         *             "videos": null,
         *             "website_id": 1,
         *             "website_image": null,
         *             "website_name": "Khaberni"
         *         }
         *     ]
         * }
         */
        "GET_ARTICLES": URL + "article/list",
    }
})());



























