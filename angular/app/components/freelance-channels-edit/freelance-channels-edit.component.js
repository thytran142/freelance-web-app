class FreelanceChannelsEditController{
    constructor($stateParams,$state,FreelanceChannelServiceService){
        'ngInject';
        this.$state = $state
        this.formSubmitted = false 
        this.alerts = []
        this.FreelanceChannelService = FreelanceChannelServiceService

        if($stateParams.alerts){
            this.alerts.push($stateParams.alerts)
        }
        /************************ Retrieve Freelance Channel *******************/
        var self = this
        this.channelId = $stateParams.channelId
        console.log("Channel Id is "+this.channelId)
        var option = {
            "id": this.channelId
        };
        console.log("Option is "+JSON.stringify(option))
        this.FreelanceChannelService.showFreelanceChannel(option,function(data){
            console.log("Data is "+JSON.stringify(data))
            var data = data.data
            self.name = data.name
            self.url = data.url
            self.number_first_hour = data.number_first_hour
            self.rate_first_hour_hourly = data.rate_first_hour_hourly
            self.rate_first_hour_fixed = data.rate_first_hour_fixed
            self.number_second_hour = data.number_second_hour
            self.rate_second_hour_hourly = data.rate_second_hour_hourly
            self.rate_second_hour_fixed = data.rate_second_hour_fixed 
            self.rate_hourly_onward = data.rate_hourly_onward
            self.rate_hourly_fixed = data.rate_hourly_fixed 
            self.min_charge = data.min_charge 
        });
        /************************End  Retrieve Freelance Channel *******************/
    }
    save(isValid){
         if (isValid) {
      let $state = this.$state
      let self = this 
      var option = {
        "id": this.channelId,
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
      this.FreelanceChannelService.updateFreelanceChannel(option,function(data){
        console.log("Data is "+JSON.stringify(data));
        if(data.data == "success"){
            let alert = { type: 'success', 'title': 'Success!', msg: 'Successfully update!' }
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

export const FreelanceChannelsEditComponent = {
    templateUrl: './views/app/components/freelance-channels-edit/freelance-channels-edit.component.html',
    controller: FreelanceChannelsEditController,
    controllerAs: 'vm',
    bindings: {}
};
