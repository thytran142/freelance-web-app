class FreelanceChannelsController{
    constructor($scope,DTOptionsBuilder,DTColumnBuilder,FreelanceChannelServiceService){
        'ngInject';
        console.log("Access FreelanceChannelsController")
        this.FreelanceChannelService = FreelanceChannelServiceService
        this.DTOptionsBuilder = DTOptionsBuilder
        this.DTColumnBuilder = DTColumnBuilder
        this.displayTable = false 
        //***************Retrieve Freelance Channels List ********************/
        var self = this
        var option = {}
        this.FreelanceChannelService.getFreelanceChannelList(option, function(data){
            console.log("Data is "+JSON.stringify(data.data))
            var dataSet = data.data 
            //************Create table *************
            self.dtOptions = self.DTOptionsBuilder.newOptions()
          .withOption('data', dataSet)
          .withOption('createdRow', createdRow)
          .withOption('responsive', true)
          .withBootstrap()
             self.dtColumns = [
          DTColumnBuilder.newColumn('id').withTitle('ID'),
          DTColumnBuilder.newColumn('name').withTitle('Name'),
          DTColumnBuilder.newColumn('url').withTitle('URL'),
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
                <a class="btn btn-xs btn-warning" ui-sref="app.freelancechanneledit({freelancenId: ${data.id}})">
                    <i class="fa fa-edit"></i>
                </a>
                &nbsp
                <button class="btn btn-xs btn-danger" ng-click="vm.delete(${data.id})">
                    <i class="fa fa-trash-o"></i>
                </button>`
         }   
        //**************End Retrieve Freelance Channels List *****************/
    }

    $onInit(){
    }
}

export const FreelanceChannelsComponent = {
    templateUrl: './views/app/components/freelance_channels/freelance_channels.component.html',
    controller: FreelanceChannelsController,
    controllerAs: 'vm',
    bindings: {}
};
