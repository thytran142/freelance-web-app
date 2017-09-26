export class FreelanceChannelServiceService{
    constructor($rootScope,$window,$http){
        'ngInject';
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
        //
    }
    getFreelanceChannelList(data,cb,err){
    	this.http({
        method: 'GET',
        url: 'api/freelances/get',
        headers: this.headers
        }).then(function(response){
          console.log("Response is "+JSON.stringify(response))
          if(cb){
            cb(response.data)
          }
        });
    }
    putFreelanceChannel(data,cb,err){
    console.log("Passed data is "+data)
    this.http({
        method: 'PUT',
        url: 'api/freelances/put',
        headers: this.headers,
        data: data
        }).then(function(response){
          if(cb){
            cb(response.data)
          }
        });
      }
    showFreelanceChannel(data,cb,err){
      console.log("Passed data is "+data)
     this.http({
        method: 'POST',
        url: 'api/freelances/show',
        headers: this.headers,
        data: data
        }).then(function(response){
          if(cb){
            cb(response.data)
          }
        });
      }
    updateFreelanceChannel(data,cb,err){
      console.log("Passed data is "+data)
      this.http({
        method: 'POST',
        url: 'api/freelances/update',
        headers: this.headers,
        data: data
        }).then(function(response){
          if(cb){
            cb(response.data)
          }
        });
    }
}

