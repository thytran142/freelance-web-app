class CustomersController{
    constructor($state,$scope,DTOptionsBuilder,DTColumnBuilder,CustomerService,$compile){
        'ngInject';
        this.CustomerService = CustomerService
        this.DTOptionsBuilder = DTOptionsBuilder
        this.DTColumnBuilder = DTColumnBuilder
        this.displayTable = false 
       //***************Retrieve Customers List ********************/
        var self = this
        var option = {}
        this.CustomerService.getCustomerList(option, function(data){
            console.log("Data is "+JSON.stringify(data.data))
            var dataSet = data.data 
            //************Create table *************
            self.dtOptions = self.DTOptionsBuilder.newOptions()
          .withOption('data', dataSet)
          .withOption('createdRow', createdRow)
          .withOption('responsive', true)
          .withBootstrap()
             self.dtColumns = [
          DTColumnBuilder.newColumn('name').withTitle('Name'),
          DTColumnBuilder.newColumn('email').withTitle('Email'),
          DTColumnBuilder.newColumn('phone').withTitle('Phone'),
          DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
            .renderWith(actionsHtml)
        ]
            self.displayTable = true 
        });
        let createdRow = (row) => {
            $compile(angular.element(row).contents())($scope)
        }
        let actionsHtml = (data) => {
            return `
                <a class="btn btn-xs btn-warning" ui-sref="app.customersedit({customerId: ${data.id}})">
                    <i class="fa fa-edit"></i>
                </a>
                &nbsp
                <button class="btn btn-xs btn-danger" ng-click="vm.delete(${data.id})">
                    <i class="fa fa-trash-o"></i>
                </button>`
         }   
        //**************End Retrieve Customers List *****************/
    }
    delete(id){
     
      var option = {
        "id": id
      };
      var self = this
      console.log("Option is "+JSON.stringify(option))
      this.CustomerService.deleteCustomer(option,function(data){
          console.log("Data is "+JSON.stringify(data))
          self.$state.reload()
        });
     
    }
    $onInit(){
    }

}

export const CustomersComponent = {
    templateUrl: './views/app/components/customers/customers.component.html',
    controller: CustomersController,
    controllerAs: 'vm',
    bindings: {}
};
