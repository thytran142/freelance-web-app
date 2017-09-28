class CustomersEditController{
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
         /************************ Retrieve Customer *******************/
        var self = this
        this.customerId = $stateParams.customerId
        console.log("Customer Id is "+this.customerId)
        var option = {
            "id": this.customerId
        };
        console.log("Option is "+JSON.stringify(option))
        this.CustomerService.showCustomer(option,function(data){
            console.log("Data is "+JSON.stringify(data))
            var data = data.data 
            self.name = data.name
            self.email = data.email
            self.first_name = data.first_name
            self.last_name = data.last_name 
            self.currency = data.currency 
            self.account_number = data.account_number 
            self.phone = data.phone 
            self.fax = data.fax 
            self.website = data.website 
            self.country = data.country 
            self.address = data.address 
            self.postal_code = data.postal_code 
            self.city = data.city 
        });
        /************************End  Retrieve Customer *******************/
    }
    save (isValid) {
    if (isValid) {
      let $state = this.$state
      let self = this 
      var option = {
        "id": this.customerId,
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
      this.CustomerService.updateCustomer(option,function(data){
        console.log("Data is "+JSON.stringify(data));
        if(data.data == "success"){
            let alert = { type: 'success', 'title': 'Success!', msg: 'Successfully update a customer channel' }
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

export const CustomersEditComponent = {
    templateUrl: './views/app/components/customers-edit/customers-edit.component.html',
    controller: CustomersEditController,
    controllerAs: 'vm',
    bindings: {}
};
