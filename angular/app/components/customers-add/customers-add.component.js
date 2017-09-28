class CustomersAddController{
    constructor($stateParams,$state,CustomerService){
        'ngInject';
        this.$state = $state
        this.formSubmitted = false
        this.alerts = []
        this.CustomerService = CustomerService 

        if($stateParams.alerts){
            this.alerts.push($stateParams.alerts)
        }
        /***************************Retrieve Countries List **********************/
            var self = this 
            var option = {}
            this.CustomerService.getCountryList(option,function(data){
                console.log("Data is "+JSON.stringify(data));
                var data = data.data 
                self.lsCountry = data 
            });
        /***************************End Retrieve Countries List *******************/
      
    }
    save (isValid) {
    if (isValid) {
      let $state = this.$state
      let self = this 
      var option = {
        "name": this.name,
        "email": this.email,
        "first_name": this.first_name,
        "last_name": this.last_name,
        "currency": this.currency,
        "account_number": this.account_number,
        "phone": this.phone,
        "fax": this.fax,
        "website": this.website,
        "country": this.country,
        "address": this.address,
        "postal_code": this.postal_code,
        "city": this.city
      };
      console.log("option is "+JSON.stringify(option));
      this.CustomerService.putCustomer(option,function(data){
        console.log("Data is "+JSON.stringify(data));
        if(data.data == "success"){
            let alert = { type: 'success', 'title': 'Success!', msg: 'Successfully add a new customer channel' }
            self.alerts.push(alert)
        }else{
            let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
            self.alerts.push(alert)
        }
      });
      this.formSubmitted = true
    } else {
      this.formSubmitted = true
    }
  }
    $onInit(){
    }
}

export const CustomersAddComponent = {
    templateUrl: './views/app/components/customers-add/customers-add.component.html',
    controller: CustomersAddController,
    controllerAs: 'vm',
    bindings: {}
};
