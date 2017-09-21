class UserSettingsController{
    constructor($scope, $state,API,SettingServiceService){
        'ngInject';
        this.SettingService = SettingServiceService;
        //
        var setting = {};
    }
    save(){
        this.SettingService.hello();
    }
    $onInit(){
        this.SettingServiceService.hello();
    }
}

export const UserSettingsComponent = {
    templateUrl: './views/app/components/user-settings/user-settings.component.html',
    controller: UserSettingsController,
    controllerAs: 'vm',
    bindings: {}
};
