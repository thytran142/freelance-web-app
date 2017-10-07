class InvoicesAddController{
    constructor($state,$scope,InvoiceService,$uibModal, $log,CustomerService){
        'ngInject';
     console.log("Access Invoice Add Controller");
     this.$uibModal = $uibModal
      this.$log = $log
      this.animationsEnabled = true
     this.InvoiceService = InvoiceService
     this.CustomerService = CustomerService
     this.logoImage = ""
     
     this.title = "INVOICE"
     this.business_name = ""
     this.business_address_1 = ""
     this.business_address_city = ""
     this.business_address_country = ""
     this.business_address_contact = ""
        //
    //****************** Retrieve Invoice Default Setting ******************//
        var self = this
        var option = {}
         this.InvoiceService.getInvoiceSetting(option,function(data){
             console.log("Data is "+JSON.stringify(data))
            var data = data.data
            self.logoImage = data.logoImage
            self.business_name = data.businessName
            self.business_address_1 = data.businessAddress1
            self.business_address_city = data.businessAddressCity
            self.business_address_country = data.businessAddressCountry
            self.business_address_contact = data.businessAddressContact
         });

    //****************** Retrieve Invoice Default Setting ******************//
    /***************************Retrieve Countries List **********************/
            var self = this 
            var option = {}
            this.CustomerService.getCountryList(option,function(data){
              //  console.log("Data is "+JSON.stringify(data));
                var data = data.data 
                self.lsCountry = data 
            });
    //*******************End Retrieve Country Listing ********************//
    //******************* Retrieve Customer Listing **********************//
        var self = this
        var option = {}
        this.CustomerService.getCustomerList(option, function(data){
            self.lsCustomer = data.data
       })
    //**************** Retrieve Customer Listing *************************//
    } //End Constructor 
    modalAddressOpen(size) {
    let $uibModal = this.$uibModal
    let $scope = this.$scope
    let $log = this.$log
   
    let businessAddressData = {
        "business_name": this.business_name,
        "business_address_1": this.business_address_1,
        "business_address_city": this.business_address_city,
        "business_address_country": this.business_address_country,
        "business_address_contact": this.business_address_contact,
        "lsCountry": this.lsCountry
    }
    console.log("BusinessAddressData is "+JSON.stringify(businessAddressData))
    var modalInstance = $uibModal.open({
      animation: this.animationsEnabled,
    templateUrl: './views/app/components/invoices-add-address/invoices-add-address.component.html',
      controller: this.modalcontroller,
      controllerAs: 'mvm',
      resolve: {
        businessAddressData: () => {
          return businessAddressData
        }
      }
    })
    modalInstance.result.then((response) => {
        console.log("Response is "+JSON.stringify(response))
        this.business_name = response.business_name
        this.business_address_1 = response.business_address_1
        this.business_address_city = response.business_address_city
        this.business_address_country = response.business_address_country
        this.business_address_contact = response.business_address_contact
    }, () => {
      $log.info('Modal dismissed at: ' + new Date())
    })
   /****************** Re-initialize data ********************/
  
  }
modalcontroller ($scope, $uibModalInstance,businessAddressData) {
    'ngInject'
    this.businessAddressData = businessAddressData
    console.log("Receive businessAddressData is "+JSON.stringify(this.businessAddressData))
    this.business_name = this.businessAddressData.business_name
    this.lsCountry = this.businessAddressData.lsCountry
    this.business_address_1 = this.businessAddressData.business_address_1
    this.business_address_city = this.businessAddressData.business_address_city 
    this.business_address_country = this.businessAddressData.business_address_country 
    this.business_address_contact = this.businessAddressData.business_address_contact 
    this.ok = () => {
      $scope.response = {
      "business_name": this.business_name,
      "business_address_1": this.business_address_1,
      "business_address_city": this.business_address_city,
      "business_address_country": this.business_address_country,
      "business_address_contact": this.business_address_contact
    }
        $uibModalInstance.close($scope.response)
    }

    this.cancel = () => {
      $uibModalInstance.dismiss('cancel')
    }
  }
   
    $onInit(){
    }
}

export const InvoicesAddComponent = {
    templateUrl: './views/app/components/invoices-add/invoices-add.component.html',
    controller: InvoicesAddController,
    controllerAs: 'vm',
    bindings: {}
};
