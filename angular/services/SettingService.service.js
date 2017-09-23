export class SettingServiceService{
    constructor ($auth, $rootScope, API,$window,$http) {
    'ngInject'
    this.$auth = $auth
    this.API = API
    this.$rootScope = $rootScope
    this.$window = $window
    this.http = $http
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/x.laravel.v1+json'
    }
    var token = $window.localStorage.satellizer_token
    if (token) {
            headers.Authorization = 'Bearer ' + token
            console.log("Token is "+token)
    }
    this.headers = headers 
  }
   getSetting(data,cb,err){
   this.http({
        method: 'GET',
        url: 'api/settings/get',
        headers: this.headers
        }).then(function(response){
          console.log("Response is "+JSON.stringify(response))
          if(cb){
            cb(response.data)
          }
        });
      }
   putSetting(data,cb,err){
    console.log("Passed data is "+data)
    this.http({
        method: 'PUT',
        url: 'api/settings/put',
        headers: this.headers,
        data: data
        }).then(function(response){
          if(cb){
            cb(response.data)
          }
        });
      }
 }

