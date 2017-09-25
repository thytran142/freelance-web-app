class FreelanceChannelsAddController{
    constructor($state,$stateParams,FreelanceChannelServiceService){
        'ngInject';
    this.$state = $state
    this.FreelanceChannelService = FreelanceChannelServiceService
    this.formSubmitted = false
    this.alerts = []
    this.$state = $state 
        if ($stateParams.alerts) {
            this.alerts.push($stateParams.alerts)
        }

    }
    save (isValid) {
    if (isValid) {
      let $state = this.$state
      let self = this 
      var option = {
        "name": this.name,
        "url": this.url,
        "number_first_hour": this.number_first_hour,
        "rate_first_hour_hourly": this.rate_first_hour_hourly,
        "rate_first_hour_fixed": this.rate_first_hour_fixed,
        "number_second_hour": this.number_second_hour,
        "rate_second_hour_hourly": this.rate_second_hour_hourly,
        "rate_second_hour_fixed": this.rate_second_hour_fixed,
        "rate_hourly_onward": this.rate_hourly_onward,
        "rate_hourly_fixed": this.rate_hourly_fixed,
        "min_charge": this.min_charge
      }
      console.log("option is "+JSON.stringify(option));
      this.FreelanceChannelService.putFreelanceChannel(option,function(data){
        console.log("Data is "+JSON.stringify(data));
        if(data.data == "success"){
            let alert = { type: 'success', 'title': 'Success!', msg: 'Successfully add a new freelance channel' }
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

export const FreelanceChannelsAddComponent = {
    templateUrl: './views/app/components/freelance-channels-add/freelance-channels-add.component.html',
    controller: FreelanceChannelsAddController,
    controllerAs: 'vm',
    bindings: {}
};
