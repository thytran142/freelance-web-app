class UserSettingsController{
    constructor($scope, $state,$stateParams,$window,$http,SettingServiceService){
        'ngInject';
        this.SettingService = SettingServiceService
        var self = this
        self.fulltime_job_salary = ""
        self.fulltime_job_hours = ""
        self.average_fulltime_job_salary = ""
        self.average_freelance_job_salary = ""
        self.number_hours_freelance_weekday = ""
        self.number_hours_freelance_weekend = ""
        self.opening_proposal = ""
        self.ending_proposal = ""
        var option = {}
        this.formSubmitted = false
        this.alerts = []
        this.$state = $state 
        if ($stateParams.alerts) {
            this.alerts.push($stateParams.alerts)
        }
        //******************Retrieve Setting Data *******************/
        var self = this
        SettingServiceService.getSetting(option,function(data){
         console.log("Data is "+JSON.stringify(data.data))
        
        angular.forEach(data.data,function(value,key){
           if(value.id == "1"){
              self.fulltime_job_salary = value.value
            }
            if(value.id == "2"){
                self.fulltime_job_hours = value.value
            }
            if(value.id == "3"){
                self.average_fulltime_job_salary = value.value
            }
            if(value.id == "4"){
                self.average_freelance_job_salary = value.value
            }
            if(value.id == "5"){
                self.number_hours_freelance_weekday = value.value
            }
            if(value.id == "6"){
                self.number_hours_freelance_weekend = value.value 
            }
            if(value.id == "7"){
                self.opening_proposal = value.value 
            }
            if(value.id == "8"){
                self.ending_proposal = value.value 
            }
        });

        
       });
        //************End Retrieve Setting Data *****************/
    }

    save (isValid) {
    if (isValid) {
      let $state = this.$state
      let self = this 
      var option = {
        "fulltime_job_salary": this.fulltime_job_salary,
        "fulltime_job_hours": this.fulltime_job_hours,
        "average_fulltime_job_salary": this.average_fulltime_job_salary,
        "average_freelance_job_salary": this.average_freelance_job_salary,
        "number_hours_freelance_weekday": this.number_hours_freelance_weekday,
        "number_hours_freelance_weekend": this.number_hours_freelance_weekend,
        "opening_proposal": this.opening_proposal,
        "ending_proposal": this.ending_proposal
      }
      console.log("option is "+JSON.stringify(option));
      this.SettingService.putSetting(option,function(data){
        console.log("Data is "+JSON.stringify(data));
        if(data.data == "success"){
            let alert = { type: 'success', 'title': 'Success!', msg: 'User has been updated.' }
            self.alerts.push(alert)
        }else{
            let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
            self.alerts.push(alert)
        }
      });
      
    } else {
      this.formSubmitted = true
    }
  }
  adjustSalaryPerHour(){
    console.log("Access adjustSalaryPerHour")
    if(this.fulltime_job_hours ==0){
        this.average_fulltime_job_salary = 0
    }else{
        var average = this.fulltime_job_salary / (20*this.fulltime_job_hours) 
        this.average_fulltime_job_salary = average 
    }
  }
}

export const UserSettingsComponent = {
    templateUrl: './views/app/components/user-settings/user-settings.component.html',
    controller: UserSettingsController,
    controllerAs: 'vm',
    bindings: {}
};
