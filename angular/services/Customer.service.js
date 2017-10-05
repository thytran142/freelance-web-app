export class CustomerService{
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
    getCustomerList(data,cb,err){
    	this.http({
        method: 'GET',
        url: 'api/customers/get',
        headers: this.headers
        }).then(function(response){
          console.log("Response is "+JSON.stringify(response))
          if(cb){
            cb(response.data)
          }
        });
    }
    getCountryList(data,cb,err){
      this.http({
        method: 'GET',
        url: "api/countries/get",
        headers: this.headers
      }).then(function(response){
       // console.log("Response is "+JSON.stringify(response))
        if(cb){
          cb(response.data)
        }
      });
    }
    putCustomer(data,cb,err){
      this.http({
        method: 'PUT',
        url: "api/customers/put",
        headers: this.headers,
        data: data
      }).then(function(response){
        console.log("Response is "+JSON.stringify(response))
        if(cb){
          cb(response.data)
        }
      });
    }
    showCustomer(data,cb,err){
      this.http({
        method: 'POST',
        url: "api/customers/show",
        headers: this.headers,
        data: data
      }).then(function(response){
        console.log("Response is "+JSON.stringify(response))
        if(cb){
          cb(response.data)
        }
      });
    }
    updateCustomer(data,cb,err){
      this.http({
        method: 'POST',
        url: "api/customers/update",
        headers: this.headers,
        data: data
      }).then(function(response){
        console.log("Response is "+JSON.stringify(response))
        if(cb){
          cb(response.data)
        }
      });
    }
    deleteCustomer(data,cb,err){
      this.http({
        method: 'POST',
        url: "api/customers/delete",
        headers: this.headers,
        data: data
      }).then(function(response){
        console.log("Response is "+JSON.stringify(response))
        if(cb){
          cb(response.data)
        }
      });
    }
   
}

