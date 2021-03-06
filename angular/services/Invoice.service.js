export class InvoiceService{
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
    }//end Constructor
    getInvoiceSetting(data,cb,err){
    	this.http({
        method: 'GET',
        url: 'api/invoices/get-setting',
        headers: this.headers
        }).then(function(response){
          console.log("Response is "+JSON.stringify(response))
          if(cb){
            cb(response.data)
          }
        });
    }
}

